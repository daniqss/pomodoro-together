import { v4 as uuidv4, validate } from 'uuid'
import { User } from './user'
import { validateUser, validateUserId } from '../../schemas/user'

export default class Party {
    constructor(user) {
        const userValidation = validateUser(user)
        if (!userValidation.success) {
            throw new Error(userValidation.error)
        }

        this._users = [user]
        this._code = uuidv4()
        this._host = user.id
    }

    addUser(user) {
        const userValidation = validateUser(user)
        if (!userValidation.success) {
            throw new Error(userValidation.error)
        }

        this.users.push(user)
    }

    removeUser(userId) {
        const userIdValidation = validateUserId(userId)
        if (!userIdValidation.success) {
            throw new Error(userIdValidation.error)
        }
        const previousLength = this.users.length
        this.users = this.users.filter((user) => user.id !== userId)
        if (this.users.length !== previousLength) {
            if (this.host === userId) {
                this.host = this.users[0].id
            }
        }
    }

    get code() {
        return this.code
    }
}
