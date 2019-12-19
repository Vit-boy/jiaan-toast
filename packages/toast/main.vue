<template>
	<div style="z-index: 2000;"></div>
</template>

<script>
	import ToastComponet from './jiaan-toast.vue'
	import Vue from 'vue'

	export default{
		name: 'toast',
		data() {
			return{
				message: 'hello Main'
			}
		},
		methods: {
			toast(message, option) {
				var opt = {
					duration: 3000
				}
				if (typeof option == 'object') {
					for(var key in option) {
						opt[key] = option[key]
					}
				}

				const ToastController = Vue.extend(ToastComponet);
				var instance = new ToastController().$mount(document.createElement("div"));
				document.body.appendChild(instance.$el)
				instance.message = message;
				instance.visible = true;

				setTimeout(() => {
					instance.visible = false;
					document.body.removeChild(instance.$el);
				}, opt.duration)
			},
			show(message, option) {
				this.toast(message, option)
			}
		}
	}
</script>