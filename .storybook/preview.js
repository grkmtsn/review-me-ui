import { ReviewMeTheme } from '../src/theme';
export const decorators = [
  (Story) => (
    <ReviewMeTheme>
      <Story />
    </ReviewMeTheme>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
