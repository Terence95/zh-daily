<!--ZhihuHead vue-->
<template>
	<div class="wrapper m1">
		知乎head
	</div>
</template>

<script>
	export default {
		name: 'ZhihuHead',
		data() {
			return {
				
			}
		},
		created: function() {

		},
		methods: {
			click: function() {
				console.log('back');
				history.back();
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	body {
		text-align: center;
	}
</style>
