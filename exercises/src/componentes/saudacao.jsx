import React, {Component } from 'react'

export default class Saudacao extends Component{
    constructor(props){
        super(props)
        this.state ={
            tipo: this.props.tipo,
            nome: this.props.nome
        }
        this.setTipo = this.setTipo.bind(this)
        //this.setNome = this.setNome.bind(this)
    }

    setTipo(event){
        //console.log(e.target.value);
        //props não pode alterar é constante
        //this.props.tipo = e.target.value;
        this.setState({ tipo: event.target.value })
    }

    setNome(event){
       this.setState({nome: event.target.value})
    }



    render(){
        const {tipo , nome} = this.state
        return(
            <div>
                <h1> {tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}

