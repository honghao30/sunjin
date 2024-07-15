const state = {
	loginInfo: []
};

const mutations = {
	setLoginInfo: (state, data) => {
		state.loginInfo = data;
	}
};

const actions = {
	setLoginInfo({commit}, data) {
		commit("setLoginInfo", data);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
