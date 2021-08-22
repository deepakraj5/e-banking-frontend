import axios from 'axios'
import AuthService from './AuthService'

const baseUrl = 'http://localhost:3001'

class ClientService {

    newAccount(client) {
        return axios.post(baseUrl + '/signup', client)
    }

    loginAccount(credentials) {
        return axios.post(baseUrl + '/login', credentials)
    }

    profileDetails() {
        return axios.get(baseUrl + '/profile', { headers: AuthService() })
    }

    fundTransfer(toAccountNumber, amount) {
        return axios.post(baseUrl + '/fundtransfer', { toAccountNumber, amount }, { headers: AuthService() })
    }

    viewTransaction() {
        return axios.get(baseUrl + '/viewTransaction', { headers: AuthService() })
    }
}

export default new ClientService()