import { Container, Col, Row, Spinner, Alert, Form } from "react-bootstrap"
import { Component } from "react"
import { Link } from "react-router-dom"

class Search extends Component {
  state = {
    artists: [],
    albums: [],
    showSpinner: false,
    findError: false,
    searchQuery: "",
  }

  componentDidMount = () => {
    this.fetchResults()
  }

  fetchResults = async () => {
    try {
      this.setState({
        showSpinner: true,
      })

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          this.state.searchQuery
      )
      if (response.ok) {
        let data = await response.json()
        // let data = jsonData.data
        // console.log(data)
        // this.setState({ songs: data, findError: false, showSpinner: false })
        const artists = this.searchArtist(data, this.state.searchQuery)
        const albums = this.searchAlbum(data, this.state.searchQuery)
        this.setState({
          artists: artists,
          albums: albums,
          findError: false,
          showSpinner: false,
        })
      } else {
        this.setState({ findError: true, showSpinner: false })
      }
    } catch (error) {
      console.log(`${error} fetch failed`)
      this.setState({ findError: true, showSpinner: false })
    }
  }

  searchArtist = (obj, query) => {
    const searchedArtists = []
    const songsFound = obj.data
    songsFound.forEach((song) => {
      let songArtist = song.artist.name.toLowerCase()
      if (songArtist.includes(query)) {
        searchedArtists.push(song.artist)
      }
    })
    let idsArr = searchedArtists.map((a) => a.id)
    let uniqIds = [...new Set(idsArr)]
    let uniqueArtists = uniqIds.map((unId) =>
      searchedArtists.find((a) => a.id === unId)
    )
    return uniqueArtists
  }

  searchAlbum = (obj, query) => {
    const searchedAlbums = []
    const songsFound = obj.data
    songsFound.forEach((song) => {
      let songAlbum = song.album.title.toLowerCase()
      if (songAlbum.includes(query)) {
        searchedAlbums.push(song.album)
      }
    })
    let idsArr = searchedAlbums.map((a) => a.id)
    let uniqIds = [...new Set(idsArr)]
    let uniqueAlbums = uniqIds.map((unId) =>
      searchedAlbums.find((a) => a.id === unId)
    )
    return uniqueAlbums
  }

  onChangeFunction = (e) => {
    e.preventDefault()
    this.setState({ searchQuery: e.target.value }, () => this.fetchResults())
  }

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group className="mt-3">
              <svg
                className="mr-2 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <Form.Control
                style={{ display: "inline-block" }}
                type="text"
                placeholder="Search for Albums, Artists..."
                onChange={(e) => {
                  this.onChangeFunction(e)
                }}
              />
            </Form.Group>
          </Form>
        </Container>

        {this.state.findError && (
          <Alert variant="success">
            Uh Oh! We can't find what you're looking for.{" "}
          </Alert>
        )}

        {/* {this.state.showSpinner && (
          <Spinner
            style={{ marginLeft: "6px" }}
            animation="grow"
            variant="success"
          />
        )} */}
        <Container className="m-15 p-5" fluid>
          {this.state.artists.length > 0 && <h4>Artists</h4>}
          <Row>
            {this.state.artists.length > 0 &&
              this.state.artists.map((artist) => (
                <div>
                  <Col key={artist.id} xs={2} className="my-2">
                    <Link to={`/artist/${artist.id}`}>
                      <img
                        style={{ marginTop: "20px" }}
                        className="iconHover"
                        src={artist.picture}
                        alt=""
                      />
                      <div
                        style={{ width: "145px", marginBottom: "50px" }}
                        className="text-white albumSearch"
                      >
                        {artist.name}
                      </div>
                    </Link>
                  </Col>
                </div>
              ))}
          </Row>
          {this.state.albums.length > 0 && <h4>Albums</h4>}
          <Row>
            {this.state.albums.length > 0 &&
              this.state.albums.map((album) => (
                <div>
                  <Col key={album.id} xs={2} className="my-2">
                    <Link to={`/artist/${album.id}`}>
                      <img
                        style={{ marginTop: "20px" }}
                        className="iconHover"
                        src={album.cover}
                        alt=""
                      />
                      <div
                        style={{ width: "145px", marginBottom: "50px" }}
                        className="text-white albumSearch"
                      >
                        {album.title}
                      </div>
                    </Link>
                  </Col>
                </div>
              ))}
          </Row>
        </Container>
      </>
    )
  }
}

export default Search
