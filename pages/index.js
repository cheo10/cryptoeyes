import Head from 'next/head'
import Login from '../components/login'

export default() => (
        <div>
            <Head>
                <title>CryptoEyes</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" type="text/css" href="/static/semantic.min.css"></link>
                <script
                    src="https://code.jquery.com/jquery-3.1.1.min.js"
                    integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
                    crossOrigin="anonymous"></script>
                <script src="/static/semantic.min.js"></script>
            </Head>
            <Login />
        </div>
)
