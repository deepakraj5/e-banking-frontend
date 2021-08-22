import Cookies from 'universal-cookie'

export default function authCheckService() {
    const cookie = new Cookies()
    if(cookie.get('jwt')) {
        return true
    }else {
        return false
    }
}