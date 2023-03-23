import React,{Component} from "react";
import {Redirect} from 'react-router-dom';
import axios from "axios";

class Purchases extends Component{
    state={
        purchases: [],
        total:'',
        tax:'',
        totaltax:'',
        payCheck: false
    }

    checkTotal(){
        let pay=0;
        for(let i=0;i<this.state.purchases.length;i++){
            pay+=this.state.purchases[i].price;
        }
        this.setState({
            total: pay,
            tax: pay*0.16,
            totaltax: Math.round(((pay*1.16) + Number.EPSILON) * 100) / 100
        })
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/Purchases');
        this.setState({purchases: res.data});
        this.checkTotal()
    }


    deletePurchase = async (purchaseid) =>{
        await axios.delete('http://localhost:4000/' + purchaseid);
        const res = await axios.get('http://localhost:4000/Purchases');
        this.setState({purchases: res.data});
        this.checkTotal()
    }

    finalPay(payment){
        console.log(payment);
        this.setState({
            payCheck: true
        })
    }


    render(){
        if(this.state.payCheck){
            return <Redirect to={{
                pathname: '/Pay',
                state: {
                    total: this.state.totaltax
                }
            }}/>
        }
        return(
        <div>
        <h1>Shopping Cart</h1>
        <hr></hr>
        <div className="row">
            {
                this.state.purchases.map(purchase =>(
                    <div className="col-sm-4 mb-4" key={purchase._id}>
                        <div className="card outlineBox">
                            <img className="card-img-top" src={purchase.image} height="200px" alt="Hotel"/>
                            <div className="card-body">
                                <h5 className="card-title">{purchase.name}</h5>
                                <hr></hr>
                                <p className="card-text">{purchase.description}</p>
                                <p className="card-text">Location: {purchase.location}</p>
                                <p className="card-next">Price: ${purchase.price}</p>
                                <button className="btn btn-danger" onClick={()=>this.deletePurchase(purchase._id)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className="col-6">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <p className="card-title"><b>Price:</b> ${this.state.total}</p> 
                            <p className="card-title"><b>Tax:</b> ${this.state.tax}</p> 
                            <p className="card-title"><b>Total:</b> ${this.state.totaltax}</p> 
                        </div>
                        <div className="col">
                            <button className="btn btn-success mt-4" onClick={()=>this.finalPay(this.state.totaltax)}>
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default Purchases;