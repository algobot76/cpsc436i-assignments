class Database {
  #id = 0;
  #db = [];

  constructor(initialData) {
    if (initialData.length > 0) {
      initialData.forEach(entry => {
        const obj = {
          id: #id,
          data: entry,
        };
        #db.push(obj);
        #id++;
      });
    }
  }

  add(entry) {
    const obj = {
      id: #id,
      data: entry,
    };
    #id++;
    #db.push(obj);
  }

  delete(id) {
    const idx = #search(id);
    if (idx !== -1) {
      #db.splice(idx, 1);
    }
  }

  clearAll() {
    #id = 0;
    #db = [];
  }

  #search(id) {
    if (#db.length === 0) {
      return -1;
    }

    let start = 0;
    let end = #db.length - 1;
    while (start + 1 < end) {
      let mid = (start + end) / 2;
      if (#db[mid].id === id) {
        return mid;
      } else if (#db[mid].id < mid) {
        start = mid;
      } else {
        end = mid;
      }
    }

    if (#db[start].id === id) {
      return start;
    }
    if (#db[end].id === id) {
      return end;
    }

    return -1;
  }
}
