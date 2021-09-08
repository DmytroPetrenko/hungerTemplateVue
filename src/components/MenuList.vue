<template>
	<div class="menu-container">
		<div
			v-for="index in 3"
			:key="index"
			class="menu-column"
			:class="isCentral(index)"
		>
			<menu-item v-for="index in 7" :key="index" />
		</div>
	</div>
</template>
<script>
import MenuItem from "@/components/MenuItem"
export default {
	name: "MenuList",
	components: { MenuItem },
	computed: {
		isCentral() {
			return (index) => (index === 2 ? "central" : "")
		},
	},
}
</script>
<style lang="scss" scoped>
.menu-container {
	display: flex;
	margin-top: 18px;
}

.menu-column {
	flex: 1;
}
.central {
	margin: 0 90px;
}
</style>
