import Ranking from "./leaderboard.png";
import Setting from "./settings.png";

const Header = () => {
  return (
    <header className="mx-auto flex h-[72px] w-auto flex-row items-center justify-between border-b-2 border-gray-500 px-7 py-3 text-center">
      <img className="h-7 w-7 cursor-pointer" src={Ranking}></img>
      <h1 className="cursor-pointer font-serif text-4xl text-white">Wordle</h1>
      <img className="h-7 w-7 cursor-pointer" src={Setting}></img>
    </header>
  );
};

export default Header;
