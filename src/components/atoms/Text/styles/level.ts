import { css } from 'styled-components';

export const setLevel = (level: number): any => {
  switch (level) {
    case 1:
      return css`
        font-size: 1.6rem;
        font-weight: normal;
        line-height: 2.4rem;
        letter-spacing: 0.1px;
      `;
    case 2:
      return css`
        font-size: 1.4rem;
        font-weight: normal;
        line-height: 2.2rem;
        letter-spacing: 0.1px;
      `;
  }
};
