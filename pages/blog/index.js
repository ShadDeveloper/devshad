import Head from 'next/head'
import React from 'react'
import Main from './main'

function index() {
  return (
    <>
        <Head>
            <title>Blog | Dev Shad</title>
        </Head>

        <Main />
    </>
  )
}

export default index