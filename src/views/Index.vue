<template>
	<div class="index">
		<Home />
		<Section
			:name="`about`"
			:src="require(`@/assets/about-img.png`)"
			:h2="`About us`"
		/>
		<Section
			:mode="`imageText`"
			:name="`team`"
			:src="require(`@/assets/Rectangle.png`)"
			:background="require(`@/assets/team-bg.png`)"
			:header="`Our team`"
			:isSquereLeft="true"
			:h2="`Masterchef`"
			:isTextWhite="true"
			:isTextRight="true"
		/>
		<Section
			:mode="`formImage`"
			:name="`booking`"
			:src="require(`@/assets/book-img.png`)"
			:footer="`Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM, Phone: +40 729 131
					637/+40 726 458 782`"
		/>
		<Section
			:mode="`imageText`"
			:name="`specialties`"
			:src="require(`@/assets/Specialties.png`)"
			:background="require(`@/assets/specialties-bg.png`)"
			:header="`Specialties`"
			:isSquereLeft="true"
			:h2="`Cholate Pankaces`"
			:isTextWhite="true"
			:isTextRight="true"
		/>
	</div>
</template>

<script>
import Home from "@/components/Home"
import Section from "@/components/Section"

export default {
	name: "Index",
	components: { Home, Section },
}
</script>

<style lang="scss">
.index > div {
	padding: 0 80px;
	box-sizing: border-box;
}
</style>
