import { css } from 'styled-components';

export const setLevel = (level: number): any => {
  switch (level) {
    case 1:
      return css`
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.6rem;
        letter-spacing: 0.2px;
      `;
    case 2:
      return css`
        font-size: 1.2rem;
        font-weight: normal;
        line-height: 1.6rem;
        letter-spacing: 0.2px;
      `;
    case 3:
      return css`
        font-size: 1.1rem;
        font-weight: normal;
        line-height: 1.4rem;
        letter-spacing: 0.2px;
      `;
  }
};
