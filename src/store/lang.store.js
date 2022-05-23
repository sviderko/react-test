import { makeAutoObservable } from "mobx";
import { engLang, ruLang } from "../constants/localization";

class LangStore {
    lang = engLang;

    constructor() {
        makeAutoObservable(this);
    }

    switchLang(lang) {
        switch (lang) {
            case "ru":
                this.lang = ruLang;
                break;
            case "eng":
                this.lang = engLang;
                break;
            default:
                this.lang = ruLang;
                break;
        }
    }
}

export default new LangStore();
