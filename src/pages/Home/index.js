import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { InitialContainer } from "../../styles/mainContainers";
import { MainButton } from "../../styles/mainContainers";
import { Breaker } from "./style";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <Header />
      <InitialContainer>
        <Breaker>
          <div>
            Gerencie melhor a <br /> sua
            <span className="titleSpan"> Rotina </span> com <br /> Goodhabits
          </div>
          <div>
            <MainButton onClick={() => history.push("/signup")}>
              Get Started
            </MainButton>
          </div>
        </Breaker>
      </InitialContainer>
      <Footer />
    </div>
  );
};

export default Home;
