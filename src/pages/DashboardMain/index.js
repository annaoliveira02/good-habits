import SideMenu from "../../components/SideMenu";
import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import { DashboardMainBox } from "./style";
import Footer from "../../components/Footer";
import { useHabits } from "../../Providers/habits";

const DashboardMain = () => {
  const { habitsList, editHabit } = useHabits();
  console.log(habitsList);
  return (
    <div>
      <Header />
      <DashboardContainer>
        <SideMenu />
        <DashboardMainBox>
          <div className="mainHabits">
            <h3>Acompanhe seus hábitos</h3>
            {habitsList.map((habits) => {
              return (
                <div>
                  <h4>{habits.title}</h4>
                  <button onClick={() => editHabit(habits)}>
                    editar hábito
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mainGroups">Meus grupos</div>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardMain;
