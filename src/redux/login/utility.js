import { getDatabaseReference } from '../../utility'

export const setUserAsGuest = (username) => {
  const users = getDatabaseReference('login/guests');
  users.update({
    [username]: '',
  })
}

export const findElementInObjectList = (obj, elementToFind) => (
  Object.keys(obj).find(e => e === elementToFind) !== undefined
)