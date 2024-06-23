document.addEventListener('DOMContentLoaded', () => {
    const paginationContainer = document.querySelector('.pagination');
    const totalPages = 10; // Example total pages. Replace with dynamic value.
    const currentPage = 1; // Example current page. Replace with dynamic value.
  
    function createPagination(totalPages, currentPage) {
      paginationContainer.innerHTML = ''; // Clear any existing content
  
      // Create the Previous button
      const prevButton = document.createElement('a');
      prevButton.className = 'pagination__link pagination__link--prev';
      prevButton.innerHTML = '&laquo;'; // Left arrow
      prevButton.href = '#';
      prevButton.onclick = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
          createPagination(totalPages, currentPage - 1);
        }
      };
      prevButton.classList.toggle('pagination__link--disabled', currentPage === 1);
      paginationContainer.appendChild(prevButton);
  
      // Create page numbers
      for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
          const activePage = document.createElement('span');
          activePage.className = 'pagination__link pagination__link--active';
          activePage.textContent = i;
          paginationContainer.appendChild(activePage);
        } else if (i <= 4 || i === totalPages) {
          const pageLink = document.createElement('a');
          pageLink.className = 'pagination__link';
          pageLink.textContent = i;
          pageLink.href = '#';
          pageLink.onclick = (e) => {
            e.preventDefault();
            createPagination(totalPages, i);
          };
          paginationContainer.appendChild(pageLink);
        } else if (i === 5) {
          const dots = document.createElement('span');
          dots.className = 'pagination__link';
          dots.textContent = '...';
          paginationContainer.appendChild(dots);
        }
      }
  
      // Create the Next button
      const nextButton = document.createElement('a');
      nextButton.className = 'pagination__link pagination__link--next';
      nextButton.innerHTML = '&raquo;'; // Right arrow
      nextButton.href = '#';
      nextButton.onclick = (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
          createPagination(totalPages, currentPage + 1);
        }
      };
      nextButton.classList.toggle('pagination__link--disabled', currentPage === totalPages);
      paginationContainer.appendChild(nextButton);
    }
  
    createPagination(totalPages, currentPage);
  });
  