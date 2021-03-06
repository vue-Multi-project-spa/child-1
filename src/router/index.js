import App from '../App'
const aaa = ()=>import('../components/aaa')
const bbb = ()=>import('../components/bbb')
const ccc = ()=>import('../components/ccc')
const r404 = ()=>import('../components/404')
//import aaa from '../components/aaa'
//import bbb from '../components/bbb'
//import ccc from '../components/ccc'
const routers = [
	{
		path:'/test',
		component: App,
		children:[
			{
				path:'aaa',
				component: aaa,
				children:[
					{
						path: ':bbb',
						component: bbb
					}
				]
			},
			{
				path: ':id',
				component: r404
			},
			{
				path: 'ccc',
				component: ccc
			},
			{
				path: '*',
				redirect: '/404'
			}
		]
	}
]

export default routers