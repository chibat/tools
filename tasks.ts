#!/usr/bin/env -S deno run -A

import { existsSync } from "https://deno.land/std@0.93.0/fs/exists.ts";

//
// Tasks
//

const TASKS = [build, dev, start, deploy];

async function build() {
  rm(".aleph");
  await denoRun([
    "--allow-net=deno.land,esm.sh,cdn.esm.sh,registry.npmjs.org",
    "--allow-read=.," + Deno.execPath() + "," + await denoDir(),
    "--allow-write",
    "--allow-env=ALEPH_DEV,ALEPH_DEV_PORT,ALEPH_VERSION,ALEPH_BUILD_MODE,ALEPH_FRAMEWORK,ESBUILD_BINARY_PATH,XDG_CACHE_HOME,HOME,LOCALAPPDATA,DENO_TESTING",
    alephCliPath(),
    "build",
  ]);
}

async function deploy() {
  await build();
  Deno.createSync("docs/.nojekyll");
  await $("git add .");
  await $("git commit -m deploy");
  await $("git push");
}

async function dev() {
  await denoRun([
    "--allow-net=deno.land,esm.sh,cdn.esm.sh,:8080",
    "--allow-read=.," + Deno.execPath() + "," + await denoDir(),
    "--allow-write=.aleph," + await denoDir(),
    "--allow-env=ALEPH_DEV,ALEPH_DEV_PORT,ALEPH_VERSION,ALEPH_BUILD_MODE,ALEPH_FRAMEWORK,DENO_TESTING",
    alephCliPath(),
    "dev",
  ]);
}

async function start() {
  await denoRun([
    "--allow-net=deno.land,esm.sh,:8080",
    "--allow-read=.," + Deno.execPath() + "," + await denoDir(),
    "--allow-write=.aleph," + await denoDir(),
    "--allow-env=ALEPH_DEV,ALEPH_DEV_PORT,ALEPH_VERSION,ALEPH_BUILD_MODE,ALEPH_FRAMEWORK",
    alephCliPath(),
    "start",
  ]);
}

//
// Aleph.js
//

function alephCliPath() {
  return JSON.parse(Deno.readTextFileSync("import_map.json"))
    .imports["aleph/"] + "cli.ts";
}

//
// Utility
//

async function $(cmd: string[] | string) {
  const command = cmd instanceof Array ? cmd : cmd.split(" ");
  const status = await Deno.run({
    cmd: command,
    stdout: "inherit",
    stderr: "inherit",
  }).status();
  if (status.code != 0) {
    Deno.exit(status.code);
  }
}

async function denoRun(params: string[]) {
  await $(
    [Deno.execPath(), "run", "--allow-run"].concat(params),
  );
}

function rm(path: string) {
  if (existsSync(path)) {
    Deno.removeSync(path, { recursive: true });
  }
}

async function denoDir() {
  const p = Deno.run({
    cmd: [Deno.execPath(), "info", "--json", "--unstable"],
    stdout: "piped",
    stderr: "null",
  });
  const output = (new TextDecoder()).decode(await p.output());
  p.close();
  return JSON.parse(output).denoDir;
}

//
// main
//

if (import.meta.main) {
  const taskName = Deno.args[0];
  if (!taskName) {
    TASKS.forEach((task) => console.log(task.name));
    Deno.exit(0);
  }
  const tasks = TASKS.filter((task) => task.name === taskName);
  if (tasks.length == 0) {
    console.log("Unknown task name");
    Deno.exit(1);
  }

  tasks.find((task) => task());
}
