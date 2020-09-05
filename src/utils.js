export default function getForm(endpoint, params) {
  const form = document.createElement('form');

  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', endpoint);

  // Add form parameters as hidden input values.
  for (let param in params) {
    const input = document.createElement('input');

    input.setAttribute('type', 'hidden');
    input.setAttribute('name', param);
    input.setAttribute('value', params[param]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  
  return form;
}