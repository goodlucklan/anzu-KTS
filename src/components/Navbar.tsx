export const Navbar = () => {
  return (
    <div className="bg-gray-800 w-full overflow-hidden">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute">
          <span className="absolute -inset-0.5" />
          <span className="sr-only text-white">Open main menu</span>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center">
            <span className="text-cyan-50 p-2">Anzu</span>
          </div>
        </div>
      </div>
    </div>
  );
};
