// src/screens/CardScreen.tsx
import React, { useState, useEffect } from "react";
import InfoCard from "../components/InfoCard";
import Modal from "../components/ModalTournament";
import {
  getAllTournaments,
  insertPlayerTournament,
} from "../helpers/tournament.player";
import { useAuthStore } from "../store/authStore";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState<CardData | null>(
    null
  );
  const { user } = useAuthStore();

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

  const handleCardClick = (card: CardData) => {
    setSelectedTournament(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTournament(null);
  };

  const handleConfirm = async () => {
    if (selectedTournament) {
      await insertPlayerTournament({
        konamiid: user?.konamiid,
        name: user?.name,
        idtournament: selectedTournament.id,
      });
    }
    handleCloseModal();
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
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
