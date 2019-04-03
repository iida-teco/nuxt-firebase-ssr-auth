import jwtDecode from 'jwt-decode'

/**
 * set cookie adapted to firebase
 * @param object cookies
 * @param string name
 * @param object value
 */
export function setCookie(cookies, name, value) {
  let cookie = deserialize(cookies.get('__session')) || {}
  cookie[name] = value
  cookies.set('__session', serialize(cookie))
}

/**
 * get cookie adapted to firebase
 * @param object cookies
 * @param string name
 */
export function getCookie(cookies, name) {
  const cookie = deserialize(cookies.get('__session')) || {}
  return cookie[name] || null
}

/**
 * remove cookie adapted to firebase
 * @param object cookies
 * @param string name
 */
export function removeCookie(cookies, name) {
  let cookie = deserialize(cookies.get('__session')) || {}
  delete cookie[name]
  cookies.set('__session', serialize(cookie))
}

/**
 * serialize object
 * @param object obj
 * @return string
 */
export function serialize(obj) {
  try {
    var str = JSON.stringify(obj, function replacer(k, v) {
      if (typeof v === 'function') {
        return v.toString()
      }
      return v
    })
    return str
  } catch (e) {
    return ''
  }
}

/**
 * deserialize string
 * @param string str
 * @return object
 */
export function deserialize(str) {
  try {
    var obj = JSON.parse(str, function reciever(k, v) {
      if (typeof v === 'string' && v.match(/^function/)) {
        return Function.call(this, 'return ' + v)()
      }
      return v
    })
    return obj
  } catch (e) {
    return {}
  }
}

/**
 * decode token with jwt
 * @param object file
 * @return string content type
 */
export function getUserFromToken(token) {
  if (!token) return

  const decodedToken = jwtDecode(token)
  if (!decodedToken) return

  return decodedToken
}
