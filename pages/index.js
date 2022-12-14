import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed';
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({session}) {
  if (!session) return <Login />;

  return (
    <div className='bg-gray-100 h-screen'>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>
       <div className='flex '>
       <Sidebar/>
         <Feed />
       
         
       </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props :{
  session
    }
  }
}