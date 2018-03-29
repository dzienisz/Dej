import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCXB6tpBvJ4JS9JCVoeKgAQ0suOlG1Frxw",
    authDomain: "dej-shopping-list.firebaseapp.com",
    databaseURL: "https://dej-shopping-list.firebaseio.com",
    projectId: "dej-shopping-list",
    storageBucket: "",
    messagingSenderId: "319198489177"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals')