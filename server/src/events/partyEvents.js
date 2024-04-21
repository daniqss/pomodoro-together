import Party from '../models/party'
import User from '../models/user'

const parties = []

export default class PartyEvents {
    static async createParty(socket, message) {
        const hostUser = new User(message.userName, true)
        const party = new Party(hostUser)

        parties.push(party)
    }

    static async joinParty(socket, message) {}

    static async leaveParty(socket, message) {}

    static async destroyParty(socket, message) {}

    static async emitPartyCode(socket, message) {}
}
