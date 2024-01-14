import {LitElement, html} from '../lib/lit';
import $ from 'jquery';
export default class AppContainer extends LitElement {
  createRenderRoot() {
    return this;
  }
  updated() {
    const slot = $('slot');
    console.log(`AppContainer ~ updated ~ slot:`, slot);
  }
  render() {
    return html`<div id="" class="max-w-screen-custom_xl w-full mx-auto px-4">
      <slot></slot>
    </div>`;
  }
}

customElements.define('app-container', AppContainer);
