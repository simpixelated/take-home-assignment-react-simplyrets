import { act, render, screen } from '@testing-library/react';
import PropertyListings from './PropertyListings';

beforeEach(() => {
  localStorage.clear();
  fetch.resetMocks();
});

test('should not call API if listings are already in localStorage', () => {
  const listings = [
    {
      listingId: 1,
      property: {},
      photos: [],
      address: {
        streetNumber: '12345',
        streetName: 'TEST STREET',
        city: 'PORT ANGELES',
        state: 'WASHINGTON',
      },
    },
  ];
  localStorage.setItem('listings', JSON.stringify(listings));
  render(<PropertyListings />);
  expect(screen.getByText('12345 Test Street, Port Angeles, WA')).toBeTruthy();
  expect(fetch.mock.calls.length).toEqual(0);
});

test('should call API if listings are not in localStorage', async () => {
  const listings = [
    {
      listingId: 1,
      property: {},
      photos: [],
      address: {
        streetNumber: '12345',
        streetName: 'TEST STREET',
        city: 'PORT ANGELES',
        state: 'WASHINGTON',
      },
    },
  ];
  fetch.mockResponseOnce(JSON.stringify(listings));
  await act(async () => render(<PropertyListings />));
  expect(screen.getByText('12345 Test Street, Port Angeles, WA')).toBeTruthy();
  expect(fetch.mock.calls.length).toEqual(1);
});

test('should display message if no listings are returned', async () => {
  fetch.mockResponseOnce(JSON.stringify([]));
  await act(async () => render(<PropertyListings />));
  expect(screen.getByText('Sorry, no listings could be found.')).toBeTruthy();
  expect(fetch.mock.calls.length).toEqual(1);
});
