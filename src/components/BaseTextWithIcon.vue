<template>
	<div class="text-with-icon">
		<font-awesome-icon :icon="icon" />
		<p class="text"><slot></slot></p>
	</div>
</template>
<script>
export default {
	props: {
		icon: {
			type: Array,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>
.text-with-icon {
	display: flex;
	margin: 0 5px;
	svg {
		padding-right: 5px;
	}
	.text {
		padding: 0;
		margin: 0;
		white-space: nowrap;
	}
}
</style>
