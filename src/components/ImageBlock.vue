<template>
	<div class="image_block">
		<div class="wrapper" :class="{ squereLeft: isSquereLeft }">
			<img :src="src" />
			<div class="squere"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		isSquereLeft: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss" scoped>
.image_block {
	flex: 1 1 0;
	display: flex;
	justify-content: center;
	align-items: center;
	.wrapper {
		position: relative;
		width: 600px;
		height: 475px;
		img {
			position: absolute;
			top: 0;
			right: 85px;
			width: 475px;
			height: 475px;
		}
		.squere {
			position: absolute;
			top: 113px;
			right: 0;
			width: 250px;
			height: 250px;
			border: 20px solid #e8c300;
			box-sizing: border-box;
			filter: drop-shadow(0px 0px 100px rgba(0, 0, 0, 0.5));
			border-radius: 5px;
		}
	}
}
.squereLeft {
	img {
		left: 85px !important;
		right: auto !important;
	}
	.squere {
		left: 0 !important;
		right: auto !important;
	}
}
</style>
