import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - National Implementation Engineer</title>
          <meta
            property="og:title"
            content="test-page - National Implementation Engineer"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_401jze) => (
            <>
              <h1>{context_401jze?.Name}</h1>
            </>
          )}
          initialData={props.context401jzeProp}
          persistDataDuringLoading={true}
          key={props?.context401jzeProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context401jzeProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        context401jzeProp: context401jzeProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
