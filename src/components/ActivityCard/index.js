const ActivityCard = ({activity}) => {

    return (
        <div>
            {activity.title}
            <button>concluir</button>
            <button>remover</button>
        </div>
    )
}

export default ActivityCard;