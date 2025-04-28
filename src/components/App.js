// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDogImage() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDogImage();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={imageUrl} alt="A Random Dog" />
    </div>
  );
}

export default App;
