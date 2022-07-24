import View from './View.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg'; // Parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes find for your query... 🔥🔥🔥';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
