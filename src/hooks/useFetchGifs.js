import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getFigs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((newImages) => {
      setImages(newImages);
      setIsLoading(false);
    });
  }, []);

  return {
    images,
    isLoading,
  };
};
