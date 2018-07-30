import App from './App'
const aaa = ()=>import('./components/aaa')

const registerRouter = window.VK.registerRouter
const name = 'test'
const routers = [
		{
			path:'/test',
			component: App
		},
		{
			path:'/test/aaa',
			component: aaa
		}
	]


registerRouter({
	name,
	routers
})
