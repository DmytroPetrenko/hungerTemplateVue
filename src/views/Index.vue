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
	</div>
</template>

<script>
import TheHomeSection from "@/components/TheHomeSection"
import DefaultSection from "@/components/DefaultSection"

export default {
	name: "Index",
	components: { TheHomeSection, DefaultSection },
}
</script>

<style lang="scss">
.index > div {
	padding: 0 80px;
	box-sizing: border-box;
}
</style>
