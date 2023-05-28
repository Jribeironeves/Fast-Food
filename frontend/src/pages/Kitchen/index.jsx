import "./styles.scss";
import Preparing from "../../components/Cards/Preparing";
import burg from "../../assets/png/preparando.png";
import excluir from "../../assets/png/excluir.png";
import incluir from "../../assets/png/incluir.png";
import Ready from "../../components/Cards/Ready";

const Kitchen = () => {
  return (
    <>
      <div className="kitchen">
        <div className="title-preparing">
          <h1>Preperando:</h1>
          <h2>Pronto:</h2>
        </div>
        <div className="align-preparing-itens">
          <Preparing
            className="preparing"
            img={burg}
            title="201 - Ricardo"
            description="1x Smash da casa"
            btnExcluir={excluir}
            btnIncluir={incluir}
          />
          <Preparing
            className="preparing"
            img={burg}
            title="202 - Luiza"
            description="1x Smash da casa"
            btnExcluir={excluir}
            btnIncluir={incluir}
          />
          <Preparing
            className="preparing"
            img={burg}
            title="203 - Fernanda"
            description="1x Smash da casa"
            btnExcluir={excluir}
            btnIncluir={incluir}
          />
          <Preparing
            className="preparing"
            img={burg}
            title="204 - Bruna"
            description="1x Smash da casa"
            btnExcluir={excluir}
            btnIncluir={incluir}
          />
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
