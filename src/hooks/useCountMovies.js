import { useEffect, useState } from 'react';

const useCountMovies = (dependency) => {
  const [countRenderMovies, setCountRenderMovies] = useState(0);
  const [countMoreMovies, setCountMoreMovies] = useState(0);

  const screenWidth = window.screen.width;

  useEffect(() => {
    if (screenWidth >= 1280) {
      setCountRenderMovies(16);
      setCountMoreMovies(4);
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      setCountRenderMovies(8);
      setCountMoreMovies(2);
    } else if (screenWidth < 768) {
      setCountRenderMovies(5);
      setCountMoreMovies(2);
    }
  }, [screenWidth, dependency]);

  const getMoreMovies = () => {
    setCountRenderMovies(countRenderMovies + countMoreMovies);
  };

  return { getMoreMovies, countRenderMovies };
};

export default useCountMovies;
