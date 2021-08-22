import { stat } from '@nodelib/fs.stat';
import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';
const initialState = {
    status: false,
    sort: {
        by: 'number',
        value: 1
    }
}

var reduceFunction = (state = initialState, action) => {

    var preState = state.status;
    switch (action.type) {
        case 'status': {
            state.status = !state.status;
            return state;
        }
        case 'sort': {
            var { status, sort } = state;

            state.sort = {
                by: action.sort.by,
                value: action.sort.value
            }
            return state;
        }
        default: break;
    }
    return state;
}
var actionStatus = {
    type: 'status'
}
var actionSort = {
    type: 'sort',
    sort: {
        by: 'name',
        value: -1
    }
}
const store = createStore(reduceFunction);
console.log(store.getState());
store.dispatch(actionStatus);
console.log(store.getState())

export let message = 'ES6 Modules';
function makeGamePlayer() {
    var { name, totalScore, gamesPlayed } = { name: 'huy', totalScore: '10', gamesPlayed: '2' }
    return {
        name: name,
        totalscore: totalScore,
        gamesPlayed: gamesPlayed
    };
}
function load(url, stt) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();

        request.onreadystatechange = function (e) {
            if (this.readyState === 4) {
                if (this.status == 200) {
                    setTimeout(function(){
                        resolve(this.response + stt.toString());
                    },2000);
                } else {
                    reject(this.status + stt.toString());
                }
            }
        }
        request.open('GET', url, true);
        request.send();
    });
}
// load('https://www.javascripttutorial.net/sample/promise/api.json', 1)
//     .then(
//         response => {

//             console.log(response)

//             return load('https://www.javascripttutorial.net/sample/promise/api.json', 2)
//         }
//     )