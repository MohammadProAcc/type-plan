export const calcPagination = (
  page: number | "next" | "prev",
  currentPage: number | string,
  lastPage: number,
) => {
  const current = Number(currentPage);
  return (
    page === "next"
      ? current < lastPage
        ? (current + 1)
        : current
      : page === "prev"
      ? current > 1
        ? (current - 1)
        : current
      : page
  );
};
