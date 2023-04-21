import React, { useState } from "react";
import styles from "./NavBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function NavBar () {
    const [isNavBarSroll, setIsNavBarSroll] = useState(false); //Thiết lập Trạng thái scroll NavBar
    
    // Đặt Logic NavBar khi scroll hơn 100 px
    const scrollHandler = (event) => {
        if (window.scrollY > 100) {
            setIsNavBarSroll(true)
        } else {
            setIsNavBarSroll(false)
        }
        
    }
    
    window.addEventListener('scroll',scrollHandler) // Thêm sự kiện scroll window

    return(
        <React.Fragment>
            <div className={isNavBarSroll ? `${styles['navBar']} ${styles['navBar2']}` : `${styles['navBar']}` }> 
                <div className={styles['leftPart']}>
                    <a href="/" className={styles['homeLink']}>Movie App</a>
                </div>
                <div className={styles['rightPart']}>
                        <a href="/search" > 
                            <FontAwesomeIcon icon={faSearch} className={styles['search']}/>
                        </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar;