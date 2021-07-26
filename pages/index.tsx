import React from "react";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <ul>
        <li>
          <a href="/tool/base64">Base64 Encode/Decode</a>
        </li>
        <li>
          <a href="/tool/url">URL Encode/Decode</a>
        </li>
        <li>
          <a href="/tool/password">Password Generator</a>
        </li>
        <li>
          <a href="https://chibat.github.io/monaco-editor-samples/browser-amd-diff-editor/">Diff</a>
        </li>
      </ul>
    </div>
  );
}
