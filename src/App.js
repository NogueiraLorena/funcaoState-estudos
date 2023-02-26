import "./index.css";

// import React, { Component } from "react";
// export default class App extends Component {
//   state = {
//     nome: "Karynne",
//     idade: 26,
//     cor: "preto"
//   };

//   render() {
//     return (
//       <div>
//         <h2> Minha cor favorita é {this.state.cor} </h2>
//         <h2> Me chamo {this.state.nome} </h2>
//         <h3>
//           {" "}
//           Me chamo {this.state.nome}, tenho {this.state.idade} anos e a minha
//           cor favorita é {this.state.cor}{" "}
//         </h3>
//       </div>
//     );
//   }
// }

//SETSTATE
//Setstate é um método de modo que o usúário possa definir e manipular states com o passr do tempo. É usado para agendar atualização de estados.

//onClick: é um evento que executa determinada funcionalidade quando o botão é clicado.

// import React, { Component } from "react";
// class App extends Component {

// oi = () => {
//   console.log("Olá")
// }

// render(){
//   return(
//     <div>
//       <button onClick={this.oi}> Clique aqui </button>
//     </div>
//   )
// }
// }

// export default App;

//--------REAPROVEITANDO O INÍCIO DA AULA
// import React, { Component } from "react";
// class App extends Component {
//   state = {
//     nome: "Karynne",
//     idade: 26,
//     cor: "preto"
//   };

//   mudarNome = () => {
//     this.setState({
//       nome: "Brendon"
//     });
//   };

//   mudarCor = () => {
//     this.setState({
//       cor: "vermelha"
//     });
//   };

//   mudarIdade = () => {
//     this.setState({
//       idade: 15
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2> {this.state.nome} </h2>
//         <button onClick={this.mudarNome}> Mudar nome </button>

//         <h2> {this.state.cor} </h2>
//         <button onClick={this.mudarCor}> Mudar cor </button>

//         <h2> {this.state.idade}</h2>
//         <button onClick={this.mudarIdade}> Mudar idade </button>
//       </div>
//     );
//   }
// }

// export default App;

/// TROCANDO ANIMAIS

// import React, { Component } from "react";
// class App extends Component {
//   state = {
//     animal: "Cachorro"
//   };

//   trocar = () => {
//     this.setState({
//       animal: "Gato",
//       fruta: "morango"
//     });
//   };

//   voltar = () => {
//     this.setState({
//       animal: "Cachorro"
//     })
//   }

//   morango = () => {
//     this.setState({
//       fruta: "uva"
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1> {this.state.animal} </h1>
//         <button onClick={this.trocar}> Trocar </button>
//         <button onClick={this.voltar} > Voltar </button>

//         <h3> {this.state.fruta} </h3>
//         <img onClick={this.morango} src="https://ciclovivo.com.br/wp-content/uploads/2021/09/morango-hortalica-ciclovivo.jpg" alt="morango" width="200px"/>
//       </div>
//     );
//   }
// }

// export default App;

//------Trocando com o mesmo botão

// import React, { Component } from "react";
// class App extends Component {

//   state = {
//     msg: "Bom dia!"
//   }

// // condição ? valor se for verdadeiro : valor se for falso

//   mudarMsg = () => {
//     this.setState({
//       msg: this.state.msg === "Bom dia!" ? "Loja aberta" : "Volte outra hora!"
//     })
//   }

//   render() {
//     return (
//       <div>
//        <h1> {this.state.msg} </h1>
//        <button onClick={this.mudarMsg}> Mude a mensagem </button>
//       </div>
//     );
//   }
// }

// export default App;

//Menu Hamburguer

import React, { Component } from "react";
import Banana from "./imagens/file-Banana.jpg";

class App extends Component {
  state = {
    aberto: false,
    rico: true,
    hortfruti: [
      {
        imagem: `${Banana}`,
        texto: "banana"
      },
      {}
    ]
  };

  // condição ? valor se for verdadeiro : valor se for falso

  abrirMenu = () => {
    this.setState({
      aberto: !this.state.aberto // ! é diferente
    });
  };

  rico = () => {
    this.setState({
      rico: !this.state.rico // ! é diferente
    });
  };

  render() {
    return (
      <div>
        <h1> Menu Hamburguer </h1>

        <button onClick={this.abrirMenu}>
          {/* condição ? valor se for verdadeiro : valor se for falso */}
          {this.state.aberto === true ? "X" : "☰"}
        </button>

        <button onClick={this.rico}>
          {this.state.rico === true ? "sou rico" : "sou pobre"}
        </button>

        <img src={this.state.imagem} alt="" />
      </div>
    );
  }
}

export default App;
