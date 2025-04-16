export default function GameBoard({ onSelectSquare, Board }) {
  return (
    <div className="flex flex-col gap-4 mt-12 mb-20 items-center justify-center">
      {Board.map((row, i) => (
        <div key={i} className="flex gap-4">
          {row.map((e, j) => (
            <button
              key={j}
              onClick={() => onSelectSquare(i, j)}
              disabled={e !== null}
              className="w-40 h-40 bg-[#aca788] text-[#3f3b00] text-9xl flex items-center justify-center font-bold font-[cursive]"
            >
              {e}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
