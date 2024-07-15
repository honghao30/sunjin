import MockAdapter from 'axios-mock-adapter';
import { instance as http } from '@/service/common/httpService';
import { loginData } from './mockdata/loginData';
import { testData } from './mockdata/testData';
import { chartData } from './mockdata/chartData';

export function setMock() {
	let mock = new MockAdapter(http);

	// Match ALL requests
	mock.onAny().reply(config => {
		let responses = [];
		loginData.forEach(data => responses.push(data));
		testData.forEach(data => responses.push(data));
		chartData.forEach(data => responses.push(data));

		let result = new Promise((resolve, reject) => {
			setTimeout(function() {
				responses.forEach(data => {
					const [method, url, ...response] = data;
					if (config.url === url && config.method.toUpperCase() === method) {
						resolve(response);
					}
				});
				// reject() reason will be passed as-is.
				// Use HTTP error status code to simulate server failure.
				resolve([500, { success: false }]);
			}, 1000);
		});
		Promise.resolve(result).then(result => console.log(result));
		return result;
	});
}
