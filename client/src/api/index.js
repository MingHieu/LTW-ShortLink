import request from './api.service'

export const api = {
  signup: () => request.post(),

  login: () => request.post()

}
