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
            "title": "Simon Says",
            "description": "Memorize the sequence to win",
            "link": "https://nicomano-simon.netlify.app/",
            "imageUrl": "/src/assets/static/simon/simon.webp",
            "hero": "/src/assets/static/simon/hero-1.webp",
            "initialImage": '/src/assets/static/simon/initialImage.webp',
            "images": [
                '/src/assets/static/simon/image-1.webp',
                '/src/assets/static/simon/image-2.webp',
                '/src/assets/static/simon/image-3.webp',
                '/src/assets/static/simon/image-4.webp',
            ]
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
            "hero": "/src/assets/static/nickest-jump/hero.webp",
            "initialImage": '/src/assets/static/nickest-jump/initialImage.webp',
            "images": [
                '/src/assets/static/nickest-jump/image-4.webp',
                '/src/assets/static/nickest-jump/image-2.webp',
                '/src/assets/static/nickest-jump/image-3.webp',
                '/src/assets/static/nickest-jump/image-1.webp',
            ]
        },
        {
            "title": "Ping-Pong",
            "description": "The classic game of Ping-Pong now on web",
            "link": "https://nicomano.itch.io/ping-pong",
            "imageUrl": "/src/assets/static/ping-pong/ping-pong.webp",
            "hero": "/src/assets/static/ping-pong/hero.webp",
            "initialImage": '/src/assets/static/ping-pong/initialImage.webp',
            "images": [
                '/src/assets/static/ping-pong/image-3.webp',
                '/src/assets/static/ping-pong/image-1.webp',
                '/src/assets/static/ping-pong/image-2.webp',
            ]
        },
        {
            "title": "Hangman-Pokemon",
            "link": "https://github.com/NickMano/Hangman-Pokemon",
            "description": "We must guess the pokemon game. Only the 1 generation",
            "imageUrl": "/src/assets/static/hangmanpkm/hangmanpkm.webp",
            "hero": "/src/assets/static/hangmanpkm/hero.webp",
            "initialImage": '/src/assets/static/hangmanpkm/initialImage.webp',
            "images": []
        },
    ],
    "others": [
        {
            "title": "wBooks-iOS",
            "link": "https://github.com/NickMano/wBooks-ios",
            "imageUrl": "/src/assets/static/wbooks.webp",
        },
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