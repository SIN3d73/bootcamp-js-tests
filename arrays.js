export const hasElements = (array) => {
  return !!array?.length;
}

export const mapUsers = (users = []) => {
  return users.map(user => ({name: `${user.firstName} ${user.lastName}`}))
}
