import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";
import Preparing from "../../components/Cards/Preparing";
import burg from "../../assets/png/preparando.png";
import excluir from "../../assets/png/excluir.png";
import incluir from "../../assets/png/incluir.png";
import Ready from "../../components/Cards/Ready";

const Kitchen = () => {
  const [pedidos, setPedidos] = useState([]);

  const getPedidos = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setPedidos(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPedidos();
  }, [setPedidos]);

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = pedidos.filter((user) => user.id !== id);

        setPedidos(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
  };

  return (
    <>
      <div className="kitchen">
        <div className="title-preparing">
          <h1>Preperando:</h1>
          <h2>Pronto:</h2>
        </div>
        <div className="align-preparing-itens">
          {pedidos.map((item, i) => (
            <Preparing
              key={item.id}
              className="preparing"
              img={burg}
              title={item.cliente}
              description={item.name_product}
              btnExcluir={excluir}
              btnIncluir={incluir}
              funExcluir={() => handleDelete(item.id)}
            />
          ))}
        </div>
        <div className="align-ready-itens">
          <Ready
            className="ready"
            img={burg}
            title="200 - Camila"
            description="1x Smash da casa"
            btnExcluir={excluir}
          />
        </div>
      </div>
    </>
  );
};

export default Kitchen;
