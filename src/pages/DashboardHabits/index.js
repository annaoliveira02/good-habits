import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";

const DashboardHabits = () => {
  return (
    <div>
      <Header/>
      <DashboardContainer>
      <SideMenu/>
      <DashboardMainBox>
        <div className="mainHabits">
          Meus hábitos
          <button>Novo hábito</button>
          </div>
        <div>Mais informações</div>
      </DashboardMainBox>      
      </DashboardContainer>
      <Footer/>
    </div> 
    );
};

export default DashboardHabits;
