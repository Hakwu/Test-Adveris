import API from "./API";

class Backend {
  search = async (input) => {
    const res = await API.send('GET', `/search?q=${input}`, {input}, false);
    return res;
  }
}

const service = new Backend();
export default service;
