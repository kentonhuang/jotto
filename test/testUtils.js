import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * Return node(s) with the given data-test attribute.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
	createStore(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper 
 * @param {string} value 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test="${value}"]`);
}

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		'prop',
		component.name); 
	expect(propError).toBeUndefined();
}

