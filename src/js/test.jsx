// import React from 'react';
// import {render} from 'react-dom';
import NewElement from './NewElement.jsx';
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Afzal',
    lastName: 'Hossain'
};

const element = (
    <div>
        Hello, {formatName(user)}!
        <NewElement />
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);