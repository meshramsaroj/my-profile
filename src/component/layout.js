import Head from "next/head"

const Layout = ({children}) => {
    return (
        <div className="">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{children}</main>
        </div>
    )
}

export default Layout;