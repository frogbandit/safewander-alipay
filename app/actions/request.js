/* global window, fetch */

import response from './response';

/**
 * loadData
 * POST to get data from NihaoPay
 */
const loadData = () => () => {

	// curl works
	// curl https://apitest.nihaopay.com/v1.2/transactions/securepay -H "Authorization: Bearer 85ffb52398e9fb808b10cc6b3605135f59f869e7431bebe00fdd55f75e496e3e" -d amount=100 -d currency="USD" -d vendor="alipay" -d reference="jkh25jh1348fd89sg" -d ipn_url="http://website.com/ipn" -d callback_url="http://website.com/callback"


	const requestString = 'amount=100&currency=USD&vendor=unionpay&reference=jkh25jh1348fd89sg&ipn_url=http://website.com/ipn&callback_url=http://website.com/callback';

	return fetch(`https://apitest.nihaopay.com/v1.2/transactions/securepay`, {
		method: 'POST',
		data: requestString,
		headers: { 'Authorization': 'Bearer 85ffb52398e9fb808b10cc6b3605135f59f869e7431bebe00fdd55f75e496e3e' },
	}).then(res => console.log('asdf'));
};

export default {
	loadData,
};
