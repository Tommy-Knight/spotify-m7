import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
  addSongToFavourites,
  removeSongFromFavourites,
  getPlaylistAction,
} from "../actions"

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

class Library extends Component {
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
        `https://striveschool-api.herokuapp.com/api/deezer/album/${this.props.match.params.id}`
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
    return (
      <div>
        <div className="container-fluid m-0 p-0">
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 album-n">
              <div className="container m-0 p-1">
                <img
                  src={this.state.album.cover_medium}
                  id="img-album-n"
                  alt=""
                />
                <h4>{this.state.album.title}</h4>
                <Link to={`/artist/${this.state.artist.id}`}>
                  <p>{this.state.artist.name}</p>
                </Link>
                <button className="btn btn-success btn-n">PLAY</button>
                <p>
                  {this.state.album.fans} Fans • {this.state.album.nb_tracks}{" "}
                  SONGS
                </p>
                <div>
                  <span className="fa-stack mb-2" id="toggle">
                    <i className="far fa-heart fa-stack-1x" />
                    <i className="fas fa-heart fa-stack-1x" />
                  </span>
                  <span>
                    <i className="fa fa-ellipsis-h mb-2" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 tracklist-n">
              <div className="track-container">
                <ul className="fa-ul">
                  {this.state.tracks.map((track) => {
                    return (
                      <li
                        onClick={() =>
                          this.props.setPlaylist(track, this.state.tracks)
                        }
                      >
                        {track.title}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
