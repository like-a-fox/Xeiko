import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other db APIs ...
export const sendContact = (data) => 
  db.ref('/messages').push(data);

  export const contact = db.ref('/messages');

export const getCurrentUser = (id) => 
  db.ref(`users/${id}/username`).once('value')