// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, iplTeamsData: []}

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const convertedData = teams.map(eachItem => ({
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
      name: eachItem.name,
    }))
    this.setState({isLoading: false, iplTeamsData: convertedData})
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  renderTeamsList = () => {
    const {iplTeamsData} = this.state

    return (
      <ul className="ul-container">
        {iplTeamsData.map(eachTeam => (
          <TeamCard iplTeamInfo={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, iplTeamsData} = this.state

    console.log(isLoading)
    console.log(iplTeamsData)

    return (
      <div className="bg-home">
        <div className="bg-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="bg-ipl-logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamsList()}
      </div>
    )
  }
}

export default Home
