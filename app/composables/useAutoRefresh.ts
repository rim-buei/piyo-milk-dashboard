export const useAutoRefresh = (refresh: () => Promise<void>, interval = 60_000) => {
  let timer: ReturnType<typeof setInterval>;

  onMounted(() => {
    timer = setInterval(refresh, interval);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });
};
