import App from './App'
const aaa = ()=>import('./components/aaa')
//import aaa from './components/aaa'
const registerRouter = window.VK.registerRouter
const name = 'test'
const routers = [
		{
			path:'/test',
			component: App,
			children:[
				{
					path:'aaa/:id',
					component: aaa
				}
			]
		},
		{
			path: '/test/:id',
			component: aaa
		}
	]


registerRouter({
	name,
	routers
})
