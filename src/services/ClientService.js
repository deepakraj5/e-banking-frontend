import axios from 'axios'

const baseUrl = 'http://localhost:3001'

class ClientService {

    newAccount(client) {
        return axios.post(baseUrl + '/signup', client)
    }
}

export default new ClientService()