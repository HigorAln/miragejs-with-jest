import { Registry, Server } from "miragejs";

export default function seeds(server: Server<Registry<any, any>>) {
  server.createList("tweet", 2)
}