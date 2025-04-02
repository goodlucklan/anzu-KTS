// src/screens/CardScreen.tsx
import React, { useState, useEffect } from "react";
import InfoCard from "../components/InfoCard";
import Modal from "../components/ModalTournament"; // Importa el nuevo componente
import { getAllTournaments } from "../helpers/Tournament.player";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const CardScreen: React.FC = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal
  const [selectedTournament, setSelectedTournament] = useState<CardData | null>(
    null
  ); // Torneo seleccionado

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const tournaments = await getAllTournaments();
        const transformedData: CardData[] = tournaments.data.map(
          (tournament: any) => ({
            id: tournament.id,
            title: tournament.name,
            description: `Participantes: ${
              tournament.participants || "N/A"
            } / Máximo: ${tournament.maxPlayers}`,
            imageUrl: "https://i.imgur.com/vsbc8RB.jpeg",
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
  }, []);

  // Función para abrir el modal al hacer clic en una card
  const handleCardClick = (card: CardData) => {
    setSelectedTournament(card);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTournament(null);
  };

  // Función para confirmar el registro
  const handleConfirm = () => {
    if (selectedTournament) {
      console.log(`Registrado en el torneo: ${selectedTournament.title}`);
      // Aquí puedes agregar la lógica para registrar al usuario en el torneo
      // Por ejemplo, una llamada a un endpoint con axios
    }
    handleCloseModal();
  };

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
        {cardsData.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className="cursor-pointer"
          >
            <InfoCard
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        tournamentName={selectedTournament?.title || ""}
      />
    </div>
  );
};

export default CardScreen;
