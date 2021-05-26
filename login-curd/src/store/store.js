
// redux
// core store management

// react-redux
// to integrate redux with react project

// npm install redux react-redux

// npm uninstall redux react-redux

// npm is a download manager or package manager

import { createStore, combineReducers } from 'redux';

let userData = {
    loggedUser:{}
}

function useSection(oldData = userData, newData) {

    oldData = {...oldData};

    if (newData.type == "LOGIN_USER") {

        oldData.loggedUser  = newData.user;

    } else if (newData.type == "LOGOUT_USER") {
        
        oldData.loggedUser  = {};

    }

    return oldData

}

let adData = {
    ads: ["ad1", "ad2", "ad3"]
}

function adsSection(oldData = adData, newData) {


    if (newData.type == "ADD_Ad") {
        oldData.ads.push(newData.city);
    } else if (newData.type == "DELETE_Ad") {
        oldData.ads.splice(newData.abc, 1);
    } else if (newData.type == "UPDATE_Ad") {

        oldData.ads[newData.eIndex] = newData.newName;

    }
    return oldData;

}
// store.useSection.users;
// store.adsSection.ads;

let reducers = combineReducers({ useSection, adsSection });


let store = createStore(reducers);

export default store;