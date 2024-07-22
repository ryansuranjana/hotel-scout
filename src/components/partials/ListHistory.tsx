import React from "react";
import CardHotel from "../CardHotel";

const dummyData = [
  {
    name: "Privat villas of Bali",
    price: 4520000,
    address:
      "Jalan Pura Melangkelod Banjar Panti Giri- Desa Kutuh Kuta Selatan Bali",
    rating: 2,
    link: "https://github.com/ryansuranjana/hotel-scout",
  },
  {
    name: "Ayana Resort and Spa Bali",
    price: 4520000,
    address:
      "Karang Mas Estate ,Jalan Karang Mas Sejahtera, Jimbaran, Bali, Jimbaran, Kuta Selatan, Bali.",
    rating: 5,
    link: "https://github.com/ryansuranjana/hotel-scout",
  },
  {
    name: "Four Seasons Resort Bali",
    price: 4520000,
    address: "Sayan Ubud Gianyar, Ubud, Sayan, Bali, Indonesia, 80361",
    rating: 4,
    link: "https://github.com/ryansuranjana/hotel-scout",
  },
  {
    name: "Six Senses Uluwatu",
    price: 4520000,
    address:
      "Lokasi:  JI. Goa Lempeh, Pecatu, Kuta Selatan, Kabupaten Badung, Uluwatu, Kuta Selatan, Bali",
    rating: 4,
    link: "https://github.com/ryansuranjana/hotel-scout",
  },
];

const ListHistory = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:justify-normal justify-center w-full gap-5">
      {dummyData.map((data, i) => (
        <CardHotel
          key={i}
          name={data.name}
          price={data.price}
          address={data.address}
          rating={data.rating}
          link={data.link}
        />
      ))}
    </div>
  );
};

export default ListHistory;
