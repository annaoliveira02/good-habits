const GoalCard = ({goal}) => {

    return (
        <div>
            {goal.title}
            <button>concluir</button>
            <button>remover</button>
        </div>
    )
}

export default GoalCard;