import { Model } from "miragejs";

export default {
  tweet: Model.extend<Partial<any>>({}),
}