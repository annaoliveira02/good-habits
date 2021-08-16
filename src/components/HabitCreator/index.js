const HabitCreator = () => {

// esse componente é um modal que deve abrir na tela ao clicar no botão Novo hábito

    return (
        <div>
            <input placeholder="Título"/>
            <input placeholder="Categoria"/>
            <input placeholder="Dificuldade"/>
            <input placeholder="Frequência"/>
            <input placeholder="Concluído"/>
            <input placeholder="Progresso"/>
            <input placeholder="Usuário"/>
            <button>Criar hábito</button>
        </div>
    )
}

export default HabitCreator;