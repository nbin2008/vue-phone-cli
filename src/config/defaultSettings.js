export default {
  expire: 7 * 24 * 60 * 60 * 1000,
  storageOptions: {
    namespace: 'pro__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'session' // storage name session, local, memory
  }
}
