<template>
	<div class="menu-container">
		<div
			v-for="index in 3"
			:key="index"
			class="menu-column"
			:class="index === 2 ? 'central' : ''"
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
