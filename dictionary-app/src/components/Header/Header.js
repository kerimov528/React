import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='d-flex align-items-center justify-content-around bg-white px-5'>
            <div className='left'>
                <Link to={'/'} className='link'>
                    FlashCards
                </Link>
            </div>
            <div className='d-flex flex-column align-items-center center'>
                <div className='pt-3'><span>4</span>/<span>42</span></div>
                <h4 className='pb-2'>Vocabulary Quiz</h4>
            </div>
            <div className='right'>
                <ul className='d-flex align-items-center m-0 p-0'>
                    <Link to={'/revise-later'} className='link'>
                    <li className='pe-3'>Revise Later</li>
                    </Link>
                    <Link to={"/favourite"} className='link'>
                    <li className='pe-3'>Favourite Words</li>
                    </Link>
                    <Link to={'/learned'} className='link'>
                    <li>Learned</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
