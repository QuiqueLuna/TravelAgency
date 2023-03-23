import React from "react";
import hotels from "../hotels";
import axios from "axios";

async function checkId(id){
    const add = {
        name: hotels[id-1].name,
        location: hotels[id-1].location,
        description: hotels[id-1].description,
        image: hotels[id-1].image1,
        price: hotels[id-1].price
    }
    await axios.post('http://localhost:4000', add);
    await axios.post('http://localhost:4000/History', add);
}

function HotelCard(props){
    return(
        <div className="col-sm-4 mb-4 mt-4">
        <div className="card outlineBox">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src={props.image1} height="200px" alt="First slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={props.image2} height="200px" alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={props.image3} height="200px" alt="Third slide"/>
            </div>
        </div>
        </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <hr></hr>
                <p className="card-text">{props.description}</p>
                <p className="card-text">Location: {props.location}</p>
                <p className="card-next">Price: ${props.price}</p>
                <button className="btn btn-dark" type="submit" onClick={()=>checkId(props.id)}>
                    Add
                </button>
            </div>
        </div>
        </div>
    )
}

export default HotelCard;