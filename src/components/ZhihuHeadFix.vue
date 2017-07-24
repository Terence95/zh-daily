<!--ZhihuHeadFix vue-->
<template>
	<div class="wrapper m1">
		知乎headFix
	</div>
</template>

<script>
	export default {
		name: 'ZhihuHeadFix',
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
