const GroupCreator = () => {

// esse componente é um modal que deve ser aberto quando clicar no botão Novo grupo

    return (
        <div>
            <input placeholder="Nome do grupo"/>
            <input placeholder="Descrição"/>
            <input placeholder="Categoria"/>
            <button>Criar grupo</button>
            <button>Fechar janela</button>
        </div>
    )
}

export default GroupCreator;