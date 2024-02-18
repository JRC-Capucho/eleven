import { expect, test } from 'vitest'
import { User } from '../../../entities/User/User'
import axios from 'axios'

const url = "http://localhost:3333"

test("should create object user ", () => {
  const data = {
    name: "joao",
    email: "joao@gmail.com",
    password: "123"
  }
  const user = new User(data)

  expect(user).toBeInstanceOf(User)
})


test("should create user by controller", async () => {
  await axios.post(`${url}/users`, {
    name: "joao",
    email: "j@j.com",
    password: "123"
  }).then(res => {
    expect(res.status).toBe(201)
  }).catch(err => {
    console.log(err);
  })
})


test("should error when create user by controller", async () => {
  await axios.post(`${url}/users`, {
    name: "joao",
    email: "j@j.com",
    password: "123"
  }).then(res => {
  }).catch(err => {
    expect(err).toThrowError()
  })
})
