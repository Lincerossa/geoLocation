export default obj => Object.keys(obj)
    .map(key => ({id: key, ...obj[key]}))