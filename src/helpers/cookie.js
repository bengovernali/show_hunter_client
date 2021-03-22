import Cookies from 'universal-cookie'

export function setCookie(name, value) {
    const cookies = new Cookies()
    cookies.set(name, value, { path: '/', maxAge: 900})
    console.log(cookies.get(name))
}

export function getCookie(name) {
    const cookies = new Cookies()
    console.log(cookies.get(name))
}