import SelectBoard from "./SelectBoard";

const Navbar = () => {
  return (
    <nav className="w-full h-14 px-10 flex gap-20 items-center justify-between bg-neutral-800">
      <section className="flex gap-20">
        <span className="font-bold text-2xl text-neutral-400">Logo</span>
        <SelectBoard></SelectBoard>
      </section>
      <section className="flex gap-10">
        <div className="text-neutral-400">Board</div>
        <div className="text-neutral-400">Calendar</div>
        <div className="text-neutral-400">Cuenta</div>
      </section>
    </nav>
  );
};

export default Navbar;
