import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onTermSubmit(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  // could return either [array] or {object}
  return [videos, onTermSubmit];
};

export default useVideos;
