import { v4 as uuidv4 } from 'uuid'
import { validateUser } from '../schemas/user'

export default class User {
    constructor(name, isHost) {
        this._name = name
        this._id = uuidv4()
        this._isHost = isHost
    }

    get id() {
        return this.id
    }

    get name() {
        return this._name
    }

    get isHost() {
        return this._isHost
    }
}
