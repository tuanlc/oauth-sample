import OauthProvider from './OauthProvider';
import getForm from './utils';

const ENPOINTS = {
  AUTH: 'https://accounts.google.com/o/oauth2/v2/auth'
};

export default class Google extends OauthProvider {
  login({
    redirect_uri,
    response_type,
    scope,
    state,
    include_granted_scopes,
    login_hint,
    prompt
  } = {}) {
    if (!redirect_uri) {
      throw new Error('redirect_uri is requried');
    }

    if (!response_type) {
      throw new Error('response_type is requried');
    }

    if (!scope) {
      throw new Error('scope is requried');
    }

    const form = getForm(ENPOINTS.AUTH, {
      client_id: this.client_id,
      redirect_uri,
      response_type,
      scope,
      state,
      include_granted_scopes,
      login_hint,
      prompt
    });

    form.submit();
  }
}