import * as bcrypt from 'bcryptjs'

export default (password: string) => {
  if (password.length < 8)
    throw new Error('Password must be 8 characters or longer')

  return bcrypt.hash(password, 10)
}
