import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGames } from '../actions/gameActions';

class Games extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }

    render() {
        const gameItems = this.props.games.map(game => (
            <div key={game.id}>
                <Link to={`/games/${game.id}`}>
                    {game.title}
                </Link>
            </div>
        ));
        return (
            <div>
                <h1>Games</h1>
                {gameItems}
            </div>
        )
    }
}

Games.propTypes = {
    fetchGames: PropTypes.func.isRequired,
    games: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    games: state.games.games,
})

export default connect(mapStateToProps, {fetchGames})(Games);