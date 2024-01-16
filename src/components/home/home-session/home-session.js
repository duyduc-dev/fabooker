import {LitElement, html} from '../../../js/lib/lit';
import {styleHomeSession} from './style';

export default class HomeSession extends LitElement {
  static styles = [styleHomeSession];

  static properties = {
    title: {type: String, attribute: 'title'},
  };

  constructor() {
    super();
    this.title = '';
  }

  render() {
    return html`
      <div class="app-container">
        <div class="inner">
          <div class="head">
            <div class="wrap-xuhuong">
              <img
                class="xuhuong"
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/icon_dealhot_new.png"
              />
            </div>
            <span class="head-title">${this.title}</span>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('home-session', HomeSession);
