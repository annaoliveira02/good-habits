import { useHabits } from "../../Providers/habits";

const HabitCard = ({ habit }) => {
  const { removeHabit, editHabit } = useHabits();

  return (
    <div>
      <p>Título: {habit.title}</p>
      <p>Dificuldade: {habit.difficulty}</p>
      <p>Categoria: {habit.category}</p>
      <p>Frequência: {habit.frequency}</p>
      <p>Progresso: {habit.how_much_achieved}%</p>
      <p>Concluído: {habit.achieved}</p>
      <button onClick={() => removeHabit(habit.id)}>Remover hábito</button>
      <button onClick={() => editHabit(habit)}>Editar hábito</button>
    </div>
  );
};

export default HabitCard;
