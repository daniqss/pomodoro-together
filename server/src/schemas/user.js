import e from 'express'
import z from 'zod'

const userSchema = z.object({
    id: z.string().refine((id) => z.string().uuid().check(id), {
        message: 'Invalid user id'
    }),
    name: z.string(),
    isHost: z.boolean()
})

export const validateUser = (user) => {
    return userSchema.safeParse(user)
}

export const validateUserId = (id) => {
    return z.string().uuid().safeParse(id)
}
