import {makeAutoObservable} from "mobx";


export default class UserStore {
    constructor() {
        this._isAuth = false
        this._token = ''
        this._userData = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setToken(token) {
        this._token = token
    }

    setUserData(userData) {
        this._userData = JSON.parse(JSON.stringify(userData))
    }

    get isAuth() {
        return this._isAuth
    }

    get token() {
        return this._token
    }

    get userData() {
        return JSON.parse(JSON.stringify(this._userData))
    }
}