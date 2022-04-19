import { Link } from 'react-router-dom';

import './singleCharacterPage.scss';

const SingleCharacterPage = ({data}) => {
    const { name, description, thumbnail } = data;

    const styleImg = (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
        ? { objectFit: "contain" } : { objectFit: "cover" });

    return (
       <>
            <div className="single-char">
                <img src={thumbnail} alt={name} style={styleImg} className="single-char__img" />
                <div className="single-char__info">
                    <h2 className="single-char__name">{name}</h2>
                    <p className="single-char__descr">{description}</p>
                </div>
                <Link to="/characters" className="single-char__back">Back to main</Link>
            </div>       
       </>
    )
};

export default SingleCharacterPage;