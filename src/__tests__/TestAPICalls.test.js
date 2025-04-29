import * as services from '../utils/services';
import { render, screen, waitFor } from '@testing-library/react';
import TestAPICalls from '../components/TestAPICalls';

describe('TestAPICalls', () => {
  test('fetch api data', async () => {
    jest
      .spyOn(services, 'fetchData')
      .mockResolvedValue([{ id: 1, name: 'Leanne Graham' }]);

    render(<TestAPICalls />);
    // wait for the effect to run
    await waitFor(() => {
      expect(services.fetchData).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
    });
  });
});
