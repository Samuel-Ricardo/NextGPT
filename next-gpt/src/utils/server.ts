import { Event, IError } from "@Types"

export function response(responseStream: TransformStream, status = 200) {
  return new Response(responseStream.readable, {
    status,
    headers: {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
    },
  })
}

export function writeStream(
  writter: WritableStreamDefaultWriter,
  event: Event,
  data: any
) {
  const encoder = new TextEncoder()

  writter.write(encoder.encode(`event: ${event}\n`))
  writter.write(encoder.encode(`id: ${new Date().getTime()}\n`))

  if (data instanceof IError) console.error(data)

  console.log({ AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: { ...data } })

  const streamData = typeof data === "string" ? data : JSON.stringify(data)

  writter.write(encoder.encode(`data: ${streamData}\n\n`))
}

export const dynamic = "force-dynamic"
