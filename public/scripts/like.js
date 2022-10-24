/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function unlikeFreet(fields) {
    fetch(`/api/likes/${fields.id}`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}
function likeFreet(fields) {
    fetch(`/api/likes/${fields.id}`, {method: 'POST'})
        .then(showResponse)
        .catch(showResponse);
}
function viewLikesByFreet(fields) {
    fetch(`/api/likes/${fields.id}`, {method: 'GET'})
        .then(showResponse)
        .catch(showResponse);
}

