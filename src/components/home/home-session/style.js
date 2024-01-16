import {css} from '../../../js/lib/lit';

export const styleHomeSession = css`
  .app-container {
    overflow: hidden;
    margin-top: 16px;
    max-width: 1230px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
  }

  .inner {
    background-color: #ffffff;
    border-radius: 8px;
    padding-bottom: 16px;
  }

  .head {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: #fcddef;
    display: flex;
    align-items: center;
    gap: 8px;

    .head-title {
      font-size: 18px;
      color: #1f1d1d;
      font-weight: bold;
    }
  }

  .wrap-xuhuong {
    width: 32px;
    height: 32px;

    .xuhuong {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
