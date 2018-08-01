import routers from './router'

const name = 'test'
const registerRouter = window.VK.registerRouter
registerRouter({
	name,
	routers
})
