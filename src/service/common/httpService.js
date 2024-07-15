import axios from 'axios';
import store from '@/store';
import * as auth from '@/utils/auth';

export const instance = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 5000,
	contentType: 'application/json;charset=UTF-8;',
});

instance.interceptors.request.use(
	request => {
		request.headers['accessToken'] = auth.getAccessToken();
		request.headers['Authentication'] = store.getters.getNdapToken;
		return request;
	},
	error => {
		return Promise.reject(error);
	},
);

let interceptor = instance.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		const message = error.response.data;
		const originalRequest = error.config;
		if (error.response.status === 401 && message.indexOf('expired token') > -1) {
			instance.interceptors.response.eject(interceptor);

			return refreshAccessToken()
				.then(res => {
					if (res.status === 200 || res.status === 201) {
						onRefreshed(res.data);
					}
				})
				.then(() => Promise.resolve(instance(originalRequest)))
				.catch(error => {
					auth.setAccessToken(null);
					auth.setRefreshToken(null);
					window.location.href = window.location.protocol + "//" + window.location.host;
				});
		}
		else if (error.response.status == 500 && message.indexOf('Invalid token') > -1) {
			auth.setAccessToken(null);
			auth.setRefreshToken(null);
			window.location.href = window.location.protocol + "//" + window.location.host;
		} 
		else {
			return Promise.reject(error);
		}
	},
);

const refreshAccessToken = () => {
	const refreshUrl = 'https://jejudatahub.net/api/auth/accounts/refreshToken';
	return axios.get(refreshUrl, {
		headers: { accessToken: auth.getRefreshToken() },
	});
};

const onRefreshed = data => {
	auth.setAccessToken(data['accessToken']);
	auth.setRefreshToken(data['refreshToken']);
};
