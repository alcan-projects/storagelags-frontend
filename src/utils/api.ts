import axios from 'axios'

const token = ""

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export const apiFile = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data"
  }
})