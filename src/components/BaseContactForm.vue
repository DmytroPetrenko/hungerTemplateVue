<template>
	<form class="form" id="contactForm" autocomplete="off" novalidate>
		<fieldset class="fieldset">
			<input placeholder="Name" type="text" class="input-text" />
			<input placeholder="Email" type="text" class="input-text" />
			<input placeholder="Phone" type="text" class="input-text" />
		</fieldset>
		<fieldset class="fieldset">
			<textarea
				name="message"
				rows="2"
				form="contactForm"
				placeholder="Message"
				class="input-text textarea"
			/>
		</fieldset>
		<fieldset class="fieldset">
			<div class="contact-information">
				<slot name="contactInformation"></slot>
			</div>
			<button class="btn">Send Message</button>
		</fieldset>
	</form>
</template>
<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	.fieldset {
		display: flex;
		border: none;
		padding: 0;
		position: relative;
		clear: both;
		margin: 0;

		.textarea {
			height: 120px !important;
		}
		.textarea::placeholder {
			padding-top: 15px;
		}

		.input-text {
			flex: 1;
			width: 277px;
			height: 60px;
			background: #e5e5e5;
			border-radius: 5px;
			border: 0;
			margin: 5px;
			padding: 0;
		}
		.input-text::placeholder {
			padding-left: 15px;
			color: rgba(51, 51, 51, 0.5);
		}
		.btn {
			width: calc(100% - 10px);
			height: 60px;
			background: #e8c300;
			border-radius: 5px;
			border: 0;
			margin: 5px;
			color: white;
			text-transform: uppercase;
			font-family: "Open Sans";
			font-style: normal;
			font-weight: bold;
			font-size: 12px;
			line-height: 20px;
		}

		.contact-information {
			font-family: "Font Awesome 5 Free";
			font-style: normal;
			font-weight: 900;
			font-size: 14px;
			line-height: 14px;
			color: rgba(51, 51, 51, 0.5);
			display: flex;
			align-items: center;

			::v-deep svg {
				color: #e8c300;
			}
			div:first-child {
				display: flex;
				align-items: center;
			}
		}
	}
}
</style>
