import {useState} from 'react';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage as FormikErrorMessage} from 'formik';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charSearchForm.scss';

const CharSearchForm = () => {
    const [char, setChar] = useState(null);
    const {getCharacterByName, clearError, process, setProcess} = useMarvelService();

    const updateChar = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    };

    const onCharLoaded = (char) => {
        setChar(char);
    };

    const UserFound = () => {
        return (
            <div className="char__userFound">
                <p className="char__search-succses">There is! Visit {char[0].name} page?</p>
                <Link to={`/app-marvel/${char[0].id}`} className="button button__secondary">
                    <div className="inner">To page</div>
                </Link>
            </div>
        )
    };

    const errorMessage = process === 'error' ? <div className="char__search-error"><ErrorMessage/></div> : null;
    const result = !char ? null : char.length > 0 ? <UserFound /> : <p className="char__search-error">The character was not found. Check the name and try again</p>

    return (
        <Formik
            initialValues={{
                name: '',
            }} 
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'Minimum three symbols.')
                    .max(30, 'Maximum thirty symbols.')
                    .required('This field is required.'),
            })}
            onSubmit={({name}) => {
                updateChar(name);
            }}>
            <Form className="char__search">
                <p className="char__search-title">Or find a character by name:</p>
                <Field 
                    className="char__search-input" 
                    type="text" 
                    placeholder='Enter name' 
                    id="name" 
                    name="name" />
                <button 
                    className="button  button__main char__search-btn" 
                    type="submit"
                    disabled={process === 'loading'}>
                    <div className="inner">Find</div>
                </button>
                <FormikErrorMessage className="char__search-error" name="name" component="p" />
                {errorMessage}
                {result}
            </Form>
        </Formik>
    )
};  

export default CharSearchForm;