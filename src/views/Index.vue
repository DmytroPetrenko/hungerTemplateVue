<template>
	<div class="index">
		<the-home-section />
		<default-section
			sectionName="about"
			:src="require(`@/assets/about-img.png`)"
			textBlockHeaderText="About us"
		/>
		<default-section
			mode="imageText"
			sectionName="team"
			:src="require(`@/assets/Rectangle.png`)"
			:background="require(`@/assets/team-bg.png`)"
			sectionHeaderText="Our team"
			:isSquereLeft="true"
			textBlockHeaderText="Masterchef"
			:isTextWhite="true"
			:isTextRight="true"
		/>
		<default-section
			mode="formImage"
			sectionName="booking"
			:src="require(`@/assets/book-img.png`)"
			sectionFooterText="Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM, Phone: +40 729 131
					637/+40 726 458 782"
		/>
		<default-section
			mode="imageText"
			sectionName="specialties"
			:src="require(`@/assets/Specialties.png`)"
			:background="require(`@/assets/specialties-bg.png`)"
			sectionHeaderText="Specialties"
			:isSquereLeft="true"
			textBlockHeaderText="Cholate Pankaces"
			:isTextWhite="true"
			:isTextRight="true"
		/>
		<the-menu-section :tabs="tabs" />
		<default-section
			mode="imageImage"
			sectionName="events"
			:src="require(`@/assets/events1.png`)"
			imageText="Weddings"
			additionalImageText="Corporate parties"
			:srcAdditionalImage="require(`@/assets/events2.png`)"
			:background="require(`@/assets/events-bg.png`)"
			sectionHeaderText="Private events"
			sectionFooterText="For private events please call: +40 729 131 637/+40 726 458 782 or use the contact form."
		/>
		<base-galerie :images="galerieImages" />
		<the-contact-section />
		<base-map />
		<the-footer />
	</div>
</template>

<script>
import TheHomeSection from "@/components/TheHomeSection"
import TheMenuSection from "@/components/TheMenuSection"
import TheContactSection from "@/components/TheContactSection"
import DefaultSection from "@/components/DefaultSection"
import BaseGalerie from "@/components/BaseGalerie"
import BaseMap from "@/components/BaseMap"
import TheFooter from "@/components/TheFooter.vue"

export default {
	name: "Index",
	components: {
		TheHomeSection,
		TheMenuSection,
		TheContactSection,
		DefaultSection,
		BaseGalerie,
		BaseMap,
		TheFooter,
	},
	data() {
		return {
			tabs: ["Soupe", "Pizza", "Pasta", "Desert", "Wine", "Beer", "Drinks"],
			galerieImages: [
				"galerie1.png",
				"galerie2.png",
				"galerie3.png",
				"galerie4.png",
			],
		}
	},
}
</script>

<style lang="scss">
.index > div {
	padding: 0 80px;
	box-sizing: border-box;
}
</style>
