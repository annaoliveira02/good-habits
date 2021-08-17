import { useHabits } from "../../Providers/habits";
import { HabitContainer } from "./style";
import { FaCheckCircle } from "react-icons/fa";

const HabitCard = ({ habit }) => {
  const { removeHabit, editHabit } = useHabits();

  return (
    <HabitContainer>
      <h1>
        {habit.title} {habit.achieved && <FaCheckCircle />}
      </h1>
      <h3>Categoria: {habit.category}</h3>
      <h3>Dificuldade: {habit.difficulty}</h3>
      <div className="HabitButtons">
        <button onClick={() => removeHabit(habit.id)}>Remover hábito</button>
        <button onClick={() => editHabit(habit)}>Editar hábito</button>
      </div>
    </HabitContainer>
  );
};

export default HabitCard;
