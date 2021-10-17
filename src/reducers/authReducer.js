import { types } from '../types/types';
/* 
Cuando no esté autenticado, el state estará vació, cuando se logee, tendrá esto:
    {
        uid: wu2u3okaAS2sQSss11s,
        nombre: 'Fernando'
    }
*/

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            };

        case types.logout:
            return {};

        default:
            return state;
    }
};
