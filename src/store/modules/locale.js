const state = {
	localeLanguage: 'ko'
};

const mutations = {
	setLocaleLanguage: (state, data) => {
		state.localeLanguage = data;
	}
};

const actions = {
	setLocaleLanguage({commit}, data) {
		commit("setLocaleLanguage", data);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
