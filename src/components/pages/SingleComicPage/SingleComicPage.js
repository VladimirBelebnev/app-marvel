import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import "./SingleComicPage.scss"

const SingleComicPage = ({data}) => {
    const { title, description, pageCount, price, language, thumbnail } = data;

    const styleImg = (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
        ? { objectFit: "contain" } : { objectFit: "cover" });

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`${title} comics book`}
                />
                <title>{title}</title>
            </Helmet>
            <img src={thumbnail} alt={title} style={styleImg} className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
};

export default SingleComicPage;