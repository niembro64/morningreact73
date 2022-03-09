import React, {Component} from 'react'; 


class Counter extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {text} = this.props;
        // var text = this.props.text;
        return(
            <>
                <div>{text}</div>
            </>
        );
    }
}

export default Counter;