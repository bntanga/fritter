/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */


function viewCommentsByFreet(fields) {
    fetch(`/api/comments/${fields.parentId}`)
        .then(showResponse)
        .catch(showResponse);
}

function createComment(fields) {
    console.log("this is parent ID", fields.parentId);

    fetch(`/api/comments/${fields.parentId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function editComment(fields) {
    console.log("entering editing");
    console.log("this is fields, ", JSON.stringify(fields));
    fetch(`/api/comments/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function deleteComment(fields) {
    fetch(`/api/comments/${fields.id}`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}
