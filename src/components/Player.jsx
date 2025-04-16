import { useState } from "react";

export default function Player({ isActive, name, symbol, onChangeName }) {
  const [IsEditing, setIsEditing] = useState(false);
  const [PlayerName, setPlayerName] = useState(name);

  function handelEditing() {
    setIsEditing((editing) => !editing);
    if (IsEditing) {
      onChangeName(symbol, PlayerName);
    }
  }
  return (
    <div
      className={`flex w-[50%] items-center ${
        isActive ? "border-2 border-[#f6e35a] text-[#f6e35a]" : null
      } text-[#e1dec7] text-xl uppercase  p-2  rounded-lg items-center pt-3 gap-6`}
    >
      {IsEditing ? (
        <input
          onChange={(e) => setPlayerName(e.target.value)}
          autoFocus
          value={PlayerName}
          type="text"
          className="p-1 text-lg w-[10rem] bg-[#46432f] text-center uppercase border-none appearance-none outline-none"
        />
      ) : (
        <p className="w-[10rem] py-2 font-[inherit] ">{PlayerName}</p>
      )}
      <p>{symbol}</p>
      <button
        onClick={handelEditing}
        className="text-[#f6e35a] text-lg cursor-pointer ml-auto mr-4 hover:text-[#f8ca31]"
      >
        {IsEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}
