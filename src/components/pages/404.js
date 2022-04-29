import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="This page is not found"
                />
                <title>This page is not found</title>
            </Helmet>
            <ErrorMessage />
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'color': 'white'}}>Page doesn't exist</p>
            <Link to="/app-marvel" style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'color': 'white'}}>Back to main page</Link>
        </div>
    )
};

export default Page404;