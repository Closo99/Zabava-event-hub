'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import './venues.css' 
import Footer from '../components/Footer';
import PrimaryAppBar from '../components/AppBar';
import RenderGroup from '../components/RenderGroups';
import LocalList from '../components/LocalList';
import Image from 'next/image';

export default function Venues() {
  const router = useRouter()

  // Estado para armazenar o bairro selecionado
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null); // Corrigindo o tipo de estado


  // Placeholders
  const localData = [
    {
      nome: "Local A",
      bairro: "Ecoville",
      endereco: "Endereço 1",
      capacidade: 100,
      rank: 4,
      descricao: "Descrição do Local A"
    },
    {
      nome: "Local B",
      bairro: "Alto da Glória",
      endereco: "Endereço 2",
      capacidade: 50,
      rank: 5,
      descricao: "Descrição do Local B"
    },
    {
      nome: "Local C",
      bairro: "Boa Vista",
      endereco: "Endereço 3",
      capacidade: 80,
      rank: 3,
      descricao: "Descrição do Local C"
    }
  ];

  const hasNoResults = localData.filter(local => !selectedNeighborhood || local.bairro === selectedNeighborhood).length === 0;

  return (
    <div className='venues-all'>
      <PrimaryAppBar />
      <div className='venues-body'>
        {/* Passando corretamente a propriedade onNeighborhoodSelect */}
        <RenderGroup onNeighborhoodSelect={setSelectedNeighborhood} />
        {/* Renderizando LocalList com dados filtrados pelo bairro selecionado */}
        {hasNoResults ? ( // If there is no results, shows the Image
          <Image src="/not-found.png"
          width={300}
          height={300}
          alt="Not found"
          style={{ maxWidth: '300' }} />
        ) : (
          <LocalList data={localData.filter(local => !selectedNeighborhood || local.bairro === selectedNeighborhood)} />
        )}
      </div>
      <Footer />
    </div>
  );
}
