import { defineStore } from "pinia";
export const useContentstore = defineStore('HomeTask', () => {
    let content: any[] = [];
    return { content }
})