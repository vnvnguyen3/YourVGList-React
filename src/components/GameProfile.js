import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGame } from '../actions/gameActions';

class GameProfile extends Component {
    componentDidMount() {
        const gameId = this.props.match.params.gameId;
        this.props.fetchGame(gameId);
    }
    render() {
        const game = this.props.game;
        return (
            <div>
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <p>Platform: {game.platform}</p>
                <p>Developer: {game.developer}</p>
                <p>Publisher: {game.publisher}</p>
                <p>Release Date: {game.releaseDate}</p>
                <p>Genre: {game.genre}</p>
                <p>ESRB: {game.esrb}</p>
            </div>
        )
    }
}

GameProfile.propTypes = {
    fetchGame: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    game: state.games.game,
})

export default withRouter(connect(mapStateToProps, {fetchGame})(GameProfile));