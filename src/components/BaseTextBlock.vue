<template>
	<div
		class="text_block"
		:class="{ textRight: isTextRight, textCenter: isTextCenter }"
	>
		<h2 class="h2" :class="{ white: isTextWhite }">
			{{ textBlockHeaderText }}
		</h2>
		<hr />
		<p class="subheader" :class="{ white: isTextWhite }">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quae
			dolore laudantium, nisi dignissimos vel?
		</p>
		<p v-if="!isTextCenter" class="text" :class="{ white: isTextWhite }">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat velit
			modi, autem voluptatibus ex nostrum dolores. Autem, aspernatur? Itaque
			voluptate ducimus nemo harum provident. Dicta quod adipisci nulla harum
			dolorum?
		</p>
	</div>
</template>

<script>
export default {
	props: {
		textBlockHeaderText: {
			type: String,
			required: true,
		},
		isTextWhite: {
			type: Boolean,
			default: false,
		},
		isTextRight: {
			type: Boolean,
			default: false,
		},
		isTextCenter: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss" scoped>
.white {
	color: white !important;
}
.textRight {
	margin-left: 0 !important;
	margin-right: 20px !important;
}
.textCenter {
	max-width: 50%;
	margin: 0 auto !important;
}
.text_block {
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 40px;
	.h2 {
		font-family: "Banny";
		font-size: 36px;
		line-height: 48px;

		text-align: center;
		text-transform: uppercase;

		color: #000000;
	}
	hr {
		border: 5px #e8c300 solid;
		border-radius: 50px;
		width: 60px;
		margin: 0;
	}
	.subheader {
		font-family: "Open Sans";
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 28px;

		text-align: center;

		color: #000000;
	}
	.text {
		font-family: "Open Sans";
		font-style: normal;
		font-size: 14px;
		line-height: 24px;

		text-align: center;

		color: #000000;
	}
}
</style>
