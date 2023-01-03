import { renderToReadableStream } from "./deps.ts";
import { React } from "./deps.ts";

const App = () => (
  <html>
    <body>
      <h1>Hello World</h1>
      <p>This is an example.</p>
    </body>
  </html>
);

const headers = {
  headers: {
    "Content-Type": "text/html",
    "Cache-Control": "no-transform",
  },
};

Deno.serve(
  async (req) => {
    return new Response(await renderToReadableStream(<App />), headers);
  },
  { port: 3000 },
);
