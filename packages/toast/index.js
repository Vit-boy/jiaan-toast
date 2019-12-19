import Toast from './main.vue'

Toast.install = function(Vue,options) {
	Vue.component(Toast.name, Toast)
}

export default Toast;