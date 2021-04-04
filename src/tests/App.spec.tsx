import App from '../components/App';
import { render } from '../../test-util';

describe('App', () => {
  it('should render container', () => {
    const { getByTestId, getByText } = render(<App />);
    
    const container = getByTestId('container');
    const text = getByText('Hello, world!');

    expect(container).toBeVisible();
    expect(text).toBeVisible();
  });
});
