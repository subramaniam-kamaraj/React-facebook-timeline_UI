import React from "react";
import Listed from "./Listed"
import Likes from "./Likes"

class Prev extends React.Component {
    

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.items.map(i => {
                            return (
                                <li key={i} className="list-group-item">
                                    <span className="float-right btn btn-outline-primary" onClick={this.props.handleDelete.bind(this, i)}>Delete</span>
                                    <p><span> {i} </span></p><br></br>
                                    <Likes />
                                    <span className="float-right btn btn-primary"> SHARE </span>
                                    <li className="list-group-item">
                                        <Listed  />
                                    </li>

                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Prev;