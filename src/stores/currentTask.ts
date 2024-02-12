import { defineStore } from "pinia";
export const useCurrentStackStore = defineStore('currentTask', () => {
    let task = 1
    function changeTask(current: number) {
        task = current
    }
    return { task, changeTask }
})