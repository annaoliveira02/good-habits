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

const DashboardHabits = () => {
  const { habitsList, addHabit } = useHabits();
  const [showDrawer, setShowDrawer] = useState(false);
  const { authenticated } = useAuthentication();

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
<<<<<<< HEAD
          <div className="mainHabits">
            Meus hábitos
            {/* <HabitCreator /> */}
=======
          <HabitsBox>
            <h1 className="DashboardTitle">meus hábitos</h1>
            <HabitCreator />
>>>>>>> f58ec73834399765bb973414f09d2207aaa518d5
            <div>
              {habitsList.map((habit) => {
                return <HabitCard key={habit.id} habit={habit} />;
              })}
            </div>
            <button onClick={addHabit}>Novo hábito</button>
          </HabitsBox>

          <div>Mais informações</div>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardHabits;
