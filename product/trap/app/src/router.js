import Vue from 'vue'
import Router from 'vue-router'
import index from './routes/index.vue'
import blog from './routes/blog.vue'
import callme from './routes/callme.vue'
import info from './routes/info.vue'
import pics from './routes/pics.vue'



Vue.use(Router)



var routes = [{
		path: '/',
		component: index
	},{
		path: '/blog',
		component: blog
	},{
		path: '/callme',
		component: callme
	},{
		path: '/info',
		component: info
	},{
		path: '/pics',
		component: pics
	},
]

export default new Router({
	routes
})
