import App from './App'
const aaa = ()=>import('./components/aaa')

const registerRouter = window.VK.registerRouter
const name = 'test'
const routers = [
		{
			path:'/test',
			component: App,
			children:[
				{
					path:'aaa',
					component: aaa
				}
			]
		},
		
	]


registerRouter({
	name,
	routers
})
