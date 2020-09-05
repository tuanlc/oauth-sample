export default class OauthProvider {
  constructor({
    client_id
  } = {}) {
    if (!client_id) {
      throw new Error('client_id is requried');
    }

    this.client_id = client_id;
  }
}