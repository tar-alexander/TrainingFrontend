function validatePassword(password) {
  return (/.{8,}/g.test(password)) && (/[a-z]+/g.test(password))
  	&& (/[A-Z]+/g.test(password)) && (/[0-9]+/g.test(password))
}