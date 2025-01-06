import { useTournamentStore } from "../store/globalStore";

export const ListTournament = () => {
  const { submittedForms }: any = useTournamentStore();

  // Crear lista de emparejamientos únicos basados en konamiId
  const pairs = [];
  const usedIds = new Set();

  // Emparejar jugadores
  for (let i = 0; i < submittedForms.length; i++) {
    const player1 = submittedForms[i];

    // Si el jugador ya está emparejado, saltarlo
    if (usedIds.has(player1.konamiId)) continue;

    let paired = false;
    for (let j = i + 1; j < submittedForms.length; j++) {
      const player2 = submittedForms[j];

      // Emparejar si el jugador2 no está ya emparejado
      if (!usedIds.has(player2.konamiId)) {
        pairs.push({
          mesa: pairs.length + 1,
          player1: player1.name,
          player2: player2.name,
        });
        usedIds.add(player1.konamiId);
        usedIds.add(player2.konamiId);
        paired = true;
        break;
      }
    }

    // Si no se encontró pareja, agregar con N/A
    if (!paired) {
      pairs.push({
        mesa: pairs.length + 1,
        player1: player1.name,
        player2: "N/A",
      });
      usedIds.add(player1.konamiId);
    }
  }
  return (
    <div className="relative overflow-x-auto bg-zinc-900 h-full w-full">
      <table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Mesa
            </th>
            <th scope="col" className="px-6 py-3">
              Jugador 1
            </th>
            <th scope="col" className="px-6 py-3">
              Jugador 2
            </th>
            <th scope="col" className="px-6 py-3">
              Resultado
            </th>
          </tr>
        </thead>
        <tbody>
          {pairs.map((pair) => (
            <tr
              key={pair.mesa}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            >
              <th scope="row" className="px-6 py-4">
                {pair.mesa}
              </th>
              <td className="px-6 py-4">{pair.player1}</td>
              <td className="px-6 py-4">{pair.player2}</td>
              <td className="px-6 py-4"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
