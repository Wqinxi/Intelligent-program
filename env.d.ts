/// <reference types="vite/client" />
declare module '*.vue' {
    import { Component } from 'vue'
    const component: Component
    export default component
}
declare module '@/api/request.js'
declare module "@/views/student/blockData/game.js"
declare module "@/views/student/blockData/block.js"
declare module "@/views/student/blockData/level.js"
declare module "@/views/student/blockData/player.js"
declare module "@/views/student/blockData/playing.js"
