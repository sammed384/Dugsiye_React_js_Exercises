import { useEffect, useState } from "react";

const PokemonSearch = () => {
  const [userData, setUserData] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      console.error("error", error);
    }
  }, [error]);

  const handleSearch = async () => {
    if (!search) return;
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      if (!response.ok) {
        throw new Error("user not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Github user search</h1>
      <input
        placeholder="Enter GitHub username"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <div>
          <h2>{userData.name || userData.login}</h2>
          <img src={userData.avatar_url} alt="" width={100} />
          <p>Location : {userData.location}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
