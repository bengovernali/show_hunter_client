import Cookies from 'universal-cookie'

export function setCookie(name, value) {
    const cookies = new Cookies()
    cookies.set(name, value, { path: '/', maxAge: 900})
}

export function getCookie(name) {
    const cookies = new Cookies()
    return cookies.get(name)
}

export function deleteCookie(name) {
    const cookies = new Cookies()
    cookies.remove(name)
}