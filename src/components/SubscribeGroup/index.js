import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import SubscribeGroupList from '../SubscribeGroupList';
import SubscribeContainer from './style';
import api from '../../services/api';

const SubscribeGroupPopup = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [input, setInput] = useState('');

    const searchGroups = () => {
        api.get(`/groups/?search=${input}`)
            .then(response => response.data.results)
            .then(result => setSearchResults(result))
    }


    return (
        <SubscribeContainer>
            <header>
                <input placeholder='Procure um Grupo'
                    value={input}
                    onChange={e => setInput(e.target.value)} />
                <BsSearch onClick={searchGroups} />
            </header>
            <main>
                {searchResults.length === 0 ?
                    <p> Nenhum resultado para sua busca </p>
                    :
                    <ul>
                        {searchResults.map((result, index) => {
                            return <SubscribeGroupList key={index} result={result} />
                        })}
                    </ul>
                }
            </main>

        </SubscribeContainer>

    )

}

export default SubscribeGroupPopup;