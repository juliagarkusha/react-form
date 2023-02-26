class Api {
  static URL = 'https://jsonplaceholder.typicode.com/';

  static getList (entity) {
    return fetch(`${Api.URL}${entity}`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }

        throw new Error('Can not fetch todo list from server')
      })
  }

  static create(todo) {
    return fetch(Api.URL, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json',
      }
    }).then(response => {
      if(response.ok) {
        return response.json();
      }

      throw new Error('Can not create todo on server')
    })
  }

  static update(id, changes) {
    return fetch(Api.URL + id, {
      method: 'PUT',
      body: JSON.stringify(changes),
      headers: {
        'Content-type': 'application/json',
      }
    }).then(response => {
      if(response.ok) {
        return response.json();
      }

      throw new Error('Can not update todo on server')
    })
  }

  static delete(id) {
    return fetch(Api.URL + id, {
      method: 'DELETE',
    }).then(response => {
      if(response.ok) {
        return response.json();
      }

      throw new Error('Can not delete todo on server')
    })
  }
}

export default Api;
