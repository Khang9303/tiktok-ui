import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok'></img>
            </div>
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
            <div className={cx('actions')}>
                <button>Upload</button>
                <button>Log in</button>
            </div>
        </div>
    </header>;
}

export default Header;