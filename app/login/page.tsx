'use client'


import Image from "next/image";
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import styles from "./page.module.css";

export default function LoginPage() {
  

    const router = useRouter()



    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
 
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
     
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
     
        if (response.ok) {
          router.push('/')
        } else {
          // Handle errors
        }
      }
     
      return (

        <div className={styles.main}>
                <h1 className={styles.indexHeader}> Register </h1>               
                <Image
                    src="/tree.svg"
                    fill={true}
                    alt="A Tree"
                    className={styles.treeImage}
                />
     
                <form onSubmit={handleSubmit} className={styles.formLayout}>
                  <input type="email" name="email" placeholder="Email" required className={styles.formInput} />
                  <input type="password" name="password" placeholder="Password" required className={styles.formInput}/>
                  <button type="submit" className={styles.button}>Login</button>
                </form>
            
        </div>


    )
    }
