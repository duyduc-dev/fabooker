import {LitElement, css, html} from '../../js/lib/lit';
import {CommonStyle} from '../../styles/common-style';
import Tools from '../../utils/Tools';

export default class AppBook extends LitElement {
  static get styles() {
    return [
      CommonStyle,
      css`
        .container:hover {
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      width: {type: String, attribute: 'width'},
      height: {type: String, attribute: 'height'},
      thumbnailUrl: {type: String, attribute: 'thumbnail-url'},
      title: {type: String, attribute: 'title'},
      price: {type: Number, attribute: 'price'},
      discount: {type: Number, attribute: 'discount'},
    };
  }

  constructor() {
    super();
    this.width = 'auto';
    this.height = 'auto';
  }

  render() {
    return html`
      <style>
        .container {
          width: ${this.width};
          height: ${this.height};
        }
      </style>
      <div class="container p-8 cursor-pointer rounded-8">
        <div class="max-w-full h-190 mx-auto flex justify-center">
          <img
            class="mx-auto h-full object-cover"
            src=" ${this.thumbnailUrl} "
          />
        </div>
        <div class="mt-16">
          <p class="text-14 text-text my-0">${this.title}</p>
          <div class="flex items-center gap-4">
            <p class="font-bold text-primary">
              ${Tools.formatMoney(this.price - this.discount * this.price, 0)} đ
            </p>
            ${this.discount &&
            html`
              <div
                class="py-3 inline-flex items-center justify-center px-4 text-white font-bold text-10 bg-primary rounded-4"
              >
                -${this.discount * 100}%
              </div>
            `}
          </div>
          <div class="mt-4">
            <span class="line-through text-grey-450 text-14">
              ${Tools.formatMoney(this.price, 0)} đ
            </span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-book', AppBook);
