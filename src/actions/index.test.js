import { correctGuess, actionTypes } from './';
import { findByTestAttr } from '../../test/testUtils';

describe('correctGuess', () => {
	test('returns an action with type `CORRECT_GUESS`', () => {
		const action = correctGuess();
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
	});
});