/// <reference types="vite/client" />
declare module '*.vue' {
    import { Component } from 'vue'
    const component: Component
    export default component
}
declare module '@/api/request.js'
declare module "@/views/student/program/code/function.js"
declare module "@/views/student/program/code/block.js"
