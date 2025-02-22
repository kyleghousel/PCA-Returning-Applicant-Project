import React, { useState, useEffect } from "react";

const Music = () => {
  const [albums, setAlbums] = useState(null);
  const client_id = '6405c464b5184e759cad38a60090f081';
  const client_secret = '950491866b544dea91afe946cd3770cb';

  const getSpotifyToken = async () => {
    const authOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
    };

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
      const data = await response.json();

      if (response.ok) {
        const token = data.access_token;
        console.log("Access token: ", token);
        return token; // Return the token to use later in fetchAmir
      } else {
        console.error("Error fetching token:", data);
      }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  // This effect runs on component mount
  useEffect(() => {
    const fetchAmir = async () => {
      const token = await getSpotifyToken(); // Get the token first

      if (token) {
        const response = await fetch("https://api.spotify.com/v1/albums/5RL52Y9Q7wmjcYvibTczjJ", {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the access token
          },
        });

        const data = await response.json();
        console.log(data);
        setAlbums(data); // Store the album data in state
      }
    };

    fetchAmir(); // Call the function when the component mounts
    console.log(albums);
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <div>
      <h2>Favorite Albums</h2>
      {albums ? (
        <div>
          <p>{albums.name}</p>
          <img src={albums.images[0].url} alt={albums.name} />
          <p>{albums.tracks.items[0].name}</p>
        </div>
      ) : (
        <p>Loading album data...</p>
      )}
    </div>
  );
};

export default Music;
