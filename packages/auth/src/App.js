import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin" exact component={SignIn} />
                        <Route path="/auth/signup" exact component={SignUp} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}