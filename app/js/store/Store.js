import { createStore , combineReducers } from 'redux';

import Authentication from '../reducers/Authenticaton.js'

const piklaneConsumerApp = combineReducers({
	userAuthenticationData : Authentication
})
const store = createStore(piklaneConsumerApp);

export default store;