"use client";

import { useEffect, useState } from "react";

type Data = {
  _id: string;
  word: string;
  definition: string;
};

export default function DataList() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("/api/getAll")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2>list of from dictionary.wordDefs</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.word}:{item.definition}
          </li> // Replace with your data fields
        ))}
      </ul>
    </div>
  );
}
