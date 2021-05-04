import { FETCH_GAMES, NEW_GAME } from './types';

export const fetchGames = () => dispatch => {
    fetch("http://localhost:8080/games")
        .then(res => res.json())
        .then(games => dispatch({
            type: FETCH_GAMES,
            payload: games
        }));
}

export const createGame = (gameData) => dispatch => {
    fetch('http://localhost:8080/add/game', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    })
        .then(res => res.json())
        .then(game => dispatch({
            type: NEW_GAME,
            payload: game
        }))
}