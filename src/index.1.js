const titleEl = document.getElementById('title');
titleEl.innerHTML = 'updated by js';

const config = {
    'client_id': '58484816324-21gedgkevgnepkiukniofhqoi0gn488m.apps.googleusercontent.com',
    'scope': 'https://www.google.com/m8/feeds'
};

function start() {
    console.log('gapi load callback called');

    function fetch(token) {
        $.ajax({
            url: 'https://www.google.com/m8/feeds/contacts/default/full?alt=json',
            dataType: 'jsonp',
            data: token
        }).done(function(data) {
            console.log(JSON.stringify(data));
        });
    }

    gapi.auth.authorize(config, function() {
        fetch(gapi.auth.getToken());
    });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);