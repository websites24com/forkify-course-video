import View from './View.js';
import icons from '../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      console.log(btn);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const nextPage = `
        <button data-goto=${
          curPage + 1
        } class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
    `;
    const prevPage = `
        <button data-goto=${
          curPage - 1
        } class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>`;

    const nextAndPrev = `<button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>

    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
  `;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // 1. PAGE 1 and there are more pages

    if (curPage === 1 && numPages > 1) {
      return nextPage;
    }

    // 2. Last page

    if (curPage === numPages && numPages > 1) {
      return prevPage;
    }

    // 3. Other page

    if (curPage < numPages) return nextAndPrev;

    // 4. PAGE 1 and there are NOT more pages

    return '';
  }
}

export default new PaginationView();
