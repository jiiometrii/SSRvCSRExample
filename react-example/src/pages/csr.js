import React, { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CSRPage() {
  const [startFetch, setStartFetch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartFetch(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const { data, error, isLoading } = useSWR(
    startFetch ? "https://api.github.com/repos/vercel/swr" : null,
    fetcher
  );

  return (
    <div>
      <h1>{data ?  data.name : "No data yet"}</h1>
      <p>{data ? data.description : "No data yet"}</p>
      <strong>👁 {data ? data.subscribers_count : "No data yet"}</strong>{" "}
      <strong>✨ {data ? data.stargazers_count : "No data yet"}</strong>{" "}
      <strong>🍴 {data ? data.forks_count: "No data yet"}</strong>
    </div>
  );
}
