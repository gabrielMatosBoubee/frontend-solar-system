import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missão1">
        <Title headline="Missões" />
        <div className="missão">
          {missions
            .map((element) => (<MissionCard
              key={ element.name }
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
