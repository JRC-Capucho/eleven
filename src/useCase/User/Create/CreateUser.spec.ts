import {expect, test} from 'vitest'
import { User } from '../../../entities/User/User'
import axios from 'axios'



test("should create object user ", () =>{
  const data = {
    name:"joao",
    email:"joao@gmail.com",
    password:"123"
  }
  const user = new User(data)

  expect(user).toBeInstanceOf(User)
})


test("should crate user by controller",()=>{
  axios.post()

})
