import React, { ComponentType } from "react";
import "https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} />
    </main>
  );
}
