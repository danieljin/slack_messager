var request = require('request');

function message() {
    setTimeout(function() {
        request('https://slack.com/api/chat.postMessage?token=XXXXXXXXXXXXXXXXXXXXX&channel=fake_messages&text=fake message', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
                message();
            }
        })
    }, 1000);
}

message();
