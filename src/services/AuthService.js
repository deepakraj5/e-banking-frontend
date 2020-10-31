import Cookies from 'universal-cookie'

export default function AuthService () {
    const cookie = new Cookies()
    const jwt = cookie.get('jwt')

    if(jwt) {
        return {
            Authorization: 'Bearer ' + jwt
        }
    } else {
        return { }
    }
}