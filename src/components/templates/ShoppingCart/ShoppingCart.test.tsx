import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';
import useCart from '../../../hooks/useCart';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the useCart hook
jest.mock('../../../hooks/useCart');

const mockUseCart = (cartState: any) => {
  (useCart as jest.Mock).mockReturnValue(cartState);
};

const renderShoppingCart = () => {
  return render(
    <Router>
      <ShoppingCart />
    </Router>
  );
};

describe('ShoppingCart', () => {
  it('displays loading text when loading', () => {
    mockUseCart({
      getCartItems: {},
      loading: true,
      fetchCartData: jest.fn(),
    });

    renderShoppingCart();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays empty cart message when there are no items', () => {
    mockUseCart({
      getCartItems: { lineItems: [] },
      loading: false,
      fetchCartData: jest.fn(),
    });

    renderShoppingCart();
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });
});