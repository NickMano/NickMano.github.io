import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import App from './routes/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = {
    "websites": [
        {
            "title": "Pokedex",
            "description": "This is a modern and minimalist pokedex",
            "link": "https://github.com/NickMano/pokedex-react",
            "imageUrl": "/src/assets/static/pokedex/pokedex.png",
            "hero": "/src/assets/static/pokedex/hero.png",
            "initialImage": '/src/assets/static/pokedex/initialImage.png',
            "images": [
                '/src/assets/static/pokedex/image-3.png',
                '/src/assets/static/pokedex/image-1.png',
                '/src/assets/static/pokedex/image-4.png',
                '/src/assets/static/pokedex/image-2.png',,
                '/src/assets/static/pokedex/image-6.png',
            ]
        },
        {
            "title": "PlatziVideo",
            "link": "https://github.com/NickMano/platziVideo",
            "imageUrl": "/src/assets/static/platziVideo.png",
        },
        {
            "title": "Simon",
            "link": "https://github.com/NickMano/Simon",
            "imageUrl": "/src/assets/static/simon.png",
        }
    ],
    "games": [
        {
            "title": "TLON",
            "link": "https://github.com/NickMano/The-Legend-Of-Nickest",
            "imageUrl": "/src/assets/static/TLON.png",
        },
        {
            "title": "Nickest-Jump",
            "link": "https://github.com/NickMano/Nickest-Jump",
            "imageUrl": "/src/assets/static/NickestJump.png",
        },
        {
            "title": "Hangman-Pokemon",
            "link": "https://github.com/NickMano/Hangman-Pokemon",
            "imageUrl": "/src/assets/static/hangmanpkm.png",
        },
    ],
    "apps": [
        {
            "title": "wBooks-iOS",
            "link": "https://github.com/NickMano/wBooks-ios",
            "imageUrl": "/src/assets/static/wbooks.png",
        }
    ],
    "tools": [
        {
            "title": "Jira-To-Sheet",
            "link": "https://github.com/NickMano/JIRA-to-Sheet",
            "imageUrl": "/src/assets/static/python.png", 
        },
    ]
}

const store = createStore(reducer, initialState, composeEnhancers()) 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('app')
)