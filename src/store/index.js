import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import getters from "./getters";
import login from "./modules/login";
import locale from "./modules/locale";

Vue.use(Vuex);

const vuexSessionStorage = new VuexPersist({
	key: "vuex", // The key to store the state on in the storage provider.
	storage: window.sessionStorage, // or window.localStorage or localForage
	reducer: state => state
	// Function that passes the state and returns the state with only the objects you want to store.
	// Function that passes a mutation and lets you decide if it should update the state in localStorage.
	// filter: mutation => (true)
});

const store = new Vuex.Store({
	plugins: [vuexSessionStorage.plugin],
	modules: {
		login,
		locale
	},
	getters
});

export default store;
