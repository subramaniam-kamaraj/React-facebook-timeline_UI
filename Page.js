import React from "react";
import Nav from "./Nav";
import Post from "./Post";
import Prev from "./Prev";


class Page extends React.Component {
    state = {
        post: []
    }
    add = (item) => {
        if (item==="")
        {
            alert("add something in timeline");
        }
        else{
        //console.log("new item", value);
        this.setState({
            post: [...this.state.post, item]
        })
    }
    }

    handleDelete = item => {
        this.setState({
            post: this.state.post.filter(i => i !== item)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <Nav />
                        <Post add={this.add} />
                        <Prev items={this.state.post} handleDelete={this.handleDelete} />
                    </div>
                </div>
            </div>
        );
    }
};
export default Page;