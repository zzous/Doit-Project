
const pageRouter = {
    path:"/",
    name:"layout",
    redirect: "/main",
    component:()=>import("@/layout/index.vue"),
    children: [
        {
        path:"/main",
        name:"main",
        component: () => import("@/views/main/main.vue"),
        }
    ]
}
export default pageRouter;