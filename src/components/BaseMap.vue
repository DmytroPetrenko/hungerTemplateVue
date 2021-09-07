<template>
	<div id="map" :style="mapHeight">
		<gmap-map :zoom="14" :center="center" :style="mapHeight">
			<gmap-marker
				:key="index"
				v-for="(m, index) in locationMarkers"
				:position="m.position"
				@click="center = m.position"
			></gmap-marker>
		</gmap-map>
	</div>
</template>
<script>
export default {
	props: {
		height: {
			type: String,
			default: "475px",
		},
		lat: {
			type: Number,
			default: -25.344,
		},
		lng: {
			type: Number,
			default: 131.036,
		},
	},
	data() {
		return {
			center: {
				lat: this.lat,
				lng: this.lng,
			},
			locationMarkers: [],
			locPlaces: [],
			existingPlace: null,
		}
	},
	computed: {
		mapHeight() {
			return `height: ${this.height}`
		},
	},
	mounted() {
		this.locateGeoLocation()
	},

	methods: {
		initMarker(loc) {
			this.existingPlace = loc
		},
		addLocationMarker() {
			if (this.existingPlace) {
				const marker = {
					lat: this.existingPlace.geometry.location.lat(),
					lng: this.existingPlace.geometry.location.lng(),
				}
				this.locationMarkers.push({ position: marker })
				this.locPlaces.push(this.existingPlace)
				this.center = marker
				this.existingPlace = null
			}
		},
		locateGeoLocation: function () {
			navigator.geolocation.getCurrentPosition((res) => {
				this.center = {
					lat: res.coords.latitude,
					lng: res.coords.longitude,
				}
			})
		},
	},
}
</script>
<style lang="scss" scoped>
#map {
	width: 100%;
	padding: 0;
}
</style>
