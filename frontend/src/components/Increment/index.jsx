import "./styles.scss";

const Increment = () => {
  return (
    <>
      <div className="increment">
        <div className="align-itens">
          <div className="decrease">
            <button>-</button>
          </div>
          <div className="increase">
            <button>+</button>
          </div>
        </div>
        <div className="card-count">1</div>
      </div>
    </>
  );
};

export default Increment;
