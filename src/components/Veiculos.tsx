import axios from 'axios'
import { useState } from 'react';
import { CardNav, CardBody } from './styles';

import SandCrawler from '../assets/sandcrawler.jpg'
import t16 from '../assets/t16.jpg'

interface Vehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
  }

  const imageMap: Record<string, string> = {
    "Sand Crawler": SandCrawler,
    "T-16 skyhopper": t16
  }

  export function Veiculos() {
    const [veiculos, setVeiculos] = useState<Vehicle[]>([]);

    axios.get('https://swapi.dev/api/vehicles/')
    .then(response => {
        setVeiculos(response.data.results)
        console.log(response.data)
    })
    .catch(error => {
        console.error(error);
    })
    return (
    <>
        <div style={{color: 'red'}}>Escolha sua nave</div>
        <CardBody>
            {veiculos.map(veiculo => {
                const imagem = imageMap[veiculo.name];
                return (
                    <CardNav key={veiculo.url}>
                        <h3>{veiculo.name}</h3>
                        {imagem && <img src={imagem} alt={veiculo.name}/>}
                       
                    </CardNav>
                );
        })}
        </CardBody>
    </>
    )
  }