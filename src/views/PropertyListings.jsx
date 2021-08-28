import { useEffect, useState } from "react";
import SingleListing from "./SingleListing";

const PropertyListings = () => {

  // get previously fetched listings from local storage, if they exist
  const [listings, setListings] = useState(() => {
    const localListings = localStorage.getItem('listings')
    return JSON.parse(localListings) || []
  })

  // assume still loading if local storage is empty
  const [isLoaded, setIsLoaded] = useState(() => {
    return listings.length > 0
  })

  useEffect(() => {
    if (!isLoaded) {
      fetch('https://api.simplyrets.com/properties', { headers: { Authorization: `Basic ${btoa('simplyrets:simplyrets')}` }})
        .then(response => response.json())
        .then(result => {
          setIsLoaded(true)
          setListings(result)
          localStorage.setItem('listings', JSON.stringify(result))
        }, error => {
          setIsLoaded(true)
          console.error(error)
        })
    }
  }, [isLoaded])

  if (!isLoaded) {
    return <p>Loading...</p>
  } else if (listings.length === 0) {
    return <p>Sorry, no listings could be found.</p>
  } else {
    return (
      <ul className="listings">
        {listings.map(listing => (
          <SingleListing {...listing} key={listing.listingId} />
        ))}
      </ul>
    )
  }
}

export default PropertyListings
