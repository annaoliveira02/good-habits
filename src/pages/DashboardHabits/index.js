import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";
import { useHabits } from "../../Providers/habits";
import HabitCard from "../../components/HabitCard";
import { Drawer } from "@material-ui/core";
import DrawerMenu from "../../components/DrawerMenu";
import { useState } from "react";
import HabitCreator from "../../components/HabitCreator";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../../Providers/Authentication";
import { HabitsBox } from "./style";
import ModalContainer from '../../components/Modal';

const DashboardHabits = () => {
  const { habitsList, addHabit } = useHabits();
  const [showDrawer, setShowDrawer] = useState(false);
  const { authenticated } = useAuthentication();
  const [openModalCreator, setOpenModalCreator] = useState(false);

  const handleOpenHabitsCreator = () => {
    setOpenModalCreator(true);
  };

  if (authenticated === false) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <DrawerMenu />
      </Drawer>
      <Header setShowDrawer={setShowDrawer} />
      <DashboardContainer>
        <SideMenu />
        <DashboardMainBox>
          <HabitsBox>
            <h1 className="DashboardTitle">meus hábitos</h1>
            <div>
              {habitsList.map((habit, index) => {
                return <HabitCard key={index} habit={habit} />;
              })}
            </div>
            <button onClick={handleOpenHabitsCreator}>Novo hábito</button>
          </HabitsBox>
          <ModalContainer
            openModal={openModalCreator}
            setOpenModal={setOpenModalCreator}
          >
            <HabitCreator />
          </ModalContainer>

          <div>Mais informações</div>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardHabits;
