import React from 'react';
import renderer from 'react-test-renderer';
import About from 'pages/About';

it('CheckboxWithLabel changes the text after click', () => {
	const component = renderer.create(<About />);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
