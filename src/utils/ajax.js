import { axios } from '@/utils/request'

export default function ({ url, params = {}, type = 'get' }) {
  return new Promise((resolve, reject) => {
    if (type === 'get') {
      axios.get(url, {
        params
      })
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    } else if (type === 'post') {
      axios.post(url, {
        ...params
      })
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    }
  })
}
