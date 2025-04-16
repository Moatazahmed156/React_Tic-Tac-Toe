export default function Log({ turns }) {
  return (
    <div className="mt-18 flex flex-col text-black items-center">
      {turns.map((e, i) => (
        <p key={i} className="mb-2 animate-slide-in-from-left">
          {e.player} selected {e.square.row},{e.square.col}
        </p>
      ))}
    </div>
  );
}
