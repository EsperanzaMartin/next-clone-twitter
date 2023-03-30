import Head from 'next/head'
import Link from 'next/link' 
import styles from '@/styles/Home.module.css'

export default function Timeline({ username, ...props }) {
   
    return(<>
     <Head>
        <title>Devtter 🐦</title>        
      </Head>
     <main className={styles.main}> 
        <h1>Este es el histórico de mensajes de {username}</h1>
        <Link href="/">Volver a la home</Link>    
    </main>
    </>)
    
}

//De esta manera podemos añadir las props que va a usar el componente
//getStaticProps() --> solo se usa en páginas 
export async function getStaticProps () {
    // return { props: {username: '@EspePop'}}
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response =>{
        console.log(response);
        const {username} = response
        return {props: {username}}
    })
}

