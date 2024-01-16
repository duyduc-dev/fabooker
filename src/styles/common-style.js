import {colors} from '../contansts/colors';
import {css, unsafeCSS} from '../js/lib/lit';

const MAX_UNIT = 1000;
const MIN_UNIT = -1000;

const getUnitClass = () => {
  const unitSize = [];
  for (let i = MIN_UNIT; i <= MAX_UNIT; i++) {
    const unit = `${i}px`;
    unitSize.push(`
      .w-${i} {
        width: ${unit};
      }
      .h-${i} {
        height: ${unit};
      }
      .rounded-${i} {
        border-radius: ${unit};
      }
      .max-w-${i} {
        max-width: ${unit};
      }
      .min-w-${i} {
        min-width: ${unit};
      }
      .p-${i} {
        padding: ${unit};
      }
      .pl-${i} {
        padding-left: ${unit};
      }
      .pr-${i} {
        padding-right: ${unit};
      }
      .pt-${i} {
        padding-top: ${unit};
      }
      .pb-${i} {
        padding-bottom: ${unit};
      }
      .m-${i} {
        margin: ${unit};
      }
      .ml-${i} {
        margin-left: ${unit};
      }
      .mr-${i} {
        margin-right: ${unit};
      }
      .mt-${i} {
        margin-top: ${unit};
      }
      .mb-${i} {
        margin-bottom: ${unit};
      }
      .py-${i} {
        padding-top: ${unit};
        padding-bottom: ${unit};
      }
      .px-${i} {
        padding-left: ${unit};
        padding-right: ${unit};
      }
      .my-${i} {
        margin-top: ${unit};
        margin-bottom: ${unit};
      }
      .mx-${i} {
        margin-left: ${unit};
        margin-right: ${unit};
      }
      .line-${i}-limit {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        -webkit-line-clamp: ${i};
      }
      .text-${i} {
        font-size: ${unit};
      }
      .gap-${i} {
        gap: ${unit};
      }
      .grid-column-${i} {
        grid-template-columns: repeat(${i}, 1fr);
      }
      .top-${i} {
        top: ${unit};
      }
      .right-${i} {
        right: ${unit};
      }
      .bottom-${i} {
        bottom: ${unit};
      }
      .left-${i} {
        left: ${unit};
      }
      .z-${i} {
        z-index: ${i};
      }
      .border-${i} {
        border-width: ${unit};
      }
    `);
  }

  return unitSize.join('');
};

const toObjectTailwind = (obj, keyOuter) => {
  const classes = [];
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'string') {
      const _key = keyOuter ? `${keyOuter}-` : '';
      classes.push(`
        .text-${_key}${key} {
          color: ${unsafeCSS(value)};
        }
        .bg-${_key}${key} {
          background-color:  ${unsafeCSS(value)};
        }
        .border-${_key}${key} {
          border-color:  ${unsafeCSS(value)};
        }
      `);
    } else {
      classes.push(toObjectTailwind(value, key));
    }
  });
  return classes.join('');
};

const getFontWeight = () => {
  const vals = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'bold',
    'bolder',
    'lighter',
    'normal',
  ];
  return vals
    .map(
      (item) => `.font-${item} {
    font-weight: ${item};
  }`
    )
    .join('');
};

export const CommonStyle = css`
  * {
    margin: 0;
    padding: 0;
  }

  .w-full {
    width: 100%;
  }

  .h-full {
    height: 100%;
  }
  .object-cover {
    object-fit: cover;
  }
  .max-w-full {
    max-width: 100%;
  }
  .max-h-full {
    max-height: 100%;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .px-auto {
    padding-left: auto;
    padding-right: auto;
  }
  .line-2-3dot {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
  }
  .inline-flex {
    display: inline-flex;
  }
  .flex {
    display: flex;
  }
  .block {
    display: block;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .line-through {
    text-decoration: line-through;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .grid {
    display: grid;
  }
  .absolute {
    position: absolute;
  }
  .relative {
    position: relative;
  }
  .rounded-full {
    border-radius: 50%;
  }
  .shadow-sm {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .solid {
    border-style: solid;
  }

  ${unsafeCSS(getUnitClass())}
  ${unsafeCSS(getFontWeight())}
  ${unsafeCSS(toObjectTailwind(colors))}
`;

export const ResetStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input,
  button {
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
