import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

import setContentList from '../../utils/setContentList';
import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const ComicsList = () => {
    
    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {getAllComics, process, setProcess} = useMarvelService();
    
    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
            .then(() => setProcess('confirmed'));
    };  

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        };

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 8);
        setComicsEnded(ended);
    };  

    function renderItems(data) {
        const items = data.map((item) => {
            const { id, title, price, thumbnail } = item;

            const styleImg = (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
                ? { objectFit: "contain" } : { objectFit: "cover" });

            return (
                <CSSTransition
                    key={id}
                    timeout={600}
                    classNames="comics__item">
                    <li
                        className="comics__item" >
                        {/* eslint-disable-next-line */}
                        <Link to={`/comics/${id}`}>
                            <img src={thumbnail}
                                alt={title}
                                className="comics__item-img"
                                style={styleImg} />
                            <div className="comics__item-name">{title}</div>
                            <div className="comics__item-price">{price}</div>
                        </Link>
                    </li>
                </CSSTransition>
            )
        });
        return (
            <TransitionGroup className="comics__grid" component="ul" >
                {items}
            </TransitionGroup>
        )
    };

    return (
        <div className="comics__list">
            {setContentList(process, () => renderItems(comicsList), newItemLoading)}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)} >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;