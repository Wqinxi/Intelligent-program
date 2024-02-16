import { defineStore } from "pinia";
import axios from 'axios'
export const useMessageStore = defineStore('Messasge', () => {
    let id = 13332
    let messages: any[] = [];
    return { messages }
})