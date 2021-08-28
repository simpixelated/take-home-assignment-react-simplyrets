import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SingleListing from './SingleListing';

beforeEach(() => {
  localStorage.clear()
});

test('address is formatted correctly', () => {
  const listing = {
    property: {},
    photos: [],
    address: {
      streetNumber: '12345',
      streetName: 'TEST STREET',
      city: 'PORT ANGELES',
      state: 'WASHINGTON',
    }
  }
  render(<SingleListing {...listing} />);
  expect(screen.getByText('12345 Test Street, Port Angeles, WA')).toBeTruthy();
});

test('bed | bath | sq ft is formatted correctly', () => {
  const listing = {
    property: {
      bedrooms: 2,
      bathsFull: 2,
      bathsHalf: 1,
      area: 2000
    },
    photos: [],
    address: {
      streetNumber: '12345',
      streetName: 'TEST STREET',
      city: 'PORT ANGELES',
      state: 'WASHINGTON',
    }
  }
  render(<SingleListing {...listing} />);
  expect(screen.getByText('2 BR | 2.5 Bath | 2000 Sq Ft')).toBeTruthy();
});

test('price is formatted correctly', () => {
  const listing = {
    property: {},
    photos: [],
    address: {
      streetNumber: '12345',
      streetName: 'TEST STREET',
      city: 'PORT ANGELES',
      state: 'WASHINGTON',
    },
    listPrice: '89008983123.99'
  }
  render(<SingleListing {...listing} />);
  expect(screen.getByText('$89,008,983,124')).toBeTruthy();
});

test('list date is formatted correctly', () => {
  const listing = {
    property: {},
    photos: [],
    address: {
      streetNumber: '12345',
      streetName: 'TEST STREET',
      city: 'PORT ANGELES',
      state: 'WASHINGTON',
    },
    listDate: new Date(2021, 1, 1).toISOString()
  }
  render(<SingleListing {...listing} />);
  expect(screen.getByText('Listed: 2/1/21')).toBeTruthy();
});

test('clicking favorite should save listing to local storage', () => {
  const listing = {
    listingId: 'testing',
    property: {},
    photos: [],
    address: {
      streetNumber: '12345',
      streetName: 'TEST STREET',
      city: 'PORT ANGELES',
      state: 'WASHINGTON',
    },
  }
  render(<SingleListing {...listing} />);
  userEvent.click(screen.getByTitle('set favorite'))
  expect(localStorage.getItem(listing.listingId)).toEqual('true');
});

test('clicking favorite should update listing favorite status in local storage', () => {
  const listing = {
    listingId: 'testing',
    property: {},
    photos: [],
    address: {
      streetNumber: '12345',
      streetName: 'TEST STREET',
      city: 'PORT ANGELES',
      state: 'WASHINGTON',
    },
  }
  localStorage.setItem(listing.listingId, 'true')
  render(<SingleListing {...listing} />);
  userEvent.click(screen.getByTitle('set favorite'))
  expect(localStorage.getItem(listing.listingId)).toEqual('false');
});
