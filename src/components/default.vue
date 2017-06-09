<!--default vue-->
<template>
	<div class="wrapper">
		
			<h1>智能体检</h1>
		

		
			<h1>电量管理</h1>
		
		
		
			<h1>空气报告</h1>
		
	</div>
</template>

<script>
	export default {
		name: 'checkAppointment',
		data() {
			return {
				msg: 'another page',
				daysOfWeek: ['每周日', '每周一', '每周二', '每周三', '每周四', '每周五', '每周六'],
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