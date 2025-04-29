import { render, screen, fireEvent } from '@testing-library/react';
import TestWithMockData from '../components/TestWithMockData';

const mockData = [
  {
    id: 1,
    first_name: 'Fletcher',
    last_name: 'McVanamy',
    email: 'mmcvanamy0@e-recht24.de',
    age: 30,
  },
  {
    id: 2,
    first_name: 'Clarice',
    last_name: 'Harrild',
    email: 'charrild1@dion.ne.jp',
    age: 35,
  },
  {
    id: 3,
    first_name: 'Amby',
    last_name: 'Emmer',
    email: 'aemmer2@buzzfeed.com',
    age: 67, // Senior age
  },
];

describe('TestWithMockData', () => {
  const mockHandleClick = jest.fn();

  test('renders unordered list with all data', () => {
    render(<TestWithMockData data={mockData} displayUnorderedList={true} />);

    expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
    const notSeniorLabels = screen.getAllByText(/Not senior/i);
    expect(notSeniorLabels).toHaveLength(2);
    expect(screen.getByText(/^Senior$/)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(3);
  });

  test('renders ordered list with last names only', () => {
    render(<TestWithMockData data={mockData} displayUnorderedList={false} />);

    expect(screen.getByText(/McVanamy/i)).toBeInTheDocument();
    expect(screen.queryByText(/fletcher/i)).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(3);
  });

  test('calls handleClick when email is clicked', () => {
    render(
      <TestWithMockData
        data={mockData}
        displayUnorderedList={true}
        handleClick={mockHandleClick}
      />
    );

    fireEvent.click(screen.getByText(mockData[0].email));
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  test('shows "Senior" for ages > 50', () => {
    render(<TestWithMockData data={mockData} displayUnorderedList={true} />);

    expect(screen.getByText(/^Senior$/)).toBeInTheDocument();
    expect(screen.getAllByText(/^Not senior$/).length).toBe(2);
  });
});
