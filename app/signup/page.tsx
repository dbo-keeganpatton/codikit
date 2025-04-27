'use client'

import React from "react";
import styles from "./signup.module.css";
import TemporaryDrawer from '@/components/sideBar';
import Image from "next/image";
import Form from "next/form";
import Link from "next/link";
import CabinIcon from "@mui/icons-material/Cabin"

export default function signup () {
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
               
                <Form action="/" className={styles.signupForm}>
                    <input name="User Name" placeholder="User Name"/>
                    <input name="Password" placeholder="Password" type="password"/>
                    <input name="Confirm Password" placeholder="Confirm Password" type="password"/>
                    <button type="submit">Create Account</button>
                </Form>

                
            </main>

        </div>
    </div>
    );
};

