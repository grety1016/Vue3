import {createRouter,createWebHistory} from 'vue-router'
const Home = ()=> import ("@/components/HomeView.vue");


const routes =[
    {
        path:"/",
        alias:"/home",
        name: "Home",
        component: Home, 
    }


];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});