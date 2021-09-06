<template>
	<div class="form_block">
		<h2 class="h2">Book a table</h2>
		<hr />
		<form class="form" autocomplete="off" novalidate>
			<fieldset class="fieldset">
				<input placeholder="Name" type="text" class="input-text" />
				<input placeholder="Email" type="text" class="input-text" />
			</fieldset>
			<fieldset class="fieldset">
				<input placeholder="Phone" type="text" class="input-text" />
				<select class="select" name="people_selector" id="people_selector">
					<option class="selected" value="" disabled selected>People</option>
					<option>Пункт 1</option>
					<option>Пункт 2</option>
				</select>
			</fieldset>
			<fieldset class="fieldset">
				<input placeholder="Date (mm/dd)" type="text" class="input-text" />
				<select class="select" name="people_selector" id="people_selector">
					<option class="selected" value="" disabled selected>Time</option>
					<option>Пункт 1</option>
					<option>Пункт 2</option>
				</select>
			</fieldset>
			<fieldset class="fieldset">
				<button class="btn">submit</button>
			</fieldset>
		</form>
	</div>
</template>
<script>
export default {
	name: "DefaultSectionBookingForm",
}
</script>
<style lang="scss" scoped>
.form_block {
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.h2 {
		font-family: "Banny";
		font-size: 36px;
		line-height: 48px;

		text-align: center;
		text-transform: uppercase;

		color: #000000;
		margin: 0;
	}
	hr {
		border: 5px #e8c300 solid;
		border-radius: 50px;
		width: 60px;
		margin: 0;
		margin: 20px;
	}

	.form {
		.fieldset {
			border: none;
			padding: 0;
			position: relative;
			clear: both;
			margin: 0;

			.input-text,
			.select {
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
			}
			.input-text::placeholder,
			.select {
				color: rgba(51, 51, 51, 0.5);
			}
			.select {
				padding-left: 10px;
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
		}
	}
}
</style>
