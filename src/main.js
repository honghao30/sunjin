import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ko';
import 'element-ui/lib/theme-chalk/index.css';

import {setMock} from './mock/index';

import i18n from './i18n'

import './assets/styles/index.scss'

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

Vue.use(ElementUI, {locale}).use(VueAwesomeSwiper);
Vue.config.productionTip = false;

Vue.prototype.$EventBus = new Vue();

new Vue({
    router,
    store,
    i18n,
	beforeCreate() {
		init();
	},
    render: h => h(App)
}).$mount('#app')

function init() {
	if (process.env.NODE_ENV === 'local') {
		//mockData 세팅
		setMock();
	}
}