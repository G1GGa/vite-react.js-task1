import "./styles/styles.scss";
import mainimage from "./images/imageequilibrium.jpg";
import ethereum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import avatar from "./images/image-avatar.png";
import eye from "./images/Eye.svg";

const Compo = () => {
  return (
    <>
      <div className="compo">
        <div className="eyeandmain">
          <div className="image" />
          <div className="eye-image">
            <img className="eye-image2" src={eye} alt="Eye.svg" />
          </div>
        </div>
        <h2 className="heading">Equilibrium #3429</h2>
        <p className="body">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="group4">
          <div className="group3">
            <img className="ethereum" src={ethereum} alt="icon-ethereum" />
            <h3 className="content">0.041 ETH</h3>
          </div>

          <div className="clock-text">
            <img className="clock" src={clock} alt="icon-clock" />
            <p style={{ marginLeft: "7px" }} className="text">
              {" "}
              3 days left
            </p>
          </div>
        </div>
        <div className="line"></div>
        {/* /* avatar items */}
        <div className="avatar">
          <img className="oval" src={avatar} alt="image-avatar.png" />
          <p className="p" style={{ color: "rgba(139, 172, 217, 1)" }}>
            {" "}
            Creation of{" "}
            <span className="span" style={{ color: "white" }}>
              Giga Imerlishvili
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Compo;
