import React from "react";

function Main(){
    return (
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3> Danki.Code </h3>
            </div>
            <div className="item-menu">
              <a href="#"> Login </a>
            </div>
          </div>
        </div>

        <div className="form">
            <h2> Entre em contato </h2>
          <form>
            <div className="items-form">
              <input type="text" placeholder="Digite o seu nome ..."/>
              <input type="text" placeholder="Digite o seu nome ..."/>
              <input type="text" placeholder="Digite o seu nome ..."/>
              <input type="text" placeholder="Digite o seu nome ..."/>
              <input type="submit"/>
            </div>
          </form>

        </div>
      </div>
    )
}

export default Main;