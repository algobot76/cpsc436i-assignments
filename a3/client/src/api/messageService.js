import axios from 'axios';

const messageApi = axios.create({
  baseURL: 'http://localhost:5000/messages/'
});

export const getMessages = () => {
  return messageApi
    .get('/')
    .then(res => res)
    .catch(err => err);
};

export const postMessage = message => {
  return messageApi
    .post('/new', { msg: message })
    .then(res => res)
    .catch(err => err);
};

export const deleteMessage = id => {
  return messageApi
    .delete(`/remove/${id}`)
    .then(res => res)
    .catch(err => err);
};

export const deleteAllMessages = () => {
  return messageApi
    .delete('/destroy')
    .then(res => res)
    .catch(err => err);
};
