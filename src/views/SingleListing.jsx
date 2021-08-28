import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';
import { useEffect, useState } from 'react';
import {
  getFormattedListDate,
  getFormattedListPrice,
  getFormattedBaths,
  getFormattedAddress,
} from 'utils';

const SingleListing = ({
  address,
  listingId,
  photos,
  listDate,
  listPrice,
  property,
}) => {
  const [isFavorited, setFavorited] = useState(() => {
    const saved = localStorage.getItem(listingId);
    return JSON.parse(saved) || null;
  });

  useEffect(() => {
    localStorage.setItem(listingId, isFavorited);
  }, [listingId, isFavorited]);

  const formattedListDate = getFormattedListDate(listDate);
  const formattedListPRice = getFormattedListPrice(listPrice);
  const formattedBaths = getFormattedBaths(
    property.bathsFull,
    property.bathsHalf,
  );
  const formattedAddress = getFormattedAddress(address);

  return (
    <li>
      <div
        className="thumbnail"
        style={{ backgroundImage: `url(${photos[0]})` }}
      >
        <img
          src={isFavorited ? heartFill : heartStroke}
          className="favorite"
          alt="favorite icon"
          onClick={() => setFavorited(!isFavorited)}
        />
      </div>
      <p className="details">
        {property.bedrooms} BR | {formattedBaths} Bath | {property.area} Sq Ft
      </p>
      <p className="price">{formattedListPRice}</p>
      <p className="address">{formattedAddress}</p>
      <p className="date">Listed: {formattedListDate}</p>
    </li>
  );
};

export default SingleListing;
