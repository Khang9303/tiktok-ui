import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wapper as PopperWapper } from "~/components/Popper";
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';



const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    return <header className={cx('wapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok'></img>
            </div>
            <Tippy
                interactive={true}
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        placeholder='Search acounts and videos'
                        spellCheck={false}
                    />
                    <button className={cx('clear')}>
                        {/* CLear */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading-spiner')} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                <Button primary>Log in</Button>
            </div>
        </div>
    </header>;
}

export default Header;