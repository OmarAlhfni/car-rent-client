import React, { useEffect, useState } from "react";

const CarInfo = ({ bookingItem }) => {
  const [firstImage, setFirstImage] = useState('');

  useEffect(() => {
    setFirstImage(bookingItem.photo)
  }, [])
  return (
    <div className="carInfoBox">

      <div className="carInfo">
        <img
          src={firstImage}
          alt="carInfo"
          className="carInfoImg"
        />
        <div className="carInfoInfo">
          <h2 className="carInfoTitle">{bookingItem.name}</h2>

          <h2 className="carInfoprice">Price/Day $75</h2>
        </div>
      </div>
      
      <div className="carInfoGallery">
        {bookingItem.gallery_photo.map(el =>
          <div onClick={() => setFirstImage(el)}>
            <img
              src={el}
              alt="car image"
              className="carGalleryImage"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CarInfo;
