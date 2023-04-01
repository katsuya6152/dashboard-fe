import axios from 'axios'

const resolvedServer = (() => {
  if (process.env.Server) {
    return process.env.Server
  }
  return 'http://localhost:3001'
})()

export const ax = axios.create({
  baseURL: resolvedServer,
})
