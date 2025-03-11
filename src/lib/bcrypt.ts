import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10)

export const hashPassword = (plainPassword: string) => {
    return bcrypt.hashSync(plainPassword, salt)
}

export const comparePassword = (plainPassword: string, hashedPassword: string) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}
