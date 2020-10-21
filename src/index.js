import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import App from './routes/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const imageRoute = "/src/images/"
const initialState = {
    "websites": [
        {
            "title": "Rick and Morty - Interdimesional Conference",
            "description": "This project is a training of react using hooks and react router",
            "link": "https://github.com/NickMano/training-react--rick-and-morty-interdimensional-conf",
            "imageUrl": `${imageRoute}rick-and-morty-conf/cover.png`,
            "hero": `${imageRoute}rick-and-morty-conf/hero.png`,
            "initialImage": `${imageRoute}rick-and-morty-conf/initialImage.png`,
            "images": [
                `${imageRoute}rick-and-morty-conf/image-1.png`,
                `${imageRoute}rick-and-morty-conf/image-2.png`,
                `${imageRoute}rick-and-morty-conf/image-3.png`,
            ]
        },
        {
            "title": "Pokedex",
            "description": "This is a modern and minimalist pokedex",
            "link": "https://nicomano-pokedex.netlify.app/",
            "imageUrl": `${imageRoute}pokedex/pokedex.webp`,
            "hero": `${imageRoute}pokedex/hero.webp`,
            "initialImage": `${imageRoute}pokedex/initialImage.webp`,
            "images": [
                `${imageRoute}pokedex/image-3.webp`,
                `${imageRoute}pokedex/image-1.webp`,
                `${imageRoute}pokedex/image-4.webp`,
                `${imageRoute}pokedex/image-2.webp`,
                `${imageRoute}pokedex/image-6.webp`,
            ]
        },
        {
            "title": "PlatziVideo",
            "link": "https://github.com/NickMano/platziVideo",
            "imageUrl": `${imageRoute}platziVideo.webp`,
        },
        {
            "title": "Simon Says",
            "description": "Memorize the sequence to win",
            "link": "https://nicomano-simon.netlify.app/",
            "imageUrl": `${imageRoute}simon/simon.webp`,
            "hero": `${imageRoute}simon/hero-1.webp`,
            "initialImage": `${imageRoute}simon/initialImage.webp`,
            "images": [
                `${imageRoute}simon/image-1.webp`,
                `${imageRoute}simon/image-2.webp`,
                `${imageRoute}simon/image-3.webp`,
                `${imageRoute}simon/image-4.webp`,
            ]
        }
    ],
    "games": [
        {
            "title": "The-Legend-Of-Nickest",
            "link": "https://github.com/NickMano/The-Legend-Of-Nickest",
            "imageUrl": `${imageRoute}tlon/TLON.webp`,
            "description": "Game of platform and action, inspired by Mario and Zelda",
            "hero": `${imageRoute}tlon/hero.webp`,
            "initialImage": `${imageRoute}tlon/initialImage.webp`,
            "images": [
                `${imageRoute}tlon/image-1.webp`,
                `${imageRoute}tlon/image-2.webp`,
                `${imageRoute}tlon/image-4.webp`,
            ]
        },
        {
            "title": "Nickest-Jump",
            "description": "Infinite runner like Chrome Dinosaur",
            "link": "https://nicomano.itch.io/nickest-jump",
            "imageUrl": `${imageRoute}nickest-jump/NickestJump.webp`,
            "hero": `${imageRoute}nickest-jump/hero.webp`,
            "initialImage": `${imageRoute}nickest-jump/initialImage.webp`,
            "images": [
                `${imageRoute}nickest-jump/image-4.webp`,
                `${imageRoute}nickest-jump/image-2.webp`,
                `${imageRoute}nickest-jump/image-3.webp`,
                `${imageRoute}nickest-jump/image-1.webp`,
            ]
        },
        {
            "title": "Ping-Pong",
            "description": "The classic game of Ping-Pong now on web",
            "link": "https://nicomano.itch.io/ping-pong",
            "imageUrl": `${imageRoute}ping-pong/ping-pong.webp`,
            "hero": `${imageRoute}ping-pong/hero.webp`,
            "initialImage": `${imageRoute}ping-pong/initialImage.webp`,
            "images": [
                `${imageRoute}ping-pong/image-3.webp`,
                `${imageRoute}ping-pong/image-1.webp`,
                `${imageRoute}ping-pong/image-2.webp`,
            ]
        },
        {
            "title": "Hangman-Pokemon",
            "link": "https://github.com/NickMano/Hangman-Pokemon",
            "description": "We must guess the pokemon game. Only the 1 generation",
            "imageUrl": `${imageRoute}hangmanpkm/hangmanpkm.webp`,
            "hero": `${imageRoute}hangmanpkm/hero.webp`,
            "initialImage": `${imageRoute}hangmanpkm/initialImage.webp`,
            "images": []
        },
    ],
    "others": [
        {
            "title": "wBooks-iOS",
            "link": "https://github.com/NickMano/wBooks-ios",
            "imageUrl": `${imageRoute}wbooks/wbooks.webp`,
            "description": "wBooks is a test application that manages book reservations.",
            "hero": `${imageRoute}wbooks/hero.webp`,
            "initialImage": `${imageRoute}wbooks/initialImage.webp`,
            "images": [
                `${imageRoute}wbooks/image-1.webp`,
            ]
        },
        {
            "title": "Jira-To-Sheet",
            "link": "https://github.com/NickMano/JIRA-to-Sheet",
            "imageUrl": `${imageRoute}python.webp`, 
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