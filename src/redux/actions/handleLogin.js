import { getDatabaseReference } from '../../utility'

export const LOGIN = 'LOGIN'


const actionUsername = ({ username, isGuest, guestNameAlreadyTaken }) => ({
  type: LOGIN,
  login: {
    username,
    isGuest,
    userChecked: true,
    guestNameAlreadyTaken,
  }
})



const setUserAsGuest = (username) => {
  const users = getDatabaseReference('login/guests');
  users.update({
    [username]: '',
  })
}


const findElementInObjectList = (obj,elementToFind) => (
  Object.keys(obj).find(e => e === elementToFind) !== undefined
)


export function handleLogin(username) {
  return (dispatch) => {
    getDatabaseReference('login/users')
      .on('value', (snapshot) => {
       
        const users = snapshot.val()
        const registeredUser = findElementInObjectList(users, username)
        
        if (registeredUser) {
          const action = actionUsername({ username, isGuest: false });
          dispatch(action)
          return false
        }

        getDatabaseReference('login/guests')
          .on('value', (snapshot) => {

            const guests = snapshot.val()
            const guestNameAlreadyTaken = findElementInObjectList(guests, username)
            if (guestNameAlreadyTaken) {
              const action = actionUsername({ username, isGuest: true, guestNameAlreadyTaken: true });
              dispatch(action)
              return false
            }

            setUserAsGuest(username)
            const action = actionUsername({ username, isGuest: true, guestNameAlreadyTaken: false });
            dispatch(action)

            return false
          })
        

        
      }, (errorObject) => {
        const action = actionUsername({ username: null, userChecked: false });
        dispatch(action)
      });
  };
}
