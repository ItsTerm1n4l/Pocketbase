package main

import (
	"log"
	"net/http"
	"net/mail"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/mailer"
)

func main() {
	app := pocketbase.New()

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.AddRoute(echo.Route{
			Method: http.MethodGet,
			Path:   "/api/email",
			Handler: func(c echo.Context) error {
message := &mailer.Message{
	From: mail.Address{
		Address: app.Settings().Meta.SenderAddress,
		Name:    app.Settings().Meta.SenderName,
	},
	To:      []mail.Address{{Address: "djccordle@protonmail.com"}},
	Subject: "YOUR_SUBJECT...",
	HTML:    "YOUR_HTML_BODY...",
	// bcc, cc, attachments and custom headers are also supported...
}

app.NewMailClient().Send(message)

				return c.String(http.StatusOK, "Email sent!")
			},
			Middlewares: []echo.MiddlewareFunc{
				apis.ActivityLogger(app),
				// enable this to require admin auth
				// apis.RequireAdminAuth(),
			},
		})

		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
