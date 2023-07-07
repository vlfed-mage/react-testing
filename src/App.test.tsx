import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    // provided globally by create-react-app, so we don't need to import it
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument(); // provided globally by create-react-app, so we don't need to import it
});
