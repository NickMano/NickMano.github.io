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
            "link": "https://nicomano-pokedex.netlify.app/",
            "imageUrl": "/src/assets/static/pokedex/pokedex.webp",
            "hero": "/src/assets/static/pokedex/hero.webp",
            "initialImage": '/src/assets/static/pokedex/initialImage.webp',
            "images": [
                '/src/assets/static/pokedex/image-3.webp',
                '/src/assets/static/pokedex/image-1.webp',
                '/src/assets/static/pokedex/image-4.webp',
                '/src/assets/static/pokedex/image-2.webp',
                '/src/assets/static/pokedex/image-6.webp',
            ]
        },
        {
            "title": "PlatziVideo",
            "link": "https://github.com/NickMano/platziVideo",
            "imageUrl": "/src/assets/static/platziVideo.webp",
        },
        {
            "title": "Simon",
            "link": "https://github.com/NickMano/Simon",
            "imageUrl": "/src/assets/static/simon.webp",
        }
    ],
    "games": [
        {
            "title": "TLON",
            "link": "https://github.com/NickMano/The-Legend-Of-Nickest",
            "imageUrl": "/src/assets/static/TLON.webp",
        },
        {
            "title": "Nickest-Jump",
            "description": "Infinite runner like Chrome Dinosaur",
            "link": "https://nicomano.itch.io/nickest-jump",
            "imageUrl": "/src/assets/static/nickest-jump/NickestJump.webp",
            "hero": "/src/assets/static/nickest-jump/hero.png",
            "initialImage": '/src/assets/static/nickest-jump/initialImage.png',
            "images": [
                '/src/assets/static/nickest-jump/image-4.png',
                '/src/assets/static/nickest-jump/image-2.png',
                '/src/assets/static/nickest-jump/image-3.png',
                '/src/assets/static/nickest-jump/image-1.png',
            ]
        },
        {
            "title": "Ping-Pong",
            "description": "The classic game of Ping-Pong now on web",
            "link": "https://nicomano.itch.io/ping-pong",
            "imageUrl": "/src/assets/static/ping-pong/ping-pong.png",
            "hero": "/src/assets/static/ping-pong/hero.png",
            "initialImage": '/src/assets/static/ping-pong/initialImage.png',
            "images": [
                '/src/assets/static/ping-pong/image-3.png',
                '/src/assets/static/ping-pong/image-1.png',
                '/src/assets/static/ping-pong/image-2.png',
            ]
        },
        {
            "title": "Hangman-Pokemon",
            "link": "https://github.com/NickMano/Hangman-Pokemon",
            "imageUrl": "/src/assets/static/hangmanpkm.webp",
        },
    ],
    "apps": [
        {
            "title": "wBooks-iOS",
            "link": "https://github.com/NickMano/wBooks-ios",
            "imageUrl": "/src/assets/static/wbooks.webp",
        }
    ],
    "tools": [
        {
            "title": "Jira-To-Sheet",
            "link": "https://github.com/NickMano/JIRA-to-Sheet",
            "imageUrl": "/src/assets/static/python.webp", 
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