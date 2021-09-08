<template>
	<div :id="sectionName" class="section" :style="backgroundImage">
		<div class="header">
			<p class="text">{{ sectionHeaderText }}</p>
		</div>
		<div class="main" v-if="mode === 'imageText'">
			<base-image-block :src="src" :isSquereLeft="isSquereLeft" />
			<base-text-block
				:textBlockHeaderText="textBlockHeaderText"
				:isTextWhite="isTextWhite"
				:isTextRight="isTextRight"
			/>
		</div>
		<div class="main" v-if="mode === 'textImage'">
			<base-text-block
				:textBlockHeaderText="textBlockHeaderText"
				:isTextWhite="isTextWhite"
				:isTextRight="isTextRight"
			/>
			<base-image-block :src="src" :isSquereLeft="isSquereLeft" />
		</div>
		<div class="main" v-if="mode === 'formImage'">
			<default-section-booking-form />
			<base-image-block :src="src" :isSquereLeft="isSquereLeft" />
		</div>
		<div class="main" v-if="mode === 'imageImage'">
			<base-image-block
				:src="src"
				:isSquereLeft="!isSquereLeft"
				:imageText="imageText"
				:isLeftImage="true"
			/>
			<base-image-block
				:src="srcAdditionalImage"
				:isSquereLeft="isSquereLeft"
				:imageText="additionalImageText"
			/>
		</div>
		<div class="footer">
			<p class="text">{{ sectionFooterText }}</p>
		</div>
	</div>
</template>
<script>
import BaseTextBlock from "@/components/BaseTextBlock"
import BaseImageBlock from "@/components/BaseImageBlock"
import DefaultSectionBookingForm from "@/components/DefaultSectionBookingForm"
export default {
	name: "DefaultSection",
	props: {
		sectionName: {
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
			validator: function (value) {
				return (
					["textImage", "imageText", "formImage", "imageImage"].indexOf(
						value
					) !== -1
				)
			},
		},
		background: {
			type: String,
			default: undefined,
		},
		sectionHeaderText: {
			type: String,
			default: "",
		},
		sectionFooterText: {
			type: String,
			default: "",
		},
		isSquereLeft: {
			type: Boolean,
			default: false,
		},
		textBlockHeaderText: {
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
		srcAdditionalImage: {
			type: String,
			default: "",
		},
		imageText: {
			type: String,
			default: "",
		},
		additionalImageText: {
			type: String,
			default: "",
		},
	},
	components: { BaseTextBlock, BaseImageBlock, DefaultSectionBookingForm },
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
		.text {
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
