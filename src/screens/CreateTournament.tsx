import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  konamiId: string;
  name: string;
};

export const CreateTournament = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [submittedForms, setSubmittedForms] = useState<FormData[]>([]);

  const onSubmit = (form: FormData) => {
    setSubmittedForms((prev) => [...prev, form]);
    reset();
  };

  return (
    <div className="mt-12 align-middle">
      <h1 className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-950 text-center">
        Enter the users
      </h1>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950"
          >
            Your konami ID
          </label>
          <input
            {...register("konamiId")}
            type="text"
            id="konamiId"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0410850488"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950"
          >
            Your name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Luis Roman"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <button
          type="button"
          disabled={submittedForms.length < 5}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${
            submittedForms.length < 5
              ? "opacity-50 cursor-not-allowed"
              : "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }`}
          onClick={() => alert(JSON.stringify(submittedForms))}
        >
          Send the Tournament
        </button>
      </form>
    </div>
  );
};
