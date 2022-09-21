import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    // const { name, image } = Planets;
    const nome = Planets.map((element) => element.name);
    const imagem = Planets.map((element) => element.image);
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        <PlanetCard planetName={ nome } planetImage={ imagem } />
        <PlanetCard planetName={ nome } planetImage={ imagem } />
        <PlanetCard planetName={ nome } planetImage={ imagem } />
        <PlanetCard planetName={ nome } planetImage={ imagem } />
        <PlanetCard planetName={ nome } planetImage={ imagem } />
        <PlanetCard planetName={ nome } planetImage={ imagem } />
        <PlanetCard planetName={ nome } planetImage={ imagem } />
        <PlanetCard planetName={ nome } planetImage={ imagem } />
      </div>
    );
  }
}

export default SolarSystem;
