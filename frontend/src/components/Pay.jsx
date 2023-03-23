import React from "react";

function Succes(){
    window.alert('Succes');
}

function Pay(props){
    const{total}=props.location.state;
    return(
        <div className="row">
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">TOTAL:</h1>
                        <hr></hr>
                        <h3 className="card-text">${total}</h3>  
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <label>Name</label>
                        <input className="input-box" placeholder="Name" name="Name" required></input>
                        <label >Card Number</label>
                        <input className="input-box" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" required></input>
                        <label>Expires</label>
                        <input type="month" className="input-box" placeholder="Expires" name="ExpireMonth" required></input>
                        <label>Security Number</label>
                        <input className="input-box" placeholder="Security Number" name="SecurityNumber" required></input>
                        <button type="submit" className="btn btn-dark mt-2" onClick={Succes}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay;