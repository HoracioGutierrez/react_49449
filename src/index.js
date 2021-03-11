//1) Tenemos que traer a React
import React from "react"
//2) Tenemos que traer a ReactDOM
import ReactDOM from "react-dom"

import App from "./App"
//3) Necesitamos un componente
// Un componente de React es una funcion
// Un componente de React va en mayuscula
// Un componente de React tiene que retornar algo
// Un componente de React tiene UN SOLO RETORNO

/* function Foo(){
    return "Hola Mundo"
} */

/* const Foo = () => {
    return "Funcion Flecha"
} */

/* class Foo extends React.Component {
    render(){
        return "Componente Clase"
    }
}
 */
//4) Necesitamos montar un componente en el DOM
ReactDOM.render(
    //Componente,
    <App/>,
    //nodo del DOM
    document.getElementById("root")
)