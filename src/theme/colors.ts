// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: '#FFFFFF',
  neutral200: '#FAFAFA',
  neutral300: '#F5F5F5',
  neutral400: '#F0F0F0',
  neutral500: '#D9D9D9',
  neutral600: '#BFBFBF',
  neutral700: '#8C8C8C',
  neutral800: '#595959',
  neutral900: '#000000',

  primary100: '#e6fffb',
  primary200: '#b5f5ec',
  primary300: '#87e8de',
  primary400: '#5cdbd3',
  primary500: '#36cfc9',
  primary600: '#13c2c2',

  secondary100: '#DCDDE9',
  secondary200: '#BCC0D6',
  secondary300: '#9196B9',
  secondary400: '#626894',
  secondary500: '#41476E',

  error100: '#FFCCC7',
  error500: '#FF4D4F',
  error700: '#A8071A',

  warning: '#faad14',

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.error700,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.error100,
};
