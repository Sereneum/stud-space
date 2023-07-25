import {makeAutoObservable} from "mobx";


export default class LocalConfig {
    constructor() {
        this._theme = {}
        this._sky = {
            text: 'Анимированный фон',
            key: 'animBg',
            value: null,
            set: () => this._sky.value
        }
        this._msg = {
            text: 'Показывать количество непрочитанных писем',
            key: 'msgCnt',
            value: null
        }
        makeAutoObservable(this)
    }

    setTheme(theme) {
        this._theme = theme
    }

    setSky(sky) {
        this._sky = sky
    }

    setMsg(msg) {
        this._msg = msg
    }

    get theme() {
        return this._theme
    }

    get sky() {
        return this._sky
    }

    get msg() {
        return this._msg
    }
}