/* global document, window */
import uuid from 'uuid';

/**
 * handleResponse
 * Generic response handler
 * Throw an error if fetch returns an error code
 * Else, gets body from response object, turns off the isFetching flag and returns available data
 * @param {Object} res the response object
 * @param {String} endpoint the targeted endpoint
 * @param {Function} dispatch Redux dispatch
 * @param {Function} getState Redux getState
 * @return {Object} a passthrough object
 */
const handleResponse = ({ res, endpoint, dispatch, getState }) =>
	res.json().then((body) => {
		if (!res.ok) throw new Error(body.error);
		dispatch(update('api', 'Turn off isFetching', { isFetching: false }));
		dispatch(update('bool', 'Turn off isFetchingNotifications', { isFetchingNotifications: false }));
		dispatch(update('bool', 'Turn off isFetchingRequests', { isFetchingRequests: false }));
		// Passthrough
		return { res, body, endpoint, dispatch, getState };
	});

export default {
	handleResponse,
};
