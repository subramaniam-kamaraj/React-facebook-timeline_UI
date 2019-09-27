import React from "react";
class Post extends React.Component {
    state = { input: "" };
    handleInputChange = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = e => {
        this.props.add(this.state.input);
        this.setState({ input: "" });
    }

    render() {
        return (
            <div>
                <textarea rows="5" cols="130" placeholder="Write Something..." onChange={this.handleInputChange} value={this.state.input}></textarea>
                <button className="btn btn-outline-success" onClick={this.handleSubmit}>POST</button>
            </div>
        )
    }
}
export default Post;