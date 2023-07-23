'use client'
import {useState} from 'react'
import styles from './nav.module.css'
import Link from 'next/link';
import Image from 'next/image';




const page = (props:any) => {
    const { userName } = props;
    const [showDropDown,setDropDown] =useState(false);
    const handleDropDown = (e:any)=> {
e.preventDefault;
setDropDown(!showDropDown);
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a href="" className={styles.logoLink}>
                    <div className={styles.logoWrapper}>
                        <Image src='./static/netflix.svg' alt="logo" width="138" height="34"/>
                    </div>
                </a>

                <ul className={styles.navItems}>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem2}>My List</li>
                </ul>

                <nav className={styles.navContainer}>
                    <div>
                        <button className={styles.usernameBtn} onClick={handleDropDown}>
                            <p className={styles.username}>{userName}
                            <Image src='./static/expand_more.svg' alt="expand_more" width="24" height="24"/>
                            </p>
                        </button>
                        {showDropDown && ( <div className={styles.navDropdown}>
                            <div>
                                <Link href="/login" className={styles.linkName}>
                                Sign Out
                                </Link>
                                <div className={styles.lineWrapper}></div>
                            </div>
                        </div>)}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default page