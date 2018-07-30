import App from './App'
const aaa = ()=>import('./components/aaa')

const registerRouter = window.VK.registerRouter

registerRouter([
	{
		path:'/test',
		component: App
	},
	{
		path:'/test/aaa',
		component: aaa
	}
])
