<!--default vue-->
<template>
	<div class="wrapper">
		default page
	</div>
</template>

<script>
	export default {
		name: 'default',
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

	.wrapper {
		position: relative;
		text-align: center;
		margin: 100px 100px;
	}

	.wrapper h1 {
		padding: 20px;
		color: #000000;
	}

	header {
		background: white;
	}
</style>
