// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {iplTeamInfo} = props
  console.log(iplTeamInfo)
  const {id, name, teamImageUrl} = iplTeamInfo

  return (
    <div className="bg-team-info">
      <Link to={`/team-matches/${id}`} className="bg-link">
        <li className="bg-team-div">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p>{name}</p>
        </li>
      </Link>
    </div>
  )
}

export default TeamCard
