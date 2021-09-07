<template>
	<div class="galerie">
		<img
			v-for="image in images"
			:key="image"
			class="image"
			:src="require('@/assets/' + image)"
		/>
	</div>
</template>
<script>
export default {
	name: "BaseGalerie",
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>
.galerie {
	width: 100%;
	padding: 0;
	display: flex;

	.image {
		width: 100%;
	}
}
</style>
