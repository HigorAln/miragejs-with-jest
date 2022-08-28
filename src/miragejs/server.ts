import { Server } from 'miragejs';
import factories from './factories'
import models from './models'
import seeds from './seeds'
import routes from './routes'

export const makeServer = ({ environment = "test"} = {}) => {
  return new Server({
    environment,
    factories,
    models,
    seeds,
    routes
  })
}