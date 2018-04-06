import AppNavigation from '../Navigation/AppNavigation'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers";

const defaultState = {
    someproperty: "initial state!!!",
    statusBarStyle: {backgroundColor: "#333", height: 24},
    modalVisible: false,
};

function Reducers(state = defaultState, action) {
    switch (action.type) {
        case "STATUSBAR_COLOR":
            return {...state,statusBarStyle:{...state.statusBarStyle, backgroundColor:action.color}};
        case "LOG":
            console.log(action.text);
            return state;
        default:
            return state;
    }
}


const initialRootState = AppNavigation.router.getStateForAction(AppNavigation.router.getActionForPathAndParams('loginStack'));

function navReducer(state = initialRootState, action) {
    const lastRoute = state.routes[state.routes.length - 1];

    if (action.type === lastRoute.type && lastRoute.routeName === action.routeName) {
        // Repeated Root
        console.log("repeated");
        return state;
    } else if((action.routeName === "DrawerClose" || action.routeName === "DrawerOpen") && action.key === undefined){
        console.log("drawer repeated");
        return state;
    }else {
        const newState = AppNavigation.router.getStateForAction(action, state);
        return newState || state;
    }

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
