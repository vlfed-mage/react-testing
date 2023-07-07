// simple test example

import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

test('Greet renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
});

// Greet should render the text "hello" and if a name passed into component,
// it should be render hello followed by the name

test('Greet renders a name', () => {
    render(<Greet name='Vlad' />);
    const textElement = screen.getByText('Hello Vlad');
    expect(textElement).toBeInTheDocument();
});
