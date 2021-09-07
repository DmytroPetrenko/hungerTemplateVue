<template>
	<nav class="navigation">
		<ul class="list">
			<li
				v-for="(tab, index) in tabs"
				:key="tab"
				class="list-item"
				:class="index < tabs.length - 1 ? 'border' : ''"
			>
				{{ tab }}
			</li>
		</ul>
	</nav>
</template>
<script>
export default {
	name: "BaseNavigation",
	props: {
		tabs: {
			type: Array,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>
.border {
	border-right: 1px solid rgba(51, 51, 51, 0.2);
}
.navigation {
	display: flex;
	justify-content: center;
	.list {
		display: flex;
		padding: 0;
		.list-item {
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			width: 120px;
			height: 50px;
			cursor: pointer;
			text-transform: uppercase;

			font-family: "Open Sans";
			font-style: normal;
			font-weight: bold;
			font-size: 12px;
			line-height: 18px;

			color: #333333;
		}
	}
}
</style>
