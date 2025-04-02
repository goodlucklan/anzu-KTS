import React, { useState, useEffect } from "react";
import InfoCard from "../components/InfoCard";
import { getAllTournaments } from "../helpers/Tournament.player";

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

const CardScreen: React.FC = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [error, setError] = useState<string | null>(null); // Para manejar errores

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const tournaments = await getAllTournaments();
        // Transformar los datos del endpoint a la estructura de cardsData
        const transformedData: CardData[] = tournaments.data.map(
          (tournament: any) => ({
            title: tournament.name,
            description: `Participantes: ${
              tournament.participants || "N/A"
            } / Máximo: ${tournament.maxPlayers}`,
            imageUrl: "https://i.imgur.com/vsbc8RB.jpeg", // Imagen fija
          })
        );
        setCardsData(transformedData);
      } catch (err) {
        setError("Error al cargar los torneos");
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []); // Array vacío para que se ejecute solo al montar el componente

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-800">Cargando torneos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Pantalla de Cards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <InfoCard
            key={index} // Podrías usar tournament.id si prefieres una clave única
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CardScreen;
