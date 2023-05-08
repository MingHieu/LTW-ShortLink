import instance from './axios'

export const getUser = (username, password) =>
  instance.post('/auth/login', { username, password }).then((response) => {
    // if (response.data.username) {
    //   localStorage.setItem('user', JSON.stringify(response.data))
    // }

    // return response.data
    console.log(response)
  })
