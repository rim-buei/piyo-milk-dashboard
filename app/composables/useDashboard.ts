export const useDashboard = () => {
  const { data, pending, error, refresh } = useFetch("/api/dashboard");

  return {
    data,
    pending,
    error,
    refresh,
  };
};
