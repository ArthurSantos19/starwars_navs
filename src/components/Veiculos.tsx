import axios from 'axios'
import { MouseEventHandler, useEffect, useState } from 'react';
import { CardNav, CardBody, MainContainer } from './styles';
import { makeObservable, observable, action } from 'mobx';

import SandCrawler from '../assets/sandcrawler.jpg'
import t16 from '../assets/t16.jpg'
import x34 from '../assets/x-34.png'
import tie from '../assets/tie.png'
import { Modal } from './Modal/Modal';
import '../index.css'

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

  export interface ModalProps {
    closeModal: () => void;
    vehicle: Vehicle | null;
  }

  export const imageMap: Record<string, string> = {
    "Sand Crawler": SandCrawler,
    "T-16 skyhopper": t16,
    "X-34 landspeeder": x34,
    "TIE bomber": tie
  }

  class VeiculosStore {
    veiculos: Vehicle[]= [];

    constructor() {
        makeObservable(this, {
            veiculos: observable,
            setVeiculos: action,
        });
    }

    setVeiculos(veiculos: Vehicle[]) {
        this.veiculos = veiculos
    }
  }

  const veiculosStore = new VeiculosStore;

  export function Veiculos() {
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

    const fetchVeiculos = () => {
      setLoading(true);
      const apiUrl = 'https://swapi.dev/api/vehicles/';
      const uniqueKey = new Date().getTime();
      const urlWithKey = `${apiUrl}?key=${uniqueKey}`;

      axios
        .get(urlWithKey)
        .then(response => {
        veiculosStore.setVeiculos(response.data.results);
        setLoading(false);
        console.log(response.data);
        })
        .catch(error => {
        console.error(error);
        setLoading(false);
      });
    }

    useEffect(() => {
      fetchVeiculos();
    }, []);

    if(loading) {
        return <div>Loading...</div>
    }

    const handleCardClick: MouseEventHandler<HTMLDivElement> = (event) => { // Ajuste o tipo da função
      if (event.currentTarget instanceof HTMLElement) {
        const veiculoName = event.currentTarget.getAttribute('data-veiculo-name');
        const veiculo = veiculosStore.veiculos.find((veiculo) => veiculo.name === veiculoName);
        if (veiculo) {
          setSelectedVehicle(veiculo);
          setModalOpen(true);
        }
      }
    };

    const closeModal = () => {
    setModalOpen(false);
    };

    return (
    <MainContainer>
        {modalOpen && <Modal closeModal={closeModal} vehicle={selectVehicle}/>}
        <CardBody>
            {veiculosStore.veiculos.map(veiculo => {
                const imagem = imageMap[veiculo.name];
                return (
                    <CardNav key={veiculo.url} onClick={handleCardClick} data-veiculo-name={veiculo.name}>
                        <h3>{veiculo.name}</h3>
                        {imagem && <img src={imagem} alt={veiculo.name}/>}
                       
                    </CardNav>
                );
        })}
        </CardBody>
    </MainContainer>
    )
  }