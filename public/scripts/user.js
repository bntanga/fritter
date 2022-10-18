/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function createUser(fields) {
  console.log("creating user 1");
  console.log("creating user 2");
  fetch('/api/users', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function changeUsername(fields) {
  fetch('/api/users', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function changePassword(fields) {
  fetch('/api/users', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteUser(fields) {
  fetch('/api/users', {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

function signIn(fields) {
  console.log("signing in");
  console.log("signing in 2");
  console.log("signing in 3");
  console.log("Mama mia");
  fetch('/api/users/session', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function signOut() {
  fetch('/api/users/session', {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}
