// useTitle.js
import { useEffect } from 'react';

const useTitle = (title, data) => {
  useEffect(() => {
      document.title = title;
  }, [title]);

  return { state: data }; // Now returns an object with state
};


export default useTitle;
