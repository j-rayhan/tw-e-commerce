export const SCREEN = {
  LOGIN: 'Login',
  SIGNUP: 'SignUp',
  FORGOT_PASSWORD: 'ForgotPassword',
} as const;

export type ScreenName = keyof typeof SCREEN;
