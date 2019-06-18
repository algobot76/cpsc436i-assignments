import axios from 'axios';

const messageApi = axios.create({
  baseURL: 'http://localhost:5000/messages/'
});

export const getMessages = () => {
  return messageApi.get('/');
};

export const postMessage = message => {
  return messageApi.post('/new', { msg: message });
};

export const deleteMessage = id => {
  return messageApi.delete(`/remove/${id}`);
};

export const deleteAllMessages = () => {
  return messageApi.delete('/destroy');
};
