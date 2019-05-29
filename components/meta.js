// components/meta.js
import Head from 'next/head'
export default ({ props }) => (
  <div>
    <Head>
      <title>{props.title || 'Next.js Test Title'}</title>
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
      <meta
        name="description"
        content={props.description || 'Next.js Test Description'}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  </div>
)
