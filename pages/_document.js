import Document, { Html, Head, Main, NextScript } from "next/document";

//Este documento se encarga de editar las diferentes partes del HTML
//de cada pagina de nuestra app.

class MyDocument extends Document {

    render() {

        return (
            
            <Html>

                <Head>
                    <meta name="description" content="Ryan Ray Portfolio WEbsite" />
                    {/* Nprogress css */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
                    />
                </Head>
                
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>

        );

    }

}

export default MyDocument;