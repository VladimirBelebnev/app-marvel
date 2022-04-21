import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
 
import setContentList from '../../utils/setContentList';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const {process, setProcess, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'));
    };

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        };

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended)
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
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="char__item">
                    <li
                        className="char__item"
                        ref={element => itemRefs.current[i] = element}
                        tabIndex={0}
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
                        <img src={thumbnail} alt={name} style={styleImg} />
                        <div className="char__name">{name}</div>
                    </li>
                </CSSTransition>
            )
        }); 

        return (
            <TransitionGroup className="char__grid" component={'ul'}>
                {items} 
            </TransitionGroup>
        )
    }

    // разбор в следующем уроке
    const elements = useMemo(() => {
        return setContentList(process, () => renderItems(charList), newItemLoading);
        // eslint-disable-next-line
    }, [process])
    
    return (
        <div className="char__list">
            {elements}
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