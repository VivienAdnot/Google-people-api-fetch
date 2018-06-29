console.log('loaded');

const titleEl = document.getElementById('title');
titleEl.innerHTML = 'updated by js';

function start() {
    console.log('gapi load callback called');

    // 2. Initialize the JavaScript client library.
    gapi.client.init({
        'apiKey': 'YOUR_API_KEY',
        // Your API key will be automatically added to the Discovery Document URLs.
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        // clientId and scope are optional if auth is not required.
        'clientId': '58484816324-21gedgkevgnepkiukniofhqoi0gn488m.apps.googleusercontent.com',
        'scope': 'profile',
    }).then(function() {
        // 3. Initialize and make the API request.
        return gapi.client.people.people.get({
            'resourceName': 'people/me',
            'requestMask.includeField': 'person.names'
        });
    }).then(function(response) {
        console.log(response.result);
    }, function(reason) {
        //console.log('Error: ' + reason.result.error.message);
        console.log('Error: ', reason);
    });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);