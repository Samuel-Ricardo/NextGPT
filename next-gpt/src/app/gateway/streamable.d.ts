export interface IStreamable {
  stream(path: string): EventSource | Promise<EventSource>
}
