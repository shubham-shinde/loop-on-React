import application from './../reducer/index';
import { createStore } from 'redux';

var store = createStore(application);

export default store;