function sendMessage() {
    var senderName = "Ramiro"
    var recipientAddress = "5035975330"
    var subject = "subject"
    var contentText = "text"
    var documentPart = 0
    var documentType = 0
    var contentData = null
    // const { loginId } = require('./login.js');

    const data = {
        "NSX": {
            "SendMessage": {
                "Subject": subject,
                "SenderName": senderName,
                "Recipient": {
                    "Address": recipientAddress
                },
                "Document": {
                    "ContentText": contentText,
                    "DocumentPart": documentPart,
                    "DocumentType": documentType,
                    "ContentData": contentData
                }
            }
        }
    }

    fetch('https://cloud.faxback.net/rest/Messages/SendMessage?LoginId=' + "017c0de8-7e9a-4b77-b30c-c0f04fc2b06d", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("Message sent")
            messageHandle = data.MessageHandle;
            alert("messageHandle: " + messageHandle)
            console.log('Success:', messageHandle); 
        })
        .catch((error) => {
            alert("Incorrect information")
            console.error('Error:', error);
            return;
        });

}

sendMessage()