import { fstore } from './firebase'

export const AddUserPhoto = (id, imageUrl) =>
    fstore.ref(`users/${id}`).child(`userImage/${imageUrl}`)

export const AddUserBio = (id, userBio) =>
    fstore.ref(`users/${id}`).child(`userInfo/${userBio}`)

export const refUser = (id) =>
    fstore.ref(`users/${id}`)