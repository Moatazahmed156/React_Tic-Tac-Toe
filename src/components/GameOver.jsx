export default function GameOver({ winner, onRestart }) {
  return (
    <div className="absolute top-0 left-0 gap-6 w-full h-full flex flex-col justify-center items-center bg-[#282617F2] pop-in">
      <h2 className="font-[cursive] text-6xl text-center mb-8 text-[#fcd256] m-0">
        Game Over!
      </h2>
      <p className="text-3xl text-center text-[#e1dec7]">
        {winner ? `${winner} won!` : "It's a draw"}
      </p>
      <button
        onClick={onRestart}
        className="block text-2xl bg-none border-2 border-[#fcd256] text-[fcd2f6] py-2 px-4 rounded-lg cursor-pointer drop-shadow-xl hover:bg-[#fcd256] hover:translate-y-1  ease-out duration-150"
      >
        Rematch
      </button>
    </div>
  );
}
