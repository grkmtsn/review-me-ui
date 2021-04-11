import { css } from 'styled-components';
import { theme } from '../../../../theme/theme';
import hexToRgb from '../../../../utils/hexToRgb';

const setColor = (color: string, variant: string): any => {
  switch (variant) {
    case 'text':
      return css`
        color: ${theme.colors[color]};
        &:hover {
          background-color: rgba(${hexToRgb(theme.colors[color], 0.06)});
        }

        &:active {
          background-color: rgba(${hexToRgb(theme.colors[color], 0.12)});
        }
      `;
    case 'outlined':
      return css`
        color: ${theme.colors[color]};
        border-color: ${theme.colors[color]};

        &:hover {
          color: ${theme.colors.white};
          background-color: rgba(${hexToRgb(theme.colors[color], 0.8)});
        }

        &:active {
          color: ${theme.colors.white};
          background-color: rgba(${hexToRgb(theme.colors[color], 1)});
        }
      `;
    case 'contained':
      return css`
        color: ${theme.colors.white};
        border: none;
        background-color: ${theme.colors[color]};
        box-shadow: 0px 8px 16px rgba(${hexToRgb(theme.colors[color], 0.16)});

        &:hover {
          background-color: rgba(${hexToRgb(theme.colors[color], 0.8)});
          box-shadow: 0px 12px 20px rgba(${hexToRgb(theme.colors[color], 0.24)});
        }

        &:active {
          color: ${theme.colors.white};
          background-color: rgba(${hexToRgb(theme.colors[color], 1)});
          box-shadow: 0px 4px 12px rgba(${hexToRgb(theme.colors[color], 0.2)});
        }
      `;
    default:
  }
};

export default setColor;
