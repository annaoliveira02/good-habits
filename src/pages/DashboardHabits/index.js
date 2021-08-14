import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";
import { useHabits } from "../../Providers/habits";
import HabitCard from "../../components/HabitCard";

const DashboardHabits = () => {
  const { habitsList, addHabit } = useHabits();

  return (
    <div>
      <Header />
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
