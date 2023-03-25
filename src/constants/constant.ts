export const SCREEN = {
  LOGIN: 'login',
  SIGNUP: 'signUp',
  FORGOT_PASSWORD: 'forgot_password',
  // bottom tab screen
  HOME: 'home',
  WALLET: 'wallet',
  NOTIFICATION: 'notification',
  SETTING: 'setting',
} as const;

export type ScreenName = keyof typeof SCREEN;
