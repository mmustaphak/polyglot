export default function Header() {
  return (
    <div className={`w-full bg-[url(/worldmap.png)]`}>
      <div className="flex justify-center gap-4 px-8 py-10">
        <img className="max-w-12" src="/parrot.png" alt="" />
        <div>
          <p className="font-big-shoulders text-5xl font-extrabold text-[#32CD32]">
            Polyglot
          </p>
          <p className="mt-2 w-max font-semibold text-white">
            Perfect Translation Every Time
          </p>
        </div>
      </div>
    </div>
  );
}
