import { useTournamentStore } from "../store/globalStore";

export const ListTournament = () => {
  const { submittedForms }: any = useTournamentStore();
  console.log("submittedForms", submittedForms);
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
          {submittedForms.map((form: any, index: any): any => (
            <tr
              key={form.konamiId}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            >
              <th scope="row" className="px-6 py-4">
                {index + 1}
              </th>
              <td className="px-6 py-4">{form.name}</td>
              <td className="px-6 py-4">
                {index + 1 < submittedForms.length
                  ? submittedForms[index + 1]?.name
                  : "N/A"}
              </td>
              <td className="px-6 py-4"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
