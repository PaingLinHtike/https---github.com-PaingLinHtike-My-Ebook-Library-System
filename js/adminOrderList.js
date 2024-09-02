        const editButtons = document.querySelectorAll(".button-container a.button:first-of-type");
        const deleteButtons = document.querySelectorAll(".button-container a.button:last-of-type");

        editButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Handle edit functionality
                alert("Edit button clicked");
            });
        });

        deleteButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Handle delete functionality
                alert("Delete button clicked");
            });
        });
        const pageNumbers = document.querySelector('.page-numbers');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentPage = 1;
const totalPages = 10; // Adjust the total number of pages as needed

function createPageNumbers() {
  pageNumbers.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement('button');
    pageNumber.textContent = i;
    pageNumber.addEventListener('click',   
 () => {
      currentPage = i;
      updatePagination();
    });
    pageNumbers.appendChild(pageNumber);
  }
}

function updatePagination() {
    const activePageNumber = pageNumbers.querySelector('.active');
    if (activePageNumber) {
        activePageNumber.classList.remove('active');
    }

    const currentPageNumber = pageNumbers.querySelector(button[data - page]=["${currentPage}"]);
  currentPageNumber.classList.add('active');

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;   

    updatePagination();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();   

  }
}

createPageNumbers();
updatePagination();