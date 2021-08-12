const GroupCard = () => {
    return (
        <div>
            <p>Nome do grupo:</p>
            <p>Descrição:</p>
            <p>Categoria: </p>
            <div>
                Atividades:
                (map de lista de atividades (usando ActivityCard) - GET group activities)
            </div>
            <div>Metas:
                (map de lista de metas (usando GoalCard) - GET Group Goals)
            </div>
            <button>Editar grupo</button>
        </div>
    )
}

export default GroupCard;