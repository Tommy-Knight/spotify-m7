import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
	addSongToFavourites,
	removeSongFromFavourites,
	getPlaylistAction,
} from "../actions"
import { PlayCircle, Heart, HeartFill } from "react-bootstrap-icons"

const mapStateToProps = (state) => ({
	...state,
})

const mapDispatchToProps = (dispatch) => ({
	addToFavourites: (song) => {
		dispatch(addSongToFavourites(song))
	},
	removeFromFavourites: (song) => {
		dispatch(removeSongFromFavourites(song))
	},
	setPlaylist: (song, album) => {
		dispatch(getPlaylistAction(song, album))
	},
})

class Favourites extends Component {
	state = {
		loading: false,
		id: this.props.match.params.id,
		album: {},
		artist: {},
		tracks: [],
	}

	fetchAll = async () => {
		try {
			this.setState({ loading: true })
			const resp = await fetch(
				`https://striveschool-api.herokuapp.com/api/deezer/album/356130`
			)
			const album = await resp.json()
			this.setState({ loading: false })
			this.setState({ album })
			this.setState({ artist: album.artist })
			this.setState({ tracks: album.tracks.data })
			console.log(
				`fetch returns`,
				this.state.album,
				"tracks",
				this.state.tracks
			)
		} catch (error) {
			console.log(error)
		}
	}
	componentDidMount = () => {
		this.fetchAll()
	}

	render() {
		return (<>
			<h3 className="p-5 text-center"> Here's your Favourite Tracks! <br/> Oh my, what excellent taste you have.. {this.props.state}</h3>
		
        <div className="track-container">
                <ul className="">
                  {this.state.tracks.map((track) => {
                    return (
                      <p className="pr-5">
                        <span className="tracklist">
                          <b>
                            <PlayCircle className="iconHover mr-2" size={16} />
                            {track.title_short}
                          </b>
                          <p style={{ color: "grey", fontSize: "12px" }}>
                            <Heart className="iconHover mr-2" size={16} />
                            {Math.floor(track.duration / 60)}m
                            {track.duration % 60}s{" "}
                            {/* <HeartFill className="iconHover ml-1" size={16} /> */}
                          </p>
                        </span>
                      </p>
                    )
                  })}
                </ul>
              </div>
              </>
            )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
