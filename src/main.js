import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import * as VueGoogleMaps from "vue2-google-maps" 

import { library } from "@fortawesome/fontawesome-svg-core"
import {
	faAngleDown,
	faMapMarkerAlt,
	faPhone,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(
	faAngleDown,
	faFacebook,
	faInstagram,
	faTwitter,
	faMapMarkerAlt,
	faPhone,
	faEnvelope
)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyCwfAt9T8sLkri-MfsJ0sbvz_OKlnBxVGc",
		libraries: "places",
	},
})

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app")
