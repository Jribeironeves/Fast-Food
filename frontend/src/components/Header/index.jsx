/* eslint-disable no-undef */
import React from "react";

import "./styles.scss";
import hamburguer from "../../assets/png/hamburguer.png";

const { useState, Fragment } = React;

const Header = () => {
  const [active, setActive] = useState("1");

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <>
      <div className="header">
        <div className="icon">
          <img src={hamburguer} alt="Hambúrguer" />
        </div>
        <div className="text-fast">fastfood</div>
        <div className="btn-group">
          <Fragment>
            <div className="btn-pedidos">
              <button
                key={1}
                className={active === "1" ? "active" : undefined}
                id={"1"}
                onClick={handleClick}
              >
                Pedidos
              </button>
            </div>
            <div className="btn-pedidos">
              <button
                key={2}
                className={active === "2" ? "active" : undefined}
                id={"2"}
                onClick={handleClick}
              >
                Cozinha
              </button>
            </div>
            <div className="btn-pedidos">
              <button
                key={3}
                className={active === "3" ? "active" : undefined}
                id={"3"}
                onClick={handleClick}
              >
                Retirada
              </button>
            </div>
          </Fragment>
        </div>
      </div>
    </>
  );
};

export default Header;
