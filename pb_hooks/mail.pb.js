onRecordAfterCreateRequest((e) => {
  //console.log(JSON.stringify(e.record));
  //  let col1Id = e.record.get("col1");
  //  console.log(col1Id);
  let col1 = $app.dao().findRecordById("col1", e.record.get("col1"));
  let col2 = $app.dao().findRecordById("col2", e.record.get("col2"));
  let col3 = $app.dao().findRecordById("col3", e.record.get("col3"));
  let col4 = $app.dao().findRecordById("col4", e.record.get("col4"));

  let col1price = col1.get("price");
  let col2price = col2.get("price");
  let col3price = col3.get("price");
  let col4price = col4.get("price");
  //  let loaded = fetch("./content.html", { mode: "no-cors" });
  //  console.log(loaded);
  //fetch("./package.json")
  //  .then((response) => response.text())
  //  .then((data) => {
  //    console.log(data);
  //  });
  //  console.log(col1.get("brand"));
  const mailHtml = $template.loadFiles(`${__hooks}/views/mail.html`).render({
    col1name: col1.get("name"),
    col2name: col2.get("name"),
    col3name: col3.get("name"),
    col4name: col4.get("name"),
    col1price: col1.get("price"),
    col2price: col2.get("price"),
    col3price: col3.get("price"),
    col4price: col4.get("price"),
    totalPrice:
      +col1.get("price") +
      +col2.get("price") +
      +col3.get("price") +
      +col4.get("price"),
  });
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName,
    },
    to: [{ address: e.record.email() }],
    subject: "Subject",
    html: mailHtml,
    //`<h1>abc</h1><div><p>${col1.get("name")}</p><p>${col1.get("price")}</p></div><div><p>2</p></div><div><p>3</p></div><div><p>4</p></div>`,
    // bcc, cc and custom headers are also supported...
  });

  $app.newMailClient().send(message);
}, "finished");
