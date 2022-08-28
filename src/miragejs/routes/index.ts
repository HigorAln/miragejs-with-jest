import { Registry, Server } from 'miragejs';

export default function routes(this: Server<Registry<any, any>>) {
  this.namespace = "api";
  this.timing = 1000;

  this.get("/tweets", (schema, request) => {
    const { queryParams }: any = request;
    const limit = 10;
    if (queryParams.skip ) {
      return schema.db.tweets.slice(queryParams.skip, limit);
    }

    return schema.db.tweets.slice(0, limit);
  })
}