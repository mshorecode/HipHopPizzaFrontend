import { clientCredentials } from '../utils/client';

const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getOrderById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const editOrder = (formData) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${formData.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((resp) => {
      if (resp.status === 204) {
        resolve({});
      } else {
        reject(resp.json());
      }
    })
    .catch(reject);
});

const createOrder = (formData) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((resp) => {
      if (resp.ok) {
        resolve({});
      } else {
        reject(resp.json());
      }
    })
    .catch(reject);
});

const addItem = (formData) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/order/additem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((resp) => {
      if (resp.ok) {
        resolve({});
      } else {
        reject(resp.json());
      }
    })
    .catch(reject);
});

const removeItem = (formData) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/order/removeitem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((resp) => {
      if (resp.ok) {
        resolve({});
      } else {
        reject(resp.json());
      }
    })
    .catch(reject);
});

const getItemsByOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/order/items/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

export {
  getOrders, getOrderById, editOrder, createOrder, addItem, removeItem, getItemsByOrder,
};
