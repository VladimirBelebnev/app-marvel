import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
 
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded);
    };

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        };

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended)
    };

    const itemRefs = useRef([]);

    const onItemFocus = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    };

    function renderItems(data) {
        const items = data.map((item, i) => {
            const { id, name, thumbnail } = item;

            const styleImg = (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' 
            ? { objectFit: "contain" } : { objectFit: "cover" });

            return (
                <li 
                    className="char__item"
                    ref={element => itemRefs.current[i] = element}
                    tabIndex={0}
                    key={id} 
                    onClick={() => {
                        props.onCharSelected(id);
                        onItemFocus(i);
                    }}
                    onKeyPress={event => {
                        if (event.key === '' || event.key === 'Enter') {
                            props.onCharSelected(id);
                            onItemFocus(i);
                        }
                    }}>
                    <img src={thumbnail} alt={name} style={ styleImg } />
                    <div className="char__name">{name}</div>
                </li>
            )
        }); 
        
        return (
            <ul className="char__grid">
                {items} 
            </ul>
        )
    }

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)} >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
};

export default CharList;