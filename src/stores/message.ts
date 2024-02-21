import { defineStore } from "pinia";
export const useMessageStore = defineStore('Messasge', () => {
    let messages: any[] = [];
    return { messages }
})