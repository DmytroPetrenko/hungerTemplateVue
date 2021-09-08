<template>
	<div id="menu">
		<base-text-block
			textBlockHeaderText="Delicious menu"
			:isTextCenter="true"
			class="base-text-block"
		/>
		<base-navigation :tabs="tabs" />
		<menu-list />
	</div>
</template>
<script>
import BaseTextBlock from "@/components/BaseTextBlock"
import BaseNavigation from "@/components/BaseNavigation"
import MenuList from "@/components/MenuList"
export default {
	name: "TheMenuSection",
	components: { BaseTextBlock, BaseNavigation, MenuList },
	props: {
		tabs: {
			type: Array,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>
#menu {
	margin: 40px 0;
}
</style>
