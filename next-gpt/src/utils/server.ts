export function response(
  responseStream: TransformStream,
  status: number = 200
) {
  return new Response(responseStream.readable, {
    status,
    headers: {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
    },
  })
}
