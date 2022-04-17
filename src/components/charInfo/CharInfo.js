import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import Skeleton from '../skeleton/Skeleton';
import CharSearchForm from "../charSearchForm/CharSearchForm";

import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();
     
    useEffect(() => {
        updateChar();
        // eslint-disable-next-line
    }, [props.charId]);

    const updateChar = () => {
        const { charId } = props;

        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
            .then(onCharLoaded);
    };

    const onCharLoaded = (char) => {
        setChar(char);
    };

    const skeleton = char || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
            <CharSearchForm />
        </div>
    )
}

const View = ({char}) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;

    const styleImg = (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
        ? { objectFit: "contain" } : { objectFit: "cover" });

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={styleImg} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">{name}</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this chatacter.' }
                {   
                    // eslint-disable-next-line
                    comics.map((item, i) => {
                        if (i > 9) {
                            return (
                                <li className="char__comics-item" key={i}>
                                    <Link to={`/comics/${item.resourceURI.slice(43, 48)}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </>
    )
};

CharInfo.propTypes = {
    charId: PropTypes.number,
}; 

export default CharInfo;