<template>
	<div id="contact">
		<base-text-block textBlockHeaderText="Contact" :isTextCenter="true" />
		<base-contact-form>
			<div slot="contactInformation">
				<base-text-with-icon :icon="['fas', 'map-marker-alt']">
					5th, London Boulevard, U.K.
				</base-text-with-icon>
				<base-text-with-icon :icon="['fas', 'phone']">
					+40 729 131 637/+40 726 458 782
				</base-text-with-icon>
				<base-text-with-icon :icon="['fas', 'envelope']">
					office@mindblister.com
				</base-text-with-icon>
			</div>
		</base-contact-form>
	</div>
</template>
<script>
import BaseContactForm from "@/components/BaseContactForm"
import BaseTextBlock from "@/components/BaseTextBlock"
import BaseTextWithIcon from "@/components/BaseTextWithIcon.vue"
export default {
	name: "TheContactSection",

	components: { BaseContactForm, BaseTextWithIcon, BaseTextBlock },
}
</script>
<style lang="scss" scoped>
#contact {
	padding-top: 30px;
	padding-bottom: 50px;
}
</style>
