export default class NetWorkRequest {
  constructor(endPoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/') {
    this.endPoint = endPoint;
  }

   post = async (path, body, returnJson = false) => {
     const response = await fetch(this.endPoint + path, {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(body),
     });
     const json = returnJson ? await response.json() : await response.text();
     return json;
   };

  get = async (path, returnJson = false) => {
    const response = await fetch(this.endPoint + path);
    const json = returnJson ? await response.json() : await response.text();
    return json;
  };

  getBase = async (path, returnJson = false) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(this.endPoint + path, requestOptions);
    const json = returnJson ? await response.json() : await response.text();
    return json;
  };
}