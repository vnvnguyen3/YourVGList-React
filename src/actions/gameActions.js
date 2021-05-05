import { FETCH_GAMES, FETCH_GAME, NEW_GAME } from './types';

export const fetchGames = () => dispatch => {
    fetch("http://localhost:8080/games")
        .then(res => res.json())
        .then(games => dispatch({
            type: FETCH_GAMES,
            payload: games
        }));
}

export const fetchGame = (gameId) => dispatch => {
    fetch(`http://localhost:8080/games/${gameId}`)
        .then(res => res.json())
        .then(game => dispatch({
            type: FETCH_GAME,
            payload: game
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