import React from "react";
import "./style.css";

export default class Card extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
        <>
            <div className="card">
                <img src={this.props.image}></img>
                <h2>ID: {this.props.id}</h2>
                <h3>NAME: {this.props.name}</h3>
            </div>
        </>
        );
    }
}
