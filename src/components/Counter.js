import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increaseCounter = () => {
        // console.log("Clicked!");

        this.setState({
            counter: this.state.counter + 1,
        });
    };

    render() {
        const { text } = this.props;
        // var text = this.props.text;
        return (
            <>
                <div>{text}</div>
                <div className="box">
                    {text}
                    <h1>{this.state.counter}</h1>
                    <button onClick={this.increaseCounter}>Click Me!!</button>
                </div>
            </>
        );
    }
}

export default Counter;
