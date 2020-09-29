import Cookies from 'js-cookie'

const TokenKey = 'X-Login'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  Cookies.remove('SESSION')
  return Cookies.remove(TokenKey)
}
