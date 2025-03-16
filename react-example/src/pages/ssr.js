export default function SSRPage({ data }) {
    return (
      <div>
        <h1>{data ? data.name : "No data yet"}</h1>
        <p>{data ? data.description : "No data yet"}</p>
        <strong>👁 {data ? data.subscribers_count : "No data yet"}</strong>{" "}
        <strong>✨ {data ? data.stargazers_count : "No data yet"}</strong>{" "}
        <strong>🍴 {data ? data.forks_count : "No data yet"}</strong>
      </div>
    );
  }
  
//   "server" function
  export async function getServerSideProps() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch("https://api.github.com/repos/vercel/swr");
    if (!res.ok) {
      return { props: { data: null } }; 
    }
    const data = await res.json();
  
    return {
      props: { data },
    };
  }
  