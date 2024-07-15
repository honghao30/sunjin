import { Message } from 'element-ui';
import { LC_ERROR_MESSAGE } from '@/config/errorMessage';

export function defaultError(errorMsg) {
	alertError(errorMsg);
}

export function alertError(msg) {
	Message({
		showClose: true,
		message: msg,
		type: 'error',
	});
}
