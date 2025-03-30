'use client'

import React from "react";
import styles from "./signup.module.css";
import TemporaryDrawer from '@/components/sideBar';
import Image from "next/image";
import Form from "next/form";


export default function signup () {
    return (
    <div className={styles.mainParent}>
        <TemporaryDrawer />

        <main className={styles.main}>
        <h1 className={styles.indexHeader}> Register </h1>
            
            <Image
                src="/tree.svg"
                fill={true}
                alt="A Tree"
                className={styles.treeImage}
            />
           
            <Form action="/">
                <input name="User Name"/>
                <input name="Password"/>
                <input name="Confirm Password"/>
                <button type="submit">Create Account</button>
            </Form>

            
        </main>

    </div>
    );
};

