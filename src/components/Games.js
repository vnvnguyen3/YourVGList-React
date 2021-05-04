import React, { Component } from 'react';
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
                <h3>{game.title}</h3>
                <p>{game.platform}</p>
                <p>{game.description}</p>
                <p>{game.releaseDate}</p>
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