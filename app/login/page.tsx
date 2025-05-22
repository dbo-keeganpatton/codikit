'use client'


import Image from "next/image";
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from "./page.module.css";
import CabinIcon from '@mui/icons-material/Cabin';
import Link from "next/link";

export default function LoginPage() {
  



    const welcomeMessage = [
        "Welcome Back..",
        "Been a long time...",
        "Oh Hey, Where you been?",
        "Back to it!",
        "I missed you!",
        "Good to see you again!!",
        "Let's get writing!!"
    ];
    
    const [randomMessage, setRandomMessage] = useState("");


    useEffect(() => {
        const randomWelcomeMessage = Math.floor(Math.random() * welcomeMessage.length);
        setRandomMessage(welcomeMessage[randomWelcomeMessage]);
    }, []);

    const router = useRouter()

        

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
 
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPasssword')
     
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
                <h1 className={styles.indexHeader}> {randomMessage}  </h1>               
                <Image
                    src="/tree.svg"
                    fill={true}
                    alt="A Tree"
                    className={styles.treeImage}
                />
     
               <Link href="/">
               <CabinIcon className={styles.homeButton} fontSize="large"/>
               </Link>  
     

                <form onSubmit={handleSubmit} className={styles.formLayout}>
                    <input type="email" name="email" placeholder="Email" required className={styles.formInput} />
                    <input type="password" name="password" placeholder="Password" required className={styles.formInput}/>
                    <input type="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className={styles.formInput} />
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            
        </div>


    )
    }
