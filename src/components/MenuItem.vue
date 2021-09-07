<template>
	<div class="menu-item">
		<div class="menu-item-information">
			<h3 class="menu-item-name">Pizza quadro stagioni...</h3>
			<p class="menu-item-description">
				Lorem ipsum dolor sit amet consectetur.
			</p>
		</div>
		<div class="menu-item-price">55,68 USD</div>
	</div>
</template>
<style lang="scss" scoped>
.menu-item {
	display: flex;
	margin-bottom: 30px;
	font-family: "Banny";
	color: #333333;
	.menu-item-information {
		flex: 1;
		.menu-item-name {
			padding: 0;
			margin: 0;
			font-size: 18px;
			line-height: 18px;
			text-transform: uppercase;
		}
		.menu-item-description {
			padding: 0;
			margin: 0;
			font-size: 12px;
			line-height: 12px;
		}
	}
	.menu-item-price {
		padding: 0;
		margin: 0;
		font-size: 18px;
		line-height: 18px;
	}
}
</style>
