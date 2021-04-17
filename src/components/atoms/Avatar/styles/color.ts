import { css } from 'styled-components';
import { theme } from '../../../../theme/theme';
import hexToRgb from '../../../../utils/hexToRgb';

const setColor = (color: string, variant: string): any => {
  switch (variant) {
    case 'colored':
      return css`
        background-color: rgba(${hexToRgb(theme.colors[color], 0.2)});
        p {
          color: ${theme.colors[color]};
        }
        &:hover {
          background-color: rgba(${hexToRgb(theme.colors[color], 0.4)});
        }
      `;
    case 'white':
      return css`
        background-color: ${theme.colors[color]};

        p {
          color: ${theme.colors.white};
        }

        &:hover {
          background-color: rgba(${hexToRgb(theme.colors[color], 0.6)});
        }
      `;
    default:
      return css`
        background-color: ${theme.colors.black60};

        p {
          color: ${theme.colors.white};
        }

        &:hover {
          background-color: rgba(${hexToRgb(theme.colors.black60, 0.7)});
        }
      `;
  }
};

export default setColor;
