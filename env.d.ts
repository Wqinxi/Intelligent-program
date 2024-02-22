/// <reference types="vite/client" />
declare module '*.vue' {
    import { Component } from 'vue'
    const component: Component
    export default component
}
declare module '@/api/request.js'
declare module "@/views/student/program/code/game.js"
declare module "@/views/student/program/code/block.js"
declare module "@/views/student/program/code/level.js"
declare module "@/views/student/program/code/player.js"
declare module "@/views/student/program/code/playing.js"
