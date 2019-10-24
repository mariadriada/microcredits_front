import React from "react"
import Container from "react-bootstrap/Container"
import Menu from "./Menu"
import Nav from "react-bootstrap/Nav"
import "./style.scss"

export default class Layout extends React.Component {
    render(){
        return(
            <Container fluid className="layout" >
                <header 
                    className="d-flex justify-content-center flex-column align-items-center">
                    <h1>Microcredits System</h1>
                    <Menu/>
                </header>
                <Container className="dinamic-content">
                    {this.props.children}
                </Container>
                <footer>
                    <h3> Create by: Maria Giraldo </h3>
                    <h3> 
                        <Nav.Link href="https://github.com/mariadriada" target="_blank">Github</Nav.Link>
                    </h3>
                </footer>
            </Container>
        )
    }
}
