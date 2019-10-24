import React from "react"
import "./style.css"
import Card from "../Card"

export default class Grid extends React.Component{

    constructor(){
        super()
        this.state = {
            vCharacters: [
                {id: 2, name: "Rick"},
                {id: 3, name: "Morty"},
            ]
        }
    }

    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/character/")
        .then(res => res.json())
        .then((res)=>{
            console.log(res.results)
            // Update state
            this.setState({
                vCharacters: res.results
            })
        })
    }

    render(){
        return <>
            <div>
                <h1>Rick and Morty</h1>
                {
                    this.state.vCharacters.map(item => (
                        <Card 
                            image={item.image}
                            id={item.id}
                            name={item.name}
                        />
                    ))
                }
            </div>
        </>
    }
}