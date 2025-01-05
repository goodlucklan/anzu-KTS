import { useTournamentStore } from "../store/globalStore";

export const ListTournament = () => {
  const { submittedForms }: any = useTournamentStore();
  console.log("sub", submittedForms);
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
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
            <th scope="row" class="px-6 py-4">
              1
            </th>
            <td class="px-6 py-4">Jose Maria</td>
            <td class="px-6 py-4">Gian franco Pariona</td>
            <td class="px-6 py-4"></td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
            <th scope="row" class="px-6 py-4">
              2
            </th>
            <td class="px-6 py-4">Andre Pando</td>
            <td class="px-6 py-4">Carlos Rodriguez</td>
            <td class="px-6 py-4"></td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
            <th scope="row" class="px-6 py-4">
              3
            </th>
            <td class="px-6 py-4">Santiago Sturmo</td>
            <td class="px-6 py-4">Luis Roman</td>
            <td class="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
