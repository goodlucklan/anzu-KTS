import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { searchPlayer } from "../helpers/search.player.ts";

export const CreateTournament = () => {
  let navigate = useNavigate();
  const [namePlayer, setNamePlayer] = useState("");
  const [listPlayers, setListPlayers] = useState([]);

  useEffect(() => {}, [listPlayers]);

  return (
    <div className="mt-12 w-full">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <div className="p-4">
            <h1 className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-950 text-center">
              Enter the users
            </h1>
            <div className="mb-5">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Luis Roman"
                className="text-sm rounded-lg border block w-full p-2.5"
                value={namePlayer}
                onChange={(e: any) => setNamePlayer(e?.target?.value)}
                required
              />
            </div>
            <button
              onClick={() => searchPlayer(namePlayer, setListPlayers)}
              className="mb-5 bg-gray-700 hover:bg-gray-900 text-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Search
            </button>
            <button
              type="button"
              className="mb-5 bg-gray-700 hover:bg-gray-900 text-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              // disabled={submittedForms.length < 5}
              // className={`text-white bg-gray-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${
              //   submittedForms.length < 5
              //     ? "opacity-50 cursor-not-allowed"
              //     : "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              // }`}
              onClick={() => navigate("/ListTournament")}
            >
              Send the Tournament
            </button>
          </div>
        </div>
        <div>
          <div className="p-4">
            <h1 className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-950 text-center">
              Results
            </h1>
            <table className="table-fixed w-full mt-12">
              <thead className="bg-gray-700 text-white">
                <tr className="text-lg font-medium">
                  <th>Player</th>
                  <th>Konami Id</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {listPlayers.map((valuePlayers: any) => (
                  <tr key={valuePlayers.id}>
                    <td class="px-4 py-2">{valuePlayers.name}</td>
                    <td class="px-4 py-2">{valuePlayers.konamiid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-6 bg-gray-700 hover:bg-gray-900 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center w-64 align-middle">
              Register
            </button>
          </div>
        </div>
        <div>
          <div className="p-4">
            <h1 className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-950 text-center">
              List of players
            </h1>
            <table className="table-fixed w-full mt-12">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th>Player</th>
                  <th>Konami Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2">Santiago Sturmo</td>
                  <td class="px-4 py-2">0410850489</td>
                </tr>
                <tr>
                  <td class="px-4 py-2">Carlos Rodriguez</td>
                  <td class="px-4 py-2">0410850490</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
