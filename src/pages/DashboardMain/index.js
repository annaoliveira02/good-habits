import SideMenu from "../../components/SideMenu";
import Header from "../../components/Header"
import { DashboardContainer } from "../../styles/mainContainers";
import { DashboardMainBox } from "./style";
import Footer from "../../components/Footer";

const DashboardMain = () => {
  return (
    <div>
      <Header/>
      <DashboardContainer>
      <SideMenu/>
      <DashboardMainBox>
        <div className="mainHabits">Meus hábitos</div>
        <div className="mainGroups">Meus grupos</div>
      </DashboardMainBox>      
      </DashboardContainer>
      <Footer/>
    </div>    
    )
};

export default DashboardMain;
