import decode from 'jwt-decode'
import axios from 'axios'

const REST_ENDPOINT = 'http://localhost:5000/'
const AUTH_TOKEN_KEY = 'authToken'

export async function loginUser() {
	console.log('logging in')
	const username = {
		username: 'Jim'
	}
	await axios
		.post(`${REST_ENDPOINT}users/login`, username, {
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
	// let authToken = getAuthToken()
	// console.log(authToken)
	// return !!authToken && !isTokenExpired(authToken)
	return false
}

export function getUserInfo() {
	if (isLoggedIn()) {
		return decode(getAuthToken())
	}
}

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
