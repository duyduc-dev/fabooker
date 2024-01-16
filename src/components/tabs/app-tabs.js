import {LitElement, css, html} from '../../js/lib/lit';

function partMap(parts) {
  return Object.entries(parts)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(' ');
}

export default class AppTabs extends LitElement {
  selectTab(selected) {
    this.tabs.forEach((tab, index) => {
      this.tabs[index].selected = tab == selected;
    });
    this.requestUpdate();
    this.dispatchEvent(new CustomEvent('tab-change', selected));
  }

  get tabs() {
    const slot = this.shadowRoot.querySelector('slot');
    return slot ? slot.assignedElements() : [];
  }

  firstUpdated() {
    super.firstUpdated();
    this.tabs.find((tab) => tab.selected) || this.selectTab(this.tabs[0]);
  }

  static get styles() {
    return css`
      :host,
      slot {
        display: block;
      }
      span {
        display: inline-block;
      }
      :host::part(tab-bar) {
        display: flex;
      }
    `;
  }

  render() {
    return html`
      <nav part="tab-bar">
        ${this.tabs.map(
          (tab) => html`
            <div
              part=${partMap({tab: true, 'tab-selected': tab.selected})}
              @click=${() => this.selectTab(tab)}
            >
              ${tab.title}
            </div>
          `
        )}
      </nav>

      <slot part="content" @slotchange=${() => this.requestUpdate()}></slot>
    `;
  }
}

customElements.define('app-tabs', AppTabs);
