<template>
	<section class="toast-container">
		<div class="toast">
			<span>{{message}}</span>
		</div>
	</section>
</template>

<style lang='scss'>
	.toast-container{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 2000;
		display: flex;
		justify-content: center;
		align-items: center;
		.toast{
			width: 3.6rem;
			height: 0.8rem;
			line-height: 0.8rem;
			text-align: center;
			background-color: rgba(0,0,0,0.61);
			border-radius: 0.1rem;
			color: white;
			font-size: 0.3rem;
		}
	}
</style>

<script>
	export default{
		data(){
			return{
				message: 'toast template'
			}
		}
	}
</script>