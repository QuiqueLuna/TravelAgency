import React,{Component} from "react";
import axios from "axios";

class History extends Component{

    state={
        histories: []
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/Histories');
        this.setState({histories: res.data});
    }

    render(){
        return(
            <div>
            <h1>History</h1>
            <hr></hr>
            <div className="row">
            {
                this.state.histories.map(history =>(
                    <div className="col-sm-4 mb-4" key={history._id}>
                        <div className="card outlineBox">
                            <img className="card-img-top" src={history.image} height="200px" alt="Hotel"/>
                            <div className="card-body">
                                <h5 className="card-title">{history.name}</h5>
                                <p className="card-text">{history.description}</p>
                                <p className="card-text">Location: {history.location}</p>
                                <p className="card-next">Price: ${history.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
        );
    }
}

export default History;