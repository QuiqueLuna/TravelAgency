import React, { Component } from "react";
import SearchCard from "./SearchCard";
import hotels from "../hotels";

class Search extends Component{
    state={
        busqueda:''
    }
    CreateHotel(hotels){
        return(
            <SearchCard
                key={hotels.id}
                id={hotels.id}
                name={hotels.name}
                location={hotels.location}
                description={hotels.description}
                image1={hotels.image1}
                price={hotels.price}
            />
            );
    }

    render(){
        return(
            <div>
                <div className="row">
                {hotels.map(this.CreateHotel)}
                </div>
            </div>
        )
    }
}
/*
function CreateHotel(hotels){
    if(hotels.name===n){
    return(
      <SearchCard
        key={hotels.id}
        id={hotels.id}
        name={hotels.name}
        location={hotels.location}
        description={hotels.description}
        image1={hotels.image1}
        price={hotels.price}
      />
    );
    }

}

function Search(){
    return(
        <div>
            <div className="row">
            {hotels.map(CreateHotel)}
            </div>
        </div>
    )
}
*/
export default Search;