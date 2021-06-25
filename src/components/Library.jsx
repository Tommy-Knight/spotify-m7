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
  setPlaylist: (song, album, cover) => {
    dispatch(getPlaylistAction(song, album, cover))
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
      <div style={{ marginBottom: "200px" }}>
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
                  <p className="fixLink">{this.state.artist.name}</p>
                </Link>
                <button className="btn btn-success btn-n">PLAY</button>
                <p>
                  {this.state.album.fans} Fans • {this.state.album.nb_tracks}{" "}
                  SONGS
                </p>
                <div></div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 tracklist-n">
              <div className="track-container">
                <ul className="">
                  {this.state.tracks.map((track) => {
                    return (
                      <p
                        className="pointer"
                        onClick={() =>
                          this.props.setPlaylist(
                            track,
                            this.state.tracks,
                            this.state.album.cover
                          )
                        }
                      >
                        <span className="tracklist">
                          <b>
                            <PlayCircle className="iconHover mr-2" size={16} />
                            {track.title_short}
                          </b>
                          <p style={{ color: "grey", fontSize: "12px" }}>
                            {Math.floor(track.duration / 60)}m
                            {track.duration % 60}s{" "}
                            {this.props.favourites.songs
                              .map((s) => s.id)
                              .some((id) => id === track.id) && (
                              <HeartFill
                                className="iconHover ml-1 pointer"
                                size={16}
                                onClick={() =>
                                  this.props.removeFromFavourites(track)
                                }
                              />
                            )}
                            {!this.props.favourites.songs
                              .map((s) => s.id)
                              .some((id) => id === track.id) && (
                              <Heart
                                className="iconHover ml-1 pointer"
                                size={16}
                                onClick={() =>
                                  this.props.addToFavourites(track)
                                }
                              />
                            )}
                          </p>
                        </span>
                      </p>
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
