import Google from './Google';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '434691349548-cdf3g022kniscjailb3odd3l6s0mr4do.apps.googleusercontent.com';

export const googleOauth = new Google({
  client_id: GOOGLE_CLIENT_ID
});
