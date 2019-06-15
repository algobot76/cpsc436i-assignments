class Database {

  constructor(initialData) {
    this._id = 0;
    this._db = [];
    if (initialData.length > 0) {
      initialData.forEach(entry => {
        const obj = {
          id: this._id,
          data: entry,
        };
        this._db.push(obj);
        this._id++;
      });
    }
  }

  add(entry) {
    const obj = {
      id: this._id,
      data: entry,
    };
    this._id++;
    this._db.push(obj);
  }

  delete(id) {
    const idx = this._search(id);
    if (idx !== -1) {
      this._db.splice(idx, 1);
    }
  }

  clearAll() {
    this._id = 0;
    this._db = [];
  }

  query(id) {
    const idx = this._search(id);
    if (idx !== -1) {
      return this._db[idx];
    } else {
      return null;
    }
  }

  getAll() {
    return this._db;
  }

  _search(id) {
    if (this._db.length === 0) {
      return -1;
    }

    let start = 0;
    let end = this._db.length - 1;
    while (start + 1 < end) {
      let mid = (start + end) / 2;
      if (this._db[mid].id === id) {
        return mid;
      } else if (this._db[mid].id < mid) {
        start = mid;
      } else {
        end = mid;
      }
    }

    if (this._db[start].id === id) {
      return start;
    }
    if (this._db[end].id === id) {
      return end;
    }

    return -1;
  }
}

module.exports = Database;
