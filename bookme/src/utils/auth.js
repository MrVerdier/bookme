import decode from 'jwt-decode'
import axios from 'axios'

const REST_ENDPOINT = 'http://localhost:5000/'
const AUTH_TOKEN_KEY = 'authToken'

export async function loginUser(username, password) {
	console.log('logging in')
	const user = {
		username: username,
		password: password
	}
	await axios
		.post(`${REST_ENDPOINT}users/login`, user, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(function(resp) {
			setAuthToken(resp.data.accessToken)
			console.log('logged', resp)
		})
		.catch(function(resp) {
			console.log('ERROR', resp)
		})
}

export function logoutUser() {
	console.log('loggin out')
	clearAuthToken()
}

export function setAuthToken(token) {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function getAuthToken() {
	return localStorage.getItem(AUTH_TOKEN_KEY)
}

export function clearAuthToken() {
	axios.defaults.headers.common['Authorization'] = ''
	localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function isLoggedIn() {
	let authToken = getAuthToken()
	if (authToken) {
		return true
	} else {
		return false
	}
	// return !!authToken && !isTokenExpired(authToken)
	// return true
}

export function getUserInfo() {
	if (isLoggedIn()) {
		return decode(getAuthToken())
	}
}

// TODO reenable isTokenExpried functionality

// function getTokenExpirationDate(encodedToken) {
// 	let token = decode(encodedToken)
// 	if (!token.exp) {
// 		return null
// 	}

// 	let date = new Date(0)
// 	date.setUTCSeconds(token.exp)

// 	return date
// }

// function isTokenExpired(token) {
// 	let expirationDate = getTokenExpirationDate(token)
// 	return expirationDate < new Date()
// }
