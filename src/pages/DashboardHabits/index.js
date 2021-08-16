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

const DashboardHabits = () => {
  const { habitsList, addHabit } = useHabits();
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <div>
      <Drawer anchor="left" open={showDrawer} onClose={() => setShowDrawer(false)}>
        <DrawerMenu/>
      </Drawer>
      <Header setShowDrawer={setShowDrawer}/>
      <DashboardContainer>
        <SideMenu />
        <DashboardMainBox>
          <div className="mainHabits">
            Meus hábitos
            <div>
              {habitsList.map((habit) => {
                return <HabitCard key={habit.id} habit={habit} />;
              })}
            </div>
            <button onClick={addHabit}>Novo hábito</button>
          </div>

          <div>Mais informações</div>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardHabits;
