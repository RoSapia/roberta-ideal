import React from 'react';
 


class App extends React.Component{
  state = {
    nome:'',
    idade:'',
    altura:'',
    peso:''
  
  }
  modificarNome = (event) =>{
    this.setState({
      nome: event.target.value
    })
  }
  modificarIdade = (event) =>{
    this.setState({
      idade: event.target.value
    })
  }
  modificarAltura = (event) =>{
    this.setState({
      altura: event.target.value
    })
  }
  modificarPeso = (event) =>{
    this.setState({
      peso: event.target.value
    })
  }
  render(){
    return(
      <>
      <h1>Isira o seu nome:</h1>
      <input type = 'text' value = {this.state.nome} onChange = {this.modificarNome}/>
      <h1>Isira a sua idade:</h1>
      <input type = 'text' value = {this.state.idade} onChange = {this.modificarIdade}/>
      <h1>Isira a sua altura:</h1>
      <input type = 'text' value = {this.state.altura} onChange = {this.modificarAltura}/>
      <h1>Insira o seu peso:</h1>
      <input type = 'text' value = {this.state.peso} onChange = {this.modificarPeso}/>
      
      <p align="center"> Meu nome é {this.state.nome}, tenho {this.state.idade} anos,
       {this.state.altura}m de altura e peso {this.state.peso} Kg. Sou <font color="#ff8566"><b>medrosa</b></font>, <font color="red"><b>passiva</b></font> e <font color="#cc0000
"><b>tímida</b></font>, 
       porém pretendo melhorá-los, <i><font color="#336600">enfrentando os meus medos</font>, <font color="#99cc00
">treinando a direção do carro</font>, 
       <font color="#336600"> expondo minha opinião/desejos</font> e <font color="009900">falando mais em público</font></i>. Pretendo chegar aos 58Kg.</p>
      
      </>

    )
  }
}

export default App;
