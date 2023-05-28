/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img src={hamburguer} alt="Hambúrguer" />
          </Link>
        </div>

        <div className="text-fast">
          <Link to="/">fastfood</Link>
        </div>

        <div className="btn-group">
          <Fragment>
            <div className="btn-pedidos">
              <Link to="/">
                <button
                  key={1}
                  className={active === "1" ? "active" : undefined}
                  id={"1"}
                  onClick={handleClick}
                >
                  Pedidos
                </button>
              </Link>
            </div>
            <div className="btn-pedidos">
              <Link to="/cozinha">
                <button
                  key={2}
                  className={active === "2" ? "active" : undefined}
                  id={"2"}
                  onClick={handleClick}
                >
                  Cozinha
                </button>
              </Link>
            </div>
            <div className="btn-pedidos">
              <Link to="/retirada">
                <button
                  key={3}
                  className={active === "3" ? "active" : undefined}
                  id={"3"}
                  onClick={handleClick}
                >
                  Retirada
                </button>
              </Link>
            </div>
          </Fragment>
        </div>
      </div>
    </>
  );
};

export default Header;
