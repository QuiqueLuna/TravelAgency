import React from "react";
import HotelCard from "./HotelCard"
import hotels from "../hotels";


function CreateHotel(hotels){
    return(
      <HotelCard
        key={hotels.id}
        id={hotels.id}
        name={hotels.name}
        location={hotels.location}
        description={hotels.description}
        image1={hotels.image1}
        image2={hotels.image2}
        image3={hotels.image3}
        price={hotels.price}
      />
    );
}

function Main(){
    return(
      <div>
        <h1 className="frooms">Featured Hotels</h1>
        <hr></hr>
        <div className="row">
          {hotels.map(CreateHotel)}
        </div>
      </div>
    );
}

export default Main;

