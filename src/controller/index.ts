import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newUser = getRepository(User).create(req.body)
    const response = await getRepository(User).save(newUser)
    return res.json(response);
  } catch (error) {
    console.log('Error create user', error);
  }
}

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userRepository = getRepository(User)
    const users = await userRepository.find()
    return res.json(users);
  } catch (error) {
    console.log('Error get users', error);
  }
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne(req.params.id)
    return res.json(user);
  } catch (error) {
    console.log('Error get users', error);
  }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne(req.params.id)
    user ? user.firstName = req.body.firstName : 'User not found'
    await userRepository.save(user)
    return res.json(user);
  } catch (error) {
    console.log('Error get users', error);
  }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userRepository = getRepository(User)
    const user = await userRepository.delete(req.params.id)
    const result = user ? 'User deleted' : 'User not found'
    return res.json(result);
  } catch (error) {
    console.log('Error get users', error);
  }
}
