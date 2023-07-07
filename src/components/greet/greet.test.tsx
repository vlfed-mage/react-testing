// simple test example

import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

// you can group tests wit describe
describe('Greet', () => {
    fit('renders correctly', () => {
        // fit - focus on a particular test
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    });

    xit('renders correctly as well', () => {
        // xit - skip this test
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    });

    // Greet should render the text "hello" and if a name passed into component,
    // it should be render hello followed by the name

    it('renders a name', () => {
        // it - the same as test
        render(<Greet name='Vlad' />);
        const textElement = screen.getByText('Hello Vlad');
        expect(textElement).toBeInTheDocument();
    });
});

//  Greet
//     ✓ renders correctly (20 ms)
//     ○ skipped renders correctly as well
//     ○ skipped renders a name

// you can also create nested groups

// describe('Greet', () => {
//     test('renders correctly', () => {
//         render(<Greet />);
//         const textElement = screen.getByText('Hello');
//         expect(textElement).toBeInTheDocument();
//     });
//
//     // Greet should render the text "hello" and if a name passed into component,
//     // it should be render hello followed by the name
//
//     describe('Nested', () => {
//         test('renders a name', () => {
//             render(<Greet name='Vlad' />);
//             const textElement = screen.getByText('Hello Vlad');
//             expect(textElement).toBeInTheDocument();
//         });
//     });
// });

//  PASS  src/components/greet/greet.test.tsx
//   Greet
//     ✓ renders correctly (33 ms)
//     Nested
//       ✓ renders a name (3 ms)
