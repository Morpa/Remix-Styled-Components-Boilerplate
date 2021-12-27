import ReactDOMServer, { renderToString } from 'react-dom/server'
import { RemixServer, EntryContext } from 'remix'
import { ServerStyleSheet } from 'styled-components'
import { StyleContext } from './context'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  //styled components sheet
  const sheet = new ServerStyleSheet()

  renderToString(
    sheet.collectStyles(
      <StyleContext.Provider value={null}>
        <RemixServer context={remixContext} url={request.url} />
      </StyleContext.Provider>
    )
  )

  // Now that we've rendered, we get the styles out of the sheet
  const styles = sheet.getStyleTags()

  sheet.seal()

  const markup = ReactDOMServer.renderToString(
    <StyleContext.Provider value={styles}>
      <RemixServer context={remixContext} url={request.url} />
    </StyleContext.Provider>
  )

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  })
}
