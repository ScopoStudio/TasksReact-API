const mail = params => {
  const { title = 'B.onuz', subtitle = '', name = '', body = '', actionURL = '', actionLabel = '', disclaimer = '' } = params

  return `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br" style="background:#f3f3f3!important">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <title>${title}</title>
  <style>
    @media only screen {
      html {
        min-height: 100%;
        background: #f3f3f3
      }
    }

    @media only screen and (max-width:596px) {
      .small-float-center {
        margin: 0 auto !important;
        float: none !important;
        text-align: center !important
      }
    }

    @media only screen and (max-width:596px) {
      table.body img {
        width: auto;
        height: auto
      }

      table.body center {
        min-width: 0 !important
      }

      table.body .container {
        width: 95% !important
      }

      table.body .columns {
        height: auto !important;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 16px !important;
        padding-right: 16px !important
      }

      table.body .columns .columns {
        padding-left: 0 !important;
        padding-right: 0 !important
      }

      table.body .collapse .columns {
        padding-left: 0 !important;
        padding-right: 0 !important
      }

      th.small-6 {
        display: inline-block !important;
        width: 50% !important
      }

      th.small-12 {
        display: inline-block !important;
        width: 100% !important
      }

      .columns th.small-12 {
        display: block !important;
        width: 100% !important
      }

      table.menu {
        width: 100% !important
      }

      table.menu td,
      table.menu th {
        width: auto !important;
        display: inline-block !important
      }

      table.menu.vertical td,
      table.menu.vertical th {
        display: block !important
      }

      table.menu[align=center] {
        width: auto !important
      }
    }
  </style>
</head>

<body
  style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#f3f3f3!important;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;text-align:left;width:100%!important">
  <span class="preheader"
    style="color:#f3f3f3;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span>
  <table class="body"
    style="Margin:0;background:#f3f3f3!important;border-collapse:collapse;border-spacing:0;color:#ffffff;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:100%;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;width:100%">
    <tr style="padding:0;text-align:left;vertical-align:top">
      <td class="center" align="center" valign="top"
        style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#ffffff;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
        <center data-parsed="" style="min-width:580px;width:100%">
          <table align="center" class="container float-center"
            style="Margin:0 auto;background:#fefefe;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:580px">
            <tbody>
              <tr style="padding:0;text-align:left;vertical-align:top">
                <td
                  style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#ffffff;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                  <table class="row header"
                    style="background: #f3f3f3;color:white;border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
                    <tbody>
                      <tr style="padding:0;text-align:left;vertical-align:top">
                        <th class="small-12 large-12 columns first last"
                          style="Margin:0 auto;color:#ffffff;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:0;padding-left:16px;padding-right:16px;text-align:left;width:564px">
                          <table
                            style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                            <tr style="padding:0;text-align:left;vertical-align:top">
                              <th
                                style="Margin:0;color:#ffffff;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                                <table class="spacer"
                                  style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                  <tbody>
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <td height="16px"
                                        style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#ffffff;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                                        &#xA0;</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <center data-parsed="" style="min-width:532px;width:100%">
                                  <img src="https://bonuz-mailer.s3-sa-east-1.amazonaws.com/logo.png" align="center" class="float-center"
                                    style="-ms-interpolation-mode:bicubic;Margin:0 auto;clear:both;display:block;float:none;margin:30px auto;max-width:100%;outline:0;text-align:center;text-decoration:none;width:auto">
                                </center>
                              </th>
                              <th class="expander"
                                style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0">
                              </th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row header"
                    style="background:#9C2543;color:white;border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
                    <tbody>

                      <tr style="padding:0;text-align:left;vertical-align:top">
                        <th class="small-12 large-12 columns first last"
                          style="Margin:0 auto;color:#ffffff;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:0;padding-left:16px;padding-right:16px;text-align:left;width:564px">
                          <table
                            style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                            <tr style="padding:0;text-align:left;vertical-align:top">
                              <th
                                style="Margin:0;color:#ffffff;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                                <table class="spacer"
                                  style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                  <tbody>
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <td height="16px"
                                        style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#ffffff;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                                        &#xA0;</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <h4 class="text-center"
                                  style="Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:30px;font-weight:300;line-height:2;margin:0;margin-bottom:10px;padding:0;text-align:center;word-wrap:normal">
                                  ${title}</h4>
                              </th>
                              <th class="expander"
                                style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0">
                              </th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row"
                    style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
                    <tbody>
                      <tr style="padding:0;text-align:left;vertical-align:top">
                        <th class="small-12 large-12 columns first last"
                          style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:16px;text-align:left;width:564px">
                          <table
                            style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                            <tr style="padding:0;text-align:left;vertical-align:top">
                              <th
                                style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                                <table class="spacer"
                                  style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                  <tbody>
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <td height="32px"
                                        style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:32px;font-weight:400;hyphens:auto;line-height:32px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                                        &#xA0;</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table class="spacer"
                                  style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                  <tbody>
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <td height="16px"
                                        style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                                        &#xA0;</td>
                                    </tr>
                                  </tbody>
                                </table>
                                ${
                                  subtitle
                                    ? `<h1 class="text-center"
                                  style="Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:34px;font-weight:300;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center;word-wrap:normal">
                                  ${subtitle}</h1>`
                                    : ''
                                }
                                <p class="text-center"
                                  style="Margin:0;Margin-bottom:10px;color:#636363;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:300;line-height:1.3;margin:0;margin-bottom:10px;padding:0">
                                  Olá, <b>${name}</b>.
                                </p>
                                <p class="text-center"
                                  style="Margin:0;Margin-bottom:10px;color:#636363;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:300;line-height:1.3;margin:0;margin-bottom:10px;padding:0">
                                  ${body}
                                </p>
                                ${
                                  actionURL && actionLabel
                                    ? `<table class="button large expand"
                                style="Margin:0 0 16px 0;border-collapse:collapse;border-spacing:0;margin:0 0 16px 0;padding:0;text-align:left;vertical-align:top;width:100%!important">
                                <tr style="padding:0;text-align:left;vertical-align:top">
                                  <td
                                    style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                                    <table
                                      style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                      <tr style="padding:0;text-align:left;vertical-align:top">
                                        <td
                                          style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;background:#EF4D5A;border:2px solid #EF4D5A;border-collapse:collapse!important;color:#fefefe;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                                          <center data-parsed="" style="min-width:0;width:100%"><a href="${actionURL}"
                                              align="center" class="float-center"
                                              style="Margin:0;border:0 solid #EF4D5A;border-radius:3px;color:#fefefe;display:inline-block;font-family:Helvetica,Arial,sans-serif;font-size:20px;font-weight:700;line-height:1.3;margin:0;padding:10px 20px 10px 20px;padding-left:0;padding-right:0;text-align:center;text-decoration:none;width:100%">${actionLabel}
                                            </a></center>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td class="expander"
                                    style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!important;text-align:left;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word">
                                  </td>
                                </tr>
                              </table><br />
                              <br />`
                                    : '<br />'
                                }
                                <p
                                  style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:center">
                                  <small style="color:#cacaca;font-size:80%">
                                  ${disclaimer ? `<small>${disclaimer}</small><br /><br />` : ''}
                                    Obrigado pela atenção.
                                    <br />
                                    Equipe B.onuz
                              </th>
                              <th class="expander"
                                style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0">
                              </th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </td>
    </tr>
  </table>
</body>

</html>`
}

module.exports = mail
