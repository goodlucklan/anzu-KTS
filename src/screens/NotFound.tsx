// src/components/NotFound.tsx
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        404 - Página no encontrada
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/List"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
};
