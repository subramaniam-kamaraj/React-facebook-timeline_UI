import React from 'react';

class Likes extends React.Component {
    state = {
        count: 0
    }
    likes = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <span className="btn btn-primary" onClick={this.likes}>{this.state.count} LIKE </span>
        )
    }
}

export default Likes;