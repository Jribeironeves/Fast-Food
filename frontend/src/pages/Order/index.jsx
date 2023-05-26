/* eslint-disable no-undef */
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

const Order = () => {
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
        <div className="products-list">
          <h2>Produtos</h2>
          <h3>Selecione um produto para adicionar ao seu pedido</h3>
          <div className="align-products-list">
            <ProductsOne img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50"/>
            <ProductsOne img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
            <ProductsOne img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
            <ProductsOne img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
          </div>
        </div>
        <div className="products-list">
          <div className="align-products-list">
            <ProductsTwo img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
            <ProductsTwo img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
            <ProductsTwo img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
            <ProductsTwo img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
          </div>
        </div>
        <div className="products-list">
          <div className="align-products-list">
            <ProductsThree img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
            <ProductsThree img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
            <ProductsThree img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
            <ProductsThree img={productsBurg} title="Smash da casa" description="2x hambúrguer 200g" price="R$ 30,50" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
