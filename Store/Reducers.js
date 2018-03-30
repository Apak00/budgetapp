import AppNavigation from '../Navigation/AppNavigation'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers";

const defaultState = {
    someproperty:"initial state!!!"
};
function Reducers(state = defaultState, action) {
    switch (action.type) {
        case "ADD_TODO":
            console.log("ADD_TODO");
            return state;
        default:
            return state;
    }
}


const initialRootState = AppNavigation.router.getStateForAction(AppNavigation.router.getActionForPathAndParams('loginStack'));

function navReducer(state = initialRootState, action) {
    const lastRoute = state.routes[state.routes.length - 1];
    if(lastRoute.routeName === action.routeName){
        return state;
    }
    const newState = AppNavigation.router.getStateForAction(action, state);
    return newState || state;
}
const rootReducer = combineReducers({
    nav: navReducer,
    others: Reducers,
});
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);


export default createStore(rootReducer, applyMiddleware(middleware));
