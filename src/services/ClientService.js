import axios from 'axios'

const base_url = 'http://localhost:8080/api/v1/clients'

class ClientService {

    getClientByFirstName(firstName){
        return axios.get(base_url + '/' + firstName)
    }

    newClient(formData, client){
        return axios.post(base_url, formData, client)
    }
}

export default new ClientService()