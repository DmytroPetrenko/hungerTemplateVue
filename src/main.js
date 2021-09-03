import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faAngleDown, faFacebook, faInstagram, faTwitter)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app")
