import { render, screen } from '@testing-library/react';
import OrderConfirmation from './OrderConfirmation';
import useContent from '../../../hooks/useContent';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../../contexts/AppContext';

jest.mock('../../../hooks/useContent');

const mockUseContent = (contentState: any) => {
  (useContent as jest.Mock).mockReturnValue(contentState);
};

const renderOrderConfirmation = () => {
  return render(
    <AppProvider> 
      <Router>
        <OrderConfirmation />
      </Router>
    </AppProvider>
  );
};

describe('OrderConfirmation', () => {
  it('displays loading text when loading', () => {
    mockUseContent({
      entries: [],
      singleEntry: null,
      fetchEntries: jest.fn(),
      fetchSingleEntry: jest.fn(),
      loading: true,
      error: null,
    });

    renderOrderConfirmation();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays entries when data is fetched', () => {
    mockUseContent({
      entries: [
        { uid: 'entry1', banner_title: 'Banner Title 1' },
        { uid: 'entry2', banner_title: 'Banner Title 2' },
      ],
      singleEntry: { uid: 'entry1', banner_title: 'Banner Title 1' },
      fetchEntries: jest.fn(),
      fetchSingleEntry: jest.fn(),
      loading: false,
      error: null,
    });

    renderOrderConfirmation();
    expect(screen.getAllByText('UID: entry1').length).toBe(2);
    expect(screen.getAllByText('Banner Title: Banner Title 1').length).toBe(2);
    expect(screen.getByText('UID: entry2')).toBeInTheDocument();
    expect(screen.getByText('Banner Title: Banner Title 2')).toBeInTheDocument();
    expect(screen.getByText('Single Entry:')).toBeInTheDocument();
  });
});