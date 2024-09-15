export class Storage {

  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  };

  load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  clear(key) {
    localStorage.removeItem(key);
  };

};