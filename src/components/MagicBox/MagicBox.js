import React from 'react'
import './styles.css'

export default class MagicBox extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            textMessage: ""
        }
    }

    getText = (e) => {
        console.log("Input ", e, e.target)
        const prev = ""

        /*if(e.target.value.length > 3){
            console.log("es mayor de  3")
        }

        e.target.value.length > 3 ? console.log("Mayor") 
        : console.log("menor")

        this.setState({
            textMessage: `${prev}${e.target.value}`
        })*/
    }
    // Get when the component will mount
    componentWillMount(){
        console.log('Component will mount')
    }

    // Get when component did mount
    componentDidMount(){
        console.log('Component did mount')
    }

    // 
    componentWillReceiveProps(){
        console.log('Component will recive')
    }

    //
    componentWillUpdate(){
        console.log('Component will update')
    }

    click = (e) => {
        e.preventDefault()
        console.log("Click", e, e.target.elements[0].value)
        
        this.setState({
            textMessage: e.target.elements[0].value
        })
    }

    render(){
        return(
            <div className="magic-box">

                <h1>{this.props.title}</h1>
                <h2>{this.props.description}</h2>

                <form onSubmit={ (event)=>this.click(event) }>
                    <input type="text" 
                    onKeyUp={(event)=>this.getText(event)} />
                    <button type="submit">Enviar</button>
                </form>
                

                <div className={`message-container
                    ${this.state.textMessage.length > 3 
                    ? "bg-blue" 
                    : "bg-red"
                    }`}
                    >
                    <span>El texto escrito :</span> {this.state.textMessage}
                    {/* {this.state.textMessage}*/}
                </div>

            </div>
        )
    }
}
