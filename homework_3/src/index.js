import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

import './index.css'
import App from './App'

const initialState = {
    name: "",
    age: 0,
    gender: ""
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return {...state, name: action.payload.name, age: action.payload.age, gender: action.payload.gender}
        default:
            return state
    }
}


const store = createStore(formReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
)

