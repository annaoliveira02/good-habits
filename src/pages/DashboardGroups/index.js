import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";

const DashboardGroups = () => {
  return (
    <div>
      <Header/>
      <DashboardContainer>
      <SideMenu/>
      <DashboardMainBox>
        <div className="mainHabits">Meus grupos</div>
        <div className="mainGroups">
          Criar grupo
          <button>Novo grupo</button></div>
      </DashboardMainBox>      
      </DashboardContainer>
      <Footer/>
    </div> 
  )
};

export default DashboardGroups;
