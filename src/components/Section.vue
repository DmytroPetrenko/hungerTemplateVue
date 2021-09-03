<template>
	<div :id="name" class="section" :style="backgroundImage">
		<div class="header">
			<p>{{ header }}</p>
		</div>
		<div class="main" v-if="mode === 'imageText'">
			<ImageBlock :src="src" :isSquereLeft="isSquereLeft" />
			<TextBlock
				:h2="h2"
				:isTextWhite="isTextWhite"
				:isTextRight="isTextRight"
			/>
		</div>
		<div class="main" v-if="mode === 'textImage'">
			<TextBlock
				:h2="h2"
				:isTextWhite="isTextWhite"
				:isTextRight="isTextRight"
			/>
			<ImageBlock :src="src" :isSquereLeft="isSquereLeft" />
		</div>
		<div class="main" v-if="mode === 'formImage'">
			<BookingForm />
			<ImageBlock :src="src" :isSquereLeft="isSquereLeft" />
		</div>
		<div class="footer">
			<p>{{ footer }}</p>
		</div>
	</div>
</template>
<script>
import TextBlock from "@/components/TextBlock"
import ImageBlock from "@/components/ImageBlock"
import BookingForm from "@/components/BookingForm"
export default {
	name: "Section",
	props: {
		name: {
			type: String,
			required: true,
		},
		src: {
			type: String,
			required: true,
		},
		mode: {
			type: String,
			default: "textImage",
		},
		background: {
			type: String,
			default: undefined,
		},
		header: {
			type: String,
			default: "",
		},
		footer: {
			type: String,
			default: "",
		},
		isSquereLeft: {
			type: Boolean,
			default: false,
		},
		h2: {
			type: String,
			default: "",
		},
		isTextWhite: {
			type: Boolean,
			default: false,
		},
		isTextRight: {
			type: Boolean,
			default: false,
		},
	},
	components: { TextBlock, ImageBlock, BookingForm },
	computed: {
		backgroundImage() {
			if (this.background) {
				return {
					backgroundImage: `url(${this.background})`,
				}
			}
			return {
				backgroundImage: "",
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.section {
	height: 675px;
	background-size: contain;
	.header {
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;

		p {
			font-family: "Open Sans";
			font-style: normal;
			font-weight: bold;
			font-size: 12px;
			line-height: 14px;
			letter-spacing: 0.5em;
			text-transform: uppercase;

			color: #ffffff;
		}
	}
	.main {
		display: flex;
	}
	.footer {
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		p {
			margin: 0;
			font-family: "Open Sans";
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			line-height: 12px;
			text-align: center;

			color: rgba(51, 51, 51, 0.5);

			border-radius: 5px;
		}
		.elipses {
			width: 70px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.elipse {
				width: 10px;
				height: 10px;
				border-radius: 10px;
				background: rgba(255, 255, 255, 0.5);
			}
			.selected {
				background: white;
			}
		}
	}
}
</style>
