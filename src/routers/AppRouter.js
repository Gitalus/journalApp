import React from 'react';
import { Route } from 'react-router';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <div>
            <Route
                path="/auth"
                component={AuthRouter}
            />
            <Route
                exact
                path="/"
                component={JournalScreen}
            />
        </div>
    )
}
