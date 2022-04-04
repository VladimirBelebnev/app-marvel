import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=0583c8fb8349856863fd5227fc3f33bd';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=
        ${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    };

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    };

    const getAllComics = async () => {
        const res = await request(`${_apiBase}comics?limit=8&${_apiKey}`);
        return res.data.results.map(_transformComics);
    };
    
    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: (char.name.length > 20) ? `${char.name.slice(0, 22)}...` : char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` 
            : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    };

    const _transformComics = (comics) => {
        id: comics.id,
        title: comics.title, 
        thumbnail: 
    };

    return {loading, error, getAllCharacters, getCharacter, getAllComics, clearError};
}

export default useMarvelService;