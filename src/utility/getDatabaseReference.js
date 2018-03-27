import admin from './firebase'

export default (path) => {
  const db = admin.database()
  return db.ref(path)
}
