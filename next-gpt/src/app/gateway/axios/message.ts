import { IMessageGateway } from "@modules/message/gateway"
import { GatewayGRCP } from ".."
import { MESSAGES_EVENTS } from "@config/routes"

export class AxiosMessageGateway
  extends GatewayGRCP
  implements IMessageGateway
{
  stream(path: string) {
    console.log("INIT STREAM FOR:", path)

    const eventSource = new EventSource(path)

    eventSource.onopen = (data) => console.log("[STREAM] - OPEN: ", { data })

    eventSource.onerror = (data) => {
      console.error("[STREAM] - ERROR: ", { data })
      eventSource.close()
    }

    eventSource.onmessage = (data) =>
      console.log("[STREAM] - MESSAGE: ", { data })

    eventSource.addEventListener("end", (data) => {
      console.log("[STREAM] - END", { data })
      eventSource.close()
    })

    return eventSource
  }

  async writteMessage(id: string) {
    const event = this.stream(MESSAGES_EVENTS(id))
    const response = await this.get(MESSAGES_EVENTS(id))

    return { event, response }
  }
}
