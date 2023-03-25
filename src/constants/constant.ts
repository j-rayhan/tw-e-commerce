export const SCREEN = {
  LOGIN: 'login',
  SIGNUP: 'signUp',
  FORGOT_PASSWORD: 'forgot_password',
  // bottom tab screen
  BOTTOM_NAVIGATOR: 'bottom_navigator',
  HOME: 'home',
  WALLET: 'wallet',
  NOTIFICATION: 'notification',
  SETTING_NAVIGATOR: 'setting_navigator',
  SETTING: 'setting',
  SETTING_DETAILS: 'setting_details',
  // drawer screen
  NOTICE: 'notice',
  PROFILE: 'profile',
  APPLICATION: 'application',
} as const;

export type ScreenName = keyof typeof SCREEN;
