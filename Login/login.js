function auth() {
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value
    const data = {
        "NSX": {
            "Credentials": {
                "UserName": userName,
                "PW2": password
            }
        }
    };

    fetch('https://ipfone-nsx.ipfone.com/rest/mqs/NSX/Login?_content=json&id=12731518-1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("You are successfully logged in")
            loginId = data.NSX.LoginId;
            alert("loginId: " + loginId)
            handleSetShare();
        })
        .catch((error) => {
            alert('Error:', error);
            console.error('Error:', error);
            return;
        });
}


// Create a new Webex app instance
var app = new window.Webex.Application();

// Wait for onReady() promise to fulfill before using framework
app.onReady().then(() => {
    log("App ready. Instance", app);
}).catch((errorcode) => {
    log("Error with code: ", Webex.Application.ErrorCodes[errorcode])
});

// Button click handler to set share URL
function handleSetShare() {
    // Replace this with the URL of your shared page
    var url = "https://ramirovolodarsky.github.io/fax-sender-app/index.html"
    // "Shared App" is the title of the window or tab that will be created
    app.setShareUrl(url, "", "Shared App").then(() => {
        log("Set share URL", url);
    }).catch((errorcode) => {
        log("Error: ", Webex.Application.ErrorCodes[errorcode])
    });
}

// Utility function to log app messages
function log(type, data) {
    var ul = document.getElementById("console");
    var li = document.createElement("li");
    var payload = document.createTextNode(`${type}: ${JSON.stringify(data)}`);
    li.appendChild(payload)
    ul.prepend(li);
}