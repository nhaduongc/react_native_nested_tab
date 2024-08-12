import { categories } from '../data/categories';

import { useState, useEffect, useCallback } from 'react';

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchDummyCategories()

      setCategories(response);
    } catch (err) {
      console.error('Failed to fetch videos:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
  };
};

const fetchDummyCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
}

export default useFetchCategories;
