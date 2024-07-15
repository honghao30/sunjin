import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/Login.vue'
import Dashboard from "@/views/dashboard/Dashboard";
import ErrorPage from '@/components/error/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Login",
		component: Login,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard,
	},
	{
		path: "*",
		name: 'error',
		component: ErrorPage
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
