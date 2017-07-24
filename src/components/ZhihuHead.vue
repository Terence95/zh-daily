<!--ZhihuHead vue-->
<template>
	<div class="wrapper m1">
		default page
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
</style>
