import { useEffect, useState } from "react";

function App() {
  const [original, setOriginal] = useState([]);
  const [updated, setUpdated] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles")
      .then((res) => res.json())
      .then((data) => {
        // Split articles for demo: even index → original, odd index → updated
        const orig = data.filter((_, i) => i % 2 === 0);
        const upd = data.filter((_, i) => i % 2 !== 0);
        setOriginal(orig);
        setUpdated(upd);
      })
      .catch((err) => console.error(err));
  }, []);

  const articleCard = (article) => (
    <div
      key={article.id}
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h3>{article.title}</h3>
      <p>{article.content}</p>
      {article.reference_links && (
        <p>
          References: {article.reference_links.join(", ")}
        </p>
      )}
    </div>
  );

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>Original Articles</h1>
      {original.length ? original.map(articleCard) : <p>No original articles</p>}

      <h1 style={{ marginTop: "40px" }}>Updated / AI Articles</h1>
      {updated.length ? updated.map(articleCard) : <p>No updated articles yet</p>}
    </div>
  );
}

export default App;
