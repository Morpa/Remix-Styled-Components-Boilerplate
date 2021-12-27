import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction
} from 'remix'
import { useContext } from 'react'
import { StyleContext } from './context'
import GlobalStyles from '~/styles/global'

export const meta: MetaFunction = () => {
  return { title: 'Remix Boilerplate' }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200&display=swap'
    }
  ]
}

export default function App() {
  const styles = useContext(StyleContext)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {styles !== null && (
          <style
            dangerouslySetInnerHTML={{
              __html: `</style>${styles}<style>`
            }}
          />
        )}
      </head>
      <body>
        <GlobalStyles />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
