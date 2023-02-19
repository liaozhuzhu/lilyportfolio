import { createWebHistory, createRouter } from "vue-router"
import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Contact from "@/pages/Contact.vue"
import Experience from "@/pages/Experience.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact
	},
	{
		path: "/experience",
		name: "Experience",
		component: Experience
	}
]


const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router