import { Factory } from 'miragejs'
import { faker } from '@faker-js/faker';

export default {
  tweet: Factory.extend({
    name(){
      return `${faker.name.firstName()} ${faker.name.lastName()}`;
    },
    username(){
      return faker.internet.userName();
    },
    interactions(){
      return {
        comments: faker.random.numeric(),
        likes: faker.random.numeric(),
        reTwitters: faker.random.numeric(),
      }
    },
    avatar_url(){
      return faker.internet.avatar();
    },
    font() {
      const random = Number(faker.random.numeric(1));
      if (random >= 5){
        return {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          interaction: random < 7 ? "HEALTH" : random <= 8 ? "COMMENT" : "FORWARD"
        }
      }else {
        return null
      }
    },
    date(){
      return faker.date.recent(1).toISOString();
    },
    description(){
      return faker.lorem.text();
    }
  })
}