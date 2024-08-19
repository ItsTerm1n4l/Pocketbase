onRecordAfterCreateRequest((e) => {
    const message = new MailerMessage({
        from: {
            address: $app.settings().meta.senderAddress,
            name:    $app.settings().meta.senderName,
        },
        to:      [{address: e.record.email()}],
        subject: "YOUR_SUBJECT...",
        html:    "YOUR_HTML_BODY...",
        // bcc, cc and custom headers are also supported...
    })

    $app.newMailClient().send(message)
}, "users")
