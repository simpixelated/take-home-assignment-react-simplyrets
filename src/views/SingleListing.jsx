import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';
import { useEffect, useState } from "react";


const SingleListing = ({ address, listingId, photos, listDate, listPrice, property }) => {
  const [isFavorited, setFavorited] = useState(() => {
    const saved = localStorage.getItem(listingId)
    return JSON.parse(saved) || null
  })

  useEffect(() => {
    localStorage.setItem(listingId, isFavorited)
  }, [listingId, isFavorited])

  const formattedListDate = new Date(listDate).toLocaleString('en-US').split(',')[0]
  const formattedListPRice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(listPrice)
  const formattedBaths = property.bathsFull + (property.bathsHalf/2)

  return (
    <li>
      <div className="thumbnail" style={{ backgroundImage: `url(${photos[0]})` }}>
        <img
          src={isFavorited ? heartFill : heartStroke}
          className="favorite"
          alt="favorite icon"
          onClick={() => setFavorited(!isFavorited)}
        />
      </div>
      <p className="details">{property.bedrooms} BR | {formattedBaths} {property.bathsFull} {property.bathsHalf} Bath | {property.area} Sq Ft</p>
      <p className="price">{formattedListPRice}</p>
      <p className="address">{address.full}</p>
      <p className="date">Listed: {formattedListDate}</p>
    </li>
  )
}

export default SingleListing;
