import { createWebHistory, createRouter } from "vue-router"
import Redirect from "@/pages/Redirect.vue"
import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Contact from "@/pages/Contact.vue"
import Experience from "@/pages/Experience.vue"
import TippieMarketingIntern from "@/pages/TippieMarketingIntern.vue"
import BlackInBusiness from "@/pages/BlackInBusiness.vue"
import TIHISG from "@/pages/TIHISG.vue"

const routes = [
	{
		path: "/redirect",
		name: "Redirect",
		component: Redirect
	},
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
	},
	{
		path: "/tippie-marketing-intern",
		name: "TippieMarketingIntern",
		component: TippieMarketingIntern
	},
	{
		path: "/black-in-business",
		name: "BlackInBusiness",
		component: BlackInBusiness
	},
	{
		path: "/this-is-how-i-stay-grounded",
		name: "TIHISG",
		component: TIHISG
	},
]


const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router