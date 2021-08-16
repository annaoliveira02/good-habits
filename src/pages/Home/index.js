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
          <div className="title">
            Gerencie melhor sua rotina com <span className="trademark">goodhabits</span>™
          </div>
          <div className="subtitle">
            A plataforma que faltava para enumerar e manter seus hábitos,
            criar e participar de grupos onde os membros compartilham atividades
            e definem metas.
          </div>
          <div>
            <MainButton onClick={() => history.push("/signup")}>
              Começar
            </MainButton>
          </div>
        </Breaker>
      </InitialContainer>
      <Footer />
    </div>
  );
};

export default Home;
