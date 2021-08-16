import ListContainer from "./style";
import { GroupsContext } from "../../Providers/groups";
import { useContext, useState, useEffect } from "react";
import api from '../../services/api';
import { useToken } from "../../Providers/token";


const SubscribeGroupList = ({ result }) => {
    console.log(result.id);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const { groupsList } = useContext(GroupsContext);
    const { token } = useToken();

    useEffect(() => {   // Verifica se usuário já é inscrito naquele grupo. Se for, desabilita o botão
        if (groupsList.find(group => group.id === result.id)) {
            setIsSubscribed(true);
        }
    }, []);

    const handleSubscription = () => {
        api.post(`groups/${result.id}/subscribe/`, {},
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <ListContainer isSubscribed={isSubscribed}>
            <p> {result.name} </p>
            {isSubscribed ?
                <button disabled> Inscrito </button>
                :
                <button onClick={handleSubscription}> Inscrever-se </button>
            }
        </ListContainer>
    )
}

export default SubscribeGroupList;