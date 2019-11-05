import { h } from 'preact';
import { shallow } from 'enzyme';

import ExampleUsingDiv from '../src/components/example/div';
import ExampleUsingFragment from '../src/components/example/fragment';

describe('Initial Test Suite', () => {

	test('Shows the state of my cats wrapped in a div', () => {
		const context = shallow(<ExampleUsingDiv />);
		expect(context.state().cats).toBe('cute');
	});

	test('Shows the state of my cats wrapped in a Fragment', () => {
		const context = shallow(<ExampleUsingFragment />);
		expect(context.state().cats).toBe('cute');
	});

});
