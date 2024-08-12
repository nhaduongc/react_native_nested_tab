import { useState, useEffect, useCallback } from 'react';
import { videos as dummyVideo } from '../data/videos';

const useFetchVideos = (param, pageSize = 20) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchVideos = useCallback(async (param) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchDummyVideos(param)
      const newVideos = response || [];
      const newHasMore = false;

      setVideos((prevVideos) => [...prevVideos, ...newVideos])
      setHasMore(newHasMore);
    } catch (err) {
      console.error('Failed to fetch videos:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [param, pageSize]);

  useEffect(() => {
    fetchVideos(param);
  }, [page]);

  const fetchMoreVideos = useCallback(() => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore]);

  return {
    videos,
    loading,
    error,
    fetchMoreVideos,
    hasMore,
  };
};

const fetchDummyVideos = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dummyVideo[param])
        }, 2000)
    })
}

export default useFetchVideos;
