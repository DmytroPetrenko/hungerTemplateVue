<template>
	<footer id="footer">
		<p class="text">Copyright {{ year }}</p>
	</footer>
</template>
<script>
export default {
	computed: {
		year() {
			return new Date().getFullYear()
		},
	},
}
</script>
<style lang="scss" scoped>
#footer {
	padding: 0;
	background-color: black;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	.text {
		padding: 0;
		margin: 0;
		color: rgba(255, 255, 255, 0.5);
	}
}
</style>
