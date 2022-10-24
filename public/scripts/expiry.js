/* eslint-disable @typescript-eslint/restrict-template-expressions */

function addExpiry(fields) {
    fetch(`/api/expiry/${fields.id}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function editExpiry(fields) {
    fetch(`/api/expiry/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function deleteExpiry(fields) {
    fetch(`/api/expiry/${fields.id}`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}
