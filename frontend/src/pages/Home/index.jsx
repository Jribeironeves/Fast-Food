/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import Categories from "../../components/Cards/Categories";
import combos from "../../assets/png/combos.png";
import acompanhamentos from "../../assets/png/acompanhamentos.png";
import bebidas from "../../assets/png/bebidas.png";
import sobremesas from "../../assets/png/sobremesas.png";
import productsBurg from "../../assets/png/products.png";
import "./styles.scss";
import ProductsOne from "../../components/Cards/Products/Products-one";
import ProductsTwo from "../../components/Cards/Products/Products-two";
import ProductsThree from "../../components/Cards/Products/Products-three";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import close from "../../assets/png/close.png";
import Quantity from "../../components/Cards/Products/Quantity";
import Increment from "../../components/Increment";
import Additional from "../../components/Cards/Additional";
import bacon from "../../assets/png/bacon.png";
import cheddar from "../../assets/png/cheddar.png";
import molho from "../../assets/png/molho.png";

const Home = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="order">
        <div className="filter">
          <h1>Seja bem vindo!</h1>
          <input
            className="input-filter"
            placeholder="O que você procura?"
          ></input>
        </div>
        <div className="categories-list">
          <h2>Categorias</h2>
          <h3>Navegue por categoria</h3>
          <div className="align-items-categories">
            <Categories img={combos} title="Combos" />
            <Categories img={acompanhamentos} title="Acompanhamentos" />
            <Categories img={bebidas} title="Bebidas" />
            <Categories img={sobremesas} title="Sobremesas" />
          </div>
        </div>
        <div className="products-list-one">
          <h2>Produtos</h2>
          <h3>Selecione um produto para adicionar ao seu pedido</h3>
          <div className="align-products-list">
            <ProductsOne
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
            <ProductsOne
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
            <ProductsOne
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
            <ProductsOne
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
          </div>
        </div>
        <div className="products-list-two">
          <div className="align-products-list">
            <ProductsTwo
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
            <ProductsTwo
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
            <ProductsTwo
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
            <ProductsTwo
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
          </div>
        </div>
        <div className="products-list-three">
          <div className="align-products-list">
            <ProductsThree
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
            <ProductsThree
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
            <ProductsThree
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
            <ProductsThree
              onClick={toggleModal}
              img={productsBurg}
              title="Smash da casa"
              description="2x hambúrguer 200g"
              price="R$ 30,50"
            />
          </div>
        </div>
        <div className="align-buttons">
          <Button className="btn-dark">Finalizar</Button>
        </div>
        <div className="align-buttons">
          <Button className="btn-light">Cancelar</Button>
        </div>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Revise seu pedido!</h2>
              <div className="card-order-quantity">
                <Quantity />
                <div className="card-title">Smash da casa</div>
                <div className="card-description">
                  <h3>
                    {" "}
                    2x hambúrguer 200g, queijo cheddar, tomate, alface, picles,
                    cebola, molho da casa.
                  </h3>
                </div>
                <div className="card-increment">
                  <Increment />
                </div>
                <div className="card-price">R$30,50</div>
              </div>
              <div className="products-additional">
                <div className="card-title">Adicionais</div>
                <div className="card-sub-title ">
                  <h3>
                    Selecione os ingredientes que você quer adicionar a mais no
                    seu lanche.
                  </h3>
                </div>
                <div className="card-additional-1">
                  <Additional img={bacon} />
                  <div className="card-title">Bacon</div>
                  <div className="card-description">
                    <h3>10g</h3>
                  </div>
                </div>
                <div className="price-1">R$1,00</div>
                <div className="card-additional-2">
                  <Additional img={cheddar} />
                  <div className="card-title">Chedar</div>
                  <div className="card-description">
                    <h3>10g</h3>
                  </div>
                </div>
                <div className="price-2">R$1,00</div>
                <div className="card-additional-3">
                  <Additional img={molho} />
                  <div className="card-title">Molho</div>
                  <div className="card-description">
                    <h3>10g</h3>
                  </div>
                </div>
                <div className="price-3">R$1,00</div>
              </div>
              <div className="observation-title">Observações</div>
              <div className="observation-box">
                <input
                  className="input-filter"
                  placeholder="Adicione uma observação ao pedido"
                ></input>
              </div>
              <div className="box-order">
                <div className="description">1x Smash da casa</div>
                <div className="price">R$ 30,50</div>
                <div className="box-total-order">
                  <h3>Total do pedido:</h3>
                  <h1>R$ 30,50</h1>
                  <div className="align-buttons-modal">
                  <Button className="btn-light">Continuar adicionando</Button>
                  <Button className="btn-dark">Adicionar ao pedido </Button>
                </div>
                </div>
              </div>
              <div className="close-modal">
                <img src={close} alt="" onClick={toggleModal} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
