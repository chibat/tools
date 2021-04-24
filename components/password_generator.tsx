import React, { useState } from "react";
import { defaultCharacters, generatePassword } from "../lib/password.ts";

export function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [characters, setCharacters] = useState(defaultCharacters);
  const [result, setResult] = useState("");

  function onClick() {
    if (length && characters) {
      setResult(generatePassword(length, characters));
    }
  }

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        password length{" "}
        <input
          type="number"
          value={length}
          onChange={(e: React.ChangeEvent<any>) => setLength(e.target.value)}
        />
      </div>
      <div>
        password characters{" "}
        <input
          type="text"
          value={characters}
          onChange={(e: React.ChangeEvent<any>) =>
            setCharacters(e.target.value)}
        />
      </div>
      <button onClick={onClick}>generate</button> <span>{result}</span>
    </div>
  );
}
