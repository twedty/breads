const React = require('react')
const Default = require('./layouts/default')

function BadRequest() {
    return (
        <Default>
            <h3>400 Bad Request - Invalid Data</h3>
        </Default>
    )
}

module.exports = BadRequest