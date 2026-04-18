// Vercel Node.js serverless adapter for TanStack Start (H3 fetch handler)
import server from "../dist/server/server.js";

export default async function handler(req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = new URL(req.url, `${protocol}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
  }

  let body = undefined;
  if (req.method !== "GET" && req.method !== "HEAD") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    body = Buffer.concat(chunks);
  }

  const fetchResponse = await server.fetch(
    new Request(url.toString(), { method: req.method, headers, body, duplex: "half" }),
  );

  res.statusCode = fetchResponse.status;
  for (const [key, value] of fetchResponse.headers.entries()) {
    res.setHeader(key, value);
  }

  if (fetchResponse.body) {
    const reader = fetchResponse.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }

  res.end();
}
