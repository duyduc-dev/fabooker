import {LitElement, html} from '../../js/lib/lit';

export default class AppTabItem extends LitElement {
  static get properties() {
    return {
      title: {type: String, reflect: true},
      selected: {type: Boolean, reflect: true},
    };
  }

  render() {
    return html`
      <style>
        :host(:not([selected])) {
          display: none;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('app-tab-item', AppTabItem);
