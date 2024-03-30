import { defineStore } from "pinia";
export const useCurrentTaskStore = defineStore('useCurrentTaskStore', () => {
    let currentTask = 0
    return { currentTask }
})