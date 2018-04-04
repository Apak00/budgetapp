import React from 'react';
import * as ReactNavigation from 'react-navigation';
import {connect} from 'react-redux';
import AppNavigation from './AppNavigation';
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import {BackHandler} from "react-native";
import store from "../Store/Reducers";


// here is our redux-aware our smart component


const addListener = createReduxBoundAddListener("root");

class ReduxNavigation extends React.Component {
    constructor(props, context) {
        super(props, context);
        }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(ReactNavigation.NavigationActions.back());
        return true;
    };


    render() {
        const {dispatch, nav} = this.props;
        const navigation = ReactNavigation.addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
        });
        return <AppNavigation navigation={navigation}/>;
    }
}

const mapStateToProps = state => ({nav: state.nav});
export default connect(mapStateToProps)(ReduxNavigation)