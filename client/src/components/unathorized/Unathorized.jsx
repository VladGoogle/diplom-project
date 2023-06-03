import "./style.css"
import { NavLink } from 'react-router-dom';

const Unathorized = ({ onClose }) => {


    return ( 
        <div className="unathorized__popup-bg">
        <div className="unathorized__popup">
            <div className="unathorized__icon" >
                <NavLink to="/">
                    <svg onClick={onClose} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5666 4.56639C20.641 4.492 20.7 4.4037 20.7403 4.30652C20.7805 4.20934 20.8012 4.10518 20.8012 3.99999C20.8012 3.89479 20.7805 3.79063 20.7403 3.69345C20.7 3.59627 20.641 3.50797 20.5666 3.43358C20.4922 3.3592 20.4039 3.3002 20.3068 3.25995C20.2096 3.21969 20.1054 3.19897 20.0002 3.19897C19.895 3.19897 19.7909 3.21969 19.6937 3.25995C19.5965 3.3002 19.5082 3.3592 19.4338 3.43358L12.0002 10.8688L4.56663 3.43358C4.49225 3.3592 4.40395 3.3002 4.30676 3.25995C4.20958 3.21969 4.10542 3.19897 4.00023 3.19897C3.89504 3.19897 3.79088 3.21969 3.6937 3.25995C3.59651 3.3002 3.50821 3.3592 3.43383 3.43358C3.35945 3.50797 3.30045 3.59627 3.26019 3.69345C3.21994 3.79063 3.19922 3.89479 3.19922 3.99999C3.19922 4.10518 3.21994 4.20934 3.26019 4.30652C3.30045 4.4037 3.35945 4.492 3.43383 4.56639L10.869 12L3.43383 19.4336C3.28361 19.5838 3.19922 19.7875 3.19922 20C3.19922 20.2124 3.28361 20.4162 3.43383 20.5664C3.58405 20.7166 3.78779 20.801 4.00023 20.801C4.21267 20.801 4.41641 20.7166 4.56663 20.5664L12.0002 13.1312L19.4338 20.5664C19.584 20.7166 19.7878 20.801 20.0002 20.801C20.2127 20.801 20.4164 20.7166 20.5666 20.5664C20.7168 20.4162 20.8012 20.2124 20.8012 20C20.8012 19.7875 20.7168 19.5838 20.5666 19.4336L13.1314 12L20.5666 4.56639V4.56639Z" fill="#050630"/>
                    </svg>
                </NavLink>
            </div>
            <div className="unathorized__popup-content">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_852_14)">
                        <path d="M31.25 43.75C30.3711 43.75 29.5573 43.5872 28.8086 43.2617C28.0599 42.9362 27.4089 42.4967 26.8555 41.9434C26.3021 41.39 25.8464 40.7227 25.4883 39.9414C25.1302 39.1602 24.9674 38.3464 25 37.5C25 36.6211 25.1628 35.8073 25.4883 35.0586C25.8138 34.3099 26.2533 33.6589 26.8066 33.1055C27.36 32.5521 28.0273 32.0964 28.8086 31.7383C29.5898 31.3802 30.4036 31.2174 31.25 31.25C32.1289 31.25 32.9427 31.4128 33.6914 31.7383C34.4401 32.0638 35.0911 32.5033 35.6445 33.0566C36.1979 33.61 36.6536 34.2773 37.0117 35.0586C37.3698 35.8398 37.5326 36.6536 37.5 37.5C37.5 38.3789 37.3372 39.1927 37.0117 39.9414C36.6862 40.6901 36.2467 41.3411 35.6934 41.8945C35.14 42.4479 34.4727 42.9036 33.6914 43.2617C32.9102 43.6198 32.0964 43.7826 31.25 43.75ZM68.75 31.25C69.6289 31.25 70.4427 31.4128 71.1914 31.7383C71.9401 32.0638 72.5911 32.5033 73.1445 33.0566C73.6979 33.61 74.1536 34.2773 74.5117 35.0586C74.8698 35.8398 75.0326 36.6536 75 37.5C75 38.3789 74.8372 39.1927 74.5117 39.9414C74.1862 40.6901 73.7467 41.3411 73.1934 41.8945C72.64 42.4479 71.9727 42.9036 71.1914 43.2617C70.4102 43.6198 69.5964 43.7826 68.75 43.75C67.8711 43.75 67.0573 43.5872 66.3086 43.2617C65.5599 42.9362 64.9089 42.4967 64.3555 41.9434C63.8021 41.39 63.3464 40.7227 62.9883 39.9414C62.6302 39.1602 62.4674 38.3464 62.5 37.5C62.5 36.6211 62.6628 35.8073 62.9883 35.0586C63.3138 34.3099 63.7533 33.6589 64.3066 33.1055C64.86 32.5521 65.5273 32.0964 66.3086 31.7383C67.0898 31.3802 67.9036 31.2174 68.75 31.25ZM50 0C54.5898 0 59.0169 0.585938 63.2812 1.75781C67.5456 2.92969 71.5332 4.60612 75.2441 6.78711C78.9551 8.9681 82.3242 11.5723 85.3516 14.5996C88.3789 17.627 90.9831 21.0124 93.1641 24.7559C95.3451 28.4993 97.0215 32.487 98.1934 36.7188C99.3652 40.9505 99.9674 45.3776 100 50C100 54.5898 99.4141 59.0169 98.2422 63.2812C97.0703 67.5456 95.3939 71.5332 93.2129 75.2441C91.0319 78.9551 88.4277 82.3242 85.4004 85.3516C82.373 88.3789 78.9876 90.9831 75.2441 93.1641C71.5007 95.3451 67.513 97.0215 63.2812 98.1934C59.0495 99.3652 54.6224 99.9674 50 100C45.4102 100 40.9831 99.4141 36.7188 98.2422C32.4544 97.0703 28.4668 95.3939 24.7559 93.2129C21.0449 91.0319 17.6758 88.4277 14.6484 85.4004C11.6211 82.373 9.01693 78.9876 6.83594 75.2441C4.65495 71.5007 2.97852 67.5293 1.80664 63.3301C0.634766 59.1309 0.0325521 54.6875 0 50C0 45.4102 0.585938 40.9831 1.75781 36.7188C2.92969 32.4544 4.60612 28.4668 6.78711 24.7559C8.9681 21.0449 11.5723 17.6758 14.5996 14.6484C17.627 11.6211 21.0124 9.01693 24.7559 6.83594C28.4993 4.65495 32.4707 2.97852 36.6699 1.80664C40.8691 0.634766 45.3125 0.0325521 50 0ZM50 93.75C54.0039 93.75 57.8613 93.2292 61.5723 92.1875C65.2832 91.1458 68.7663 89.681 72.0215 87.793C75.2767 85.9049 78.2389 83.61 80.9082 80.9082C83.5775 78.2064 85.8561 75.2604 87.7441 72.0703C89.6322 68.8802 91.1133 65.3971 92.1875 61.6211C93.2617 57.8451 93.7826 53.9714 93.75 50C93.75 45.9961 93.2292 42.1387 92.1875 38.4277C91.1458 34.7168 89.681 31.2337 87.793 27.9785C85.9049 24.7233 83.61 21.7611 80.9082 19.0918C78.2064 16.4225 75.2604 14.1439 72.0703 12.2559C68.8802 10.3678 65.3971 8.88672 61.6211 7.8125C57.8451 6.73828 53.9714 6.21745 50 6.25C45.9961 6.25 42.1387 6.77083 38.4277 7.8125C34.7168 8.85417 31.2337 10.319 27.9785 12.207C24.7233 14.0951 21.7611 16.39 19.0918 19.0918C16.4225 21.7936 14.1439 24.7396 12.2559 27.9297C10.3678 31.1198 8.88672 34.6029 7.8125 38.3789C6.73828 42.1549 6.21745 46.0286 6.25 50C6.25 54.0039 6.77083 57.8613 7.8125 61.5723C8.85417 65.2832 10.319 68.7663 12.207 72.0215C14.0951 75.2767 16.39 78.2389 19.0918 80.9082C21.7936 83.5775 24.7396 85.8561 27.9297 87.7441C31.1198 89.6322 34.6029 91.1133 38.3789 92.1875C42.1549 93.2617 46.0286 93.7826 50 93.75ZM50 62.5C54.4922 62.5 58.7402 63.4115 62.7441 65.2344C66.748 67.0573 70.2637 69.6615 73.291 73.0469L68.6035 77.1973C66.1947 74.4954 63.4115 72.4121 60.2539 70.9473C57.0964 69.4824 53.6784 68.75 50 68.75C46.3542 68.75 42.9525 69.4824 39.7949 70.9473C36.6374 72.4121 33.8379 74.4954 31.3965 77.1973L26.709 73.0469C29.7038 69.694 33.2031 67.1061 37.207 65.2832C41.2109 63.4603 45.4753 62.5326 50 62.5Z" fill="#ED2D2D" fill-opacity="0.7"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_852_14">
                            <rect width="100" height="100" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            <span className="unathorized__title">
                Your session has been expired
            </span>
            <p className="unathorized__text">
                Please, log in back to your account to continue 
            </p>
            </div>
        </div>
        </div>
     );
}
 
export default Unathorized;