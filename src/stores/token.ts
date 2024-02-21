import { defineStore } from "pinia";
export const useToken = defineStore('HomeTask', () => {
    let token = '123456789'
    function changeToken(newtoken: string) {
        token = newtoken
        localStorage.setItem("token", token)
    }
    return { token, changeToken }
})