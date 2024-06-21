import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/52da8bb1afafc71b5abf8f6994b09543.jpeg?lk3s=a5d48078&nonce=46136&refresh_token=0a55e6b8e7a2e5cf3abff7504e52f60e&x-expires=1718290800&x-signature=dzsKEGOZdCFa243m5KVrW7xf%2FGw%3D&shp=a5d48078&shcp=b59d6b55" alt="Haa" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hà 💋</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>lingg2809</span>
            </div>
        </div>
    );
}

export default AccountItem;