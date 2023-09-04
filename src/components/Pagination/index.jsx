export function Pagination(data, currentPage, setCurrentPage) {
  const totalPages = Math.ceil(data.length / 6);
  const paginatedData = data.slice((currentPage - 1) * 6, currentPage * 6);

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function renderPagination() {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => {
      return (
        <button
          key={number}
          className={currentPage === number ? 'primary' : 'danger'}
          onClick={() => handlePage(number)}
        >
          {number}
        </button>
      );
    });
  }

  return {
    paginatedData,
    renderPagination,
  };
}
