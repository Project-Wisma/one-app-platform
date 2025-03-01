import jwt, { JwtPayload } from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY

interface Payload {
    userId: number,
    username: number
}

export const generateToken = (payload: Payload) => {
    if (!SECRET_KEY) {
        throw new Error("SECRET_KEY is not defined in environment variables")
    }

    return jwt.sign(payload, SECRET_KEY)
}

export const verifyToken = (token: string) => {
    if (!SECRET_KEY) {
        throw new Error("SECRET_KEY is not defined in environment variables")
    }

    return jwt.verify(token, SECRET_KEY)
}

