'use client'

import React, { useState } from "react";
import styles from "./signup.module.css";
import TemporaryDrawer from '@/components/sideBar';
import Image from "next/image";
import Form from "next/form";
import Link from "next/link";
import CabinIcon from "@mui/icons-material/Cabin";
import { createNewUserHandler } from "../api/userSignUp/route.ts";


export default function signup () {
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('')


    const userSignUpHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        if ( password != confirmPassword ) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const res = await fetch('/api/userSignUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, password, confirmPassword})
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.message || "Failed to create account");

            } else {
                console.log("Account created!");
            }
        
        } catch (err) {
          setError("Something is wrong");
        } 
    };






    return (

    <div>
        <Link href="/">
        <CabinIcon className={styles.homeButton} fontSize="large"/>
        </Link>  
        
        <div style={{ position: 'absolute', left: '0px'}}>
        <TemporaryDrawer />
        </div>

        <div className={styles.mainParent}>

            <main className={styles.main}>
            <h1 className={styles.indexHeader}> Register </h1>
                
                <Image
                    src="/tree.svg"
                    fill={true}
                    alt="A Tree"
                    className={styles.treeImage}
                />
               
                <form  onSubmit={userSignUpHandler} className={styles.signupForm}>
                    <input 
                            name="name" 
                            placeholder="User Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={styles.formInput}
                    />
                    <input 
                            name="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.formInput}
                    />
                    <input 
                            name="confirmPassword" 
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className={styles.formInput}
                    />
                    
                    <button type="submit" className={styles.button}>Create Account</button>
                    {error && <p className={styles.error}>{error}</p>}
                
                </form>

                
            </main>

        </div>
    </div>
    );
};

