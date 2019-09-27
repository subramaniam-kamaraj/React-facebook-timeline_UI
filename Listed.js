import React from "react";

class Listed extends React.Component {

    state = {
        // input: "",
        review: "",
        com: [],
    };
    box = event => {
        this.setState({
            review: event.target.value
        })
    }

    addcom = event => {
        if (this.state.review==="")
        {
            alert("write something on comment box");

        }
        else{
        //console.log("new item", value);
        this.setState({
            com: [...this.state.com, this.state.review],
            review: ""
        })
    }
    }
    delcom = item => {
        this.setState({
            com: this.state.com.filter(i => i !== item)
        })
    }

    render() {
        return (
            <div>
                <span> COMMENT </span><br></br>
                <input type="text" onChange={this.box} value={this.state.review} />
                <span className="btn btn-outline-primary" onClick={this.addcom}>Send</span>
                <ul className="list-group">
                    {
                        this.state.com.map(i => {
                            return (
                                <li key={i} className="list-group-item">
                                    <span>{i}</span>
                                    <span className="float-right btn btn-outline-primary" onClick={this.delcom.bind(this, i)}>Remove</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div >
        );
    }
}
export default Listed;