const server = Bun.serve({
  hostname: "0.0.0.0", // Importante: escuchar en todas las interfaces
  port: process.env.PORT ?? 3000,
  async fetch(request) {
    return new Response("API de Bun está funcionando correctamente");
  }
});

console.log(`Server is running on ${server.url}:${server.port}`);