import "./style.css"
import { NavLink } from "react-router-dom";

const NavbarTop = (props) => {
    return ( 
        <div className="container">
        <div className="header__top">
          <div className="header__top-left">
            <NavLink to="/" className="logo">
              <svg
                alt="logo"
                width="367"
                height="94"
                viewBox="0 0 367 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3185 49.8088C16.1677 49.7289 15.8722 49.5572 15.8963 49.5093C15.9265 49.4494 15.7155 48.7606 16.2883 48.7007C16.7466 48.6527 16.8813 49.1399 16.8913 49.3895C16.7607 49.5492 16.4632 49.8627 16.3185 49.8387M18.2783 47.4129C18.8009 49.3096 20.2984 53.4865 22.1074 55.0199C24.3687 56.9366 24.7607 57.2361 25.9366 56.7869C26.1476 56.5572 26.6059 56.104 26.7506 56.128C26.8953 56.1519 27.434 56.9765 27.6853 57.3858C27.7757 57.4457 28.0049 57.5535 28.1979 57.5056C28.3908 57.4577 28.1577 58.0048 28.017 58.2843C28.3285 58.4939 29.03 58.8893 29.3436 58.7934C29.7355 58.6736 29.1928 59.602 30.3989 60.0812C31.6049 60.5604 32.63 60.0213 32.6602 59.8117C32.6903 59.602 32.5697 60.4406 33.5345 60.0812L33.9265 60.8L34.62 60.2609L34.6501 59.8716L34.9215 60.0812L35.1627 59.6919L35.4943 59.8716V59.602L35.9164 59.4224V59.1828L36.3385 59.033C36.439 58.9132 36.622 58.6257 36.5496 58.434C36.4591 58.1945 36.6702 58.6137 37.0622 57.9549C37.3757 57.4278 37.5144 57.4357 37.5446 57.5056L37.9365 56.7869C38.0571 56.6271 38.3285 56.2178 38.4491 55.8584C38.5998 55.4092 39.9265 55.3194 40.3787 52.8935C40.7405 50.9528 39.9466 48.0917 39.5044 46.9038L38.2682 43.25M16.5294 22.2048C16.5976 21.921 16.8448 21.3363 17.2887 21.2682C17.2011 20.4829 17.0784 18.8613 17.2887 18.6569C17.4055 18.1365 17.8669 16.9142 18.778 16.1876C18.9629 15.9605 19.5255 15.3928 20.2965 14.9387C21.0674 14.4846 21.8442 14.3143 22.1362 14.2859L23.5087 14.2291C23.6255 14.1629 24.1103 14.0248 25.1148 14.0021C26.3705 13.9737 28.5899 14.2291 29.8748 15.2509C30.9027 16.0684 31.4711 16.8782 31.6269 17.181C31.9676 17.8906 32.6022 19.3495 32.4153 19.5084C32.7755 20.3221 33.6068 22.0345 34.0507 22.3751C34.3135 22.8765 34.8216 23.9986 34.7515 24.4755C34.8294 24.6363 34.9676 25.0091 34.8975 25.2134C34.9851 25.308 35.1603 25.5256 35.1603 25.6392C35.1603 25.7527 35.1214 25.8757 35.1019 25.923L35.0435 26.0081L35.2187 26.1217C35.2382 26.1595 35.2596 26.2409 35.1895 26.2636C35.1195 26.2863 35.1214 26.4055 35.1311 26.4623L35.2479 26.6042C35.2869 26.7272 35.3472 27.0016 35.2771 27.1151C35.1895 27.257 35.4524 27.1151 35.5108 27.5125C35.5108 27.5787 35.4874 27.7225 35.394 27.7679C35.5108 27.8531 35.54 28.0234 35.4524 28.0517C35.5497 28.1369 35.7093 28.3526 35.5692 28.5342C35.6276 28.6478 35.721 28.9089 35.6276 29.0451C35.5341 29.1814 35.6665 29.3101 35.7444 29.3574C35.7833 29.4236 35.8437 29.5844 35.7736 29.698C35.7035 29.8115 35.9975 30.1805 36.1532 30.3508C36.1824 30.4548 36.1999 30.6687 36.0364 30.6914C35.8729 30.7141 36.1435 30.8522 36.2992 30.9184C36.2797 31.013 36.2116 31.2136 36.0948 31.259C36.1921 31.3726 36.3401 31.6394 36.1532 31.7983C36.2116 31.9308 36.3109 32.2411 36.2408 32.4227C36.1707 32.6044 36.2116 32.9904 36.2408 33.1607L36.4744 34.2109L36.6496 34.4096C36.6594 34.4947 36.6672 34.6764 36.6204 34.7218C36.5737 34.7672 36.7178 34.8732 36.7957 34.9205C36.8151 35.0434 36.8424 35.2951 36.7957 35.3178C36.7489 35.3405 36.7178 35.3273 36.708 35.3178L36.6788 35.4597C36.708 35.526 36.784 35.6584 36.8541 35.6584C36.9241 35.6584 36.8638 35.999 36.8249 36.1693L37.0001 36.3964C36.9806 36.5005 36.9533 36.7199 37.0001 36.7654C37.0468 36.8108 37.0974 36.9167 37.1169 36.964V37.4749L37.1461 38.0426L37.2045 38.7238C37.2531 38.9225 37.3739 39.3312 37.4673 39.3766C37.5607 39.422 38.8301 41.7797 39.453 42.9529V43.4922C39.9495 44.022 40.9365 45.1668 40.9131 45.5074C41.5751 46.321 42.8989 48.0675 42.8989 48.5444C43.3272 49.3959 44.1604 51.2294 44.067 51.7517C44.32 52.5653 44.8145 54.3913 44.7678 55.186C44.943 56.6903 45.1883 59.8295 44.7678 60.3518C44.7289 61.3452 44.5167 63.8656 43.9794 66M15.2721 25.7C15.2365 25.3568 15.1953 24.5643 15.3147 24.14C15.4639 23.6096 15.6557 22.58 16.5294 21.8M16.3311 36.1L17.19 34.8566L17.1308 34.6198L17.3381 34.3237V34.1165L17.5454 33.9685L17.5158 33.7317L18.0786 32.8731L18.7598 31.3337L19.4706 29.0542L19.589 28.6397L19.6483 28.1661L19.7075 26.4194C19.7075 26.3109 19.6305 26.0583 19.3225 25.9162C18.9375 25.7385 18.9078 25.4425 18.4636 25.028M18.4636 25.028L17.6047 24.9392L17.0419 24.6432M18.4636 25.028C19.5496 24.2583 22.0414 22.7959 23.3209 23.1038C23.538 23.0248 23.8658 22.8077 23.4393 22.5709C22.9753 22.3045 21.7215 21.9551 20.4183 22.6893C19.7344 23.0746 19.3252 23.2485 19.0921 23.311M17.0419 24.6432C16.7754 24.6827 16.1712 24.7438 15.8869 24.6728C15.6025 24.6017 15.6894 25.3142 15.7684 25.6793L15.7092 25.7385C15.6499 25.7583 15.4722 25.703 15.2353 25.3241M17.0419 24.6432C17.3085 24.2879 17.9897 23.5656 18.5821 23.5182C18.7147 23.4985 19.0025 23.4294 19.0921 23.311M16.5681 21.9492C16.8998 21.8308 17.2394 21.8012 17.3677 21.8012C18.2859 21.7716 18.7598 22.3045 18.8782 22.3637C18.973 22.411 18.8782 22.9952 18.819 23.2814C18.8143 23.333 18.881 23.3676 19.0921 23.311M21.5992 21.8C21.5892 21.5695 21.4254 21.1136 20.8501 21.1341C20.8501 21.0061 20.892 20.7448 21.0598 20.7243C21.2696 20.6987 20.91 20.5451 20.8201 20.6475C20.7302 20.75 20.88 20.3146 21.0598 20.289C21.2037 20.2685 20.9799 20.1097 20.8501 20.0329M20.8501 20.0329C21.1098 19.8621 21.6292 19.5053 21.6292 19.4438C21.6292 19.367 21.749 18.7523 21.6891 18.573C21.6292 18.3938 21.2396 17.8303 20.88 17.9072C20.5204 17.984 19.6215 18.3425 19.3218 18.573C19.2719 18.6755 19.166 18.8906 19.142 18.9316C19.118 18.9726 18.7724 19.1365 18.6026 19.2133C18.5627 19.2901 18.4888 19.4643 18.5127 19.5462M20.8501 20.0329C20.5904 19.7682 19.9571 19.2492 19.5016 19.2901C18.9656 19.3384 18.1375 20.0448 17.8673 20.3197M18.5127 19.5719C18.326 19.7315 17.9541 20.0896 17.8673 20.3197M17.8673 20.3197C17.8613 20.3357 17.8566 20.3511 17.8535 20.3658M17.8673 20.3197C17.8505 20.3368 17.8358 20.3523 17.8235 20.3658M43.7059 66H1C1.36095 63.8953 2.15505 59.7935 2.44381 60.2239C2.73257 60.6542 2.56413 59.9501 2.44381 59.5443C2.36051 59.4122 2.19392 59.1196 2.19392 59.0063C2.19392 58.8648 2.11062 58.7798 2.27722 57.8738C2.44381 56.9677 2.49934 55.9201 3.11018 54.1646C3.59886 52.7602 6.83077 47.8977 8.38565 45.6419L13.5778 40.6303L13.6333 40.5454L13.5223 40.2339C14.2072 38.8937 15.638 36.1906 15.8824 36.1V37.5992C16.1076 38.363 16.7461 40.0829 17.4982 40.8523M19.1176 21.7986V21.182M25.5882 20.8992C25.8778 20.667 26.4972 20.1966 26.6576 20.1724C26.818 20.1481 27.1254 19.5364 27.2591 19.2336C27.5152 18.9812 28.1279 18.4947 28.5289 18.5673C28.7962 18.5371 29.3843 18.5249 29.5982 18.7188C29.8655 18.961 30.1997 19.385 30.0994 19.597C30.0192 19.7666 30.066 20.3137 30.0994 20.5661C29.9881 20.8285 29.6851 21.3837 29.3643 21.5049C29.1415 21.6361 28.5422 21.8743 27.9274 21.7774C27.2256 21.5856 25.7754 21.1475 25.5882 20.9295M17.4982 40.8523C18.2503 41.6217 21.6896 43.7377 23.3153 44.6994L22.7865 42.4647C22.9627 42.3233 23.4093 42.0121 23.7854 41.899C24.1614 41.7858 24.9605 42.0027 25.3131 42.1253C25.46 42.163 25.7831 42.2158 25.9007 42.1253C26.0182 42.0347 26.831 42.4836 27.2227 42.7193C27.3598 42.7382 27.6752 42.7363 27.8397 42.5779C28.0042 42.4195 28.535 42.5758 28.7504 42.6889C29.0507 42.5576 29.8345 42.3146 30.567 42.393M17.4982 40.8523C17.8606 41.833 18.5617 43.9244 18.4677 44.4448C18.3502 45.0955 18.4971 47.0756 18.3502 47.6131C18.2327 48.043 18.3012 51.7902 18.3502 53.61C18.3502 54.6755 18.2679 57.0045 17.9389 57.7966C17.6099 58.5886 16.7637 62.1812 16.3818 63.8784L15.9411 66M23.3153 44.8409C23.7384 45.5877 25.2151 47.151 25.9007 47.8394C28.8092 43.964 29.3674 43.8508 29.338 43.9074C29.3086 43.964 30.4838 43.8791 30.5132 43.8225C30.5367 43.7773 30.5622 43.8791 30.5719 43.9357C30.5249 43.4831 33.7645 46.2175 35.3901 47.6413C36.2363 45.8536 36.4086 44.954 36.389 44.7277L35.919 44.2751C36.2863 43.7987 36.9591 42.8613 37.3281 42.1535M37.3281 42.1535C37.4411 41.9368 37.5256 41.7416 37.5642 41.5878C37.7287 40.9315 37.4956 39.8811 37.3585 39.4379H37.241V39.4945C37.3585 39.5624 36.9179 40.2206 36.6828 40.5412L33.9212 41.9555C33.0184 42.122 30.5334 42.6356 30.567 42.393M37.3281 42.1535C37.6614 42.8607 38.3516 44.2977 38.4456 44.3883C38.5631 44.5014 39.8558 47.6413 39.9733 47.6696C40.0673 47.6923 41.3835 50.6587 42.0298 52.1391L42.4118 56.0428C42.3824 56.8348 42.306 58.5094 42.2355 58.8715C42.1474 59.3241 42.2061 61.2194 42.0005 61.8134C41.5598 63.18 40.649 65.9187 40.5315 65.9414M30.5719 42.3778C30.5693 42.3831 30.5677 42.3882 30.567 42.393M35.674 43.9L35.9412 41.4855C35.5949 41.3775 34.7658 41.2028 34.2196 41.3677C33.537 41.5738 33.5963 41.6622 33.2105 41.6622H32.7059M27.0549 21.3997C26.9553 21.1415 26.7935 20.5296 26.9429 20.1483C27.0923 19.7669 27.7768 19.4332 28.1004 19.314C28.3369 19.2544 28.9443 19.1531 29.482 19.2246C30.0197 19.2961 30.1292 20.2674 30.1167 20.7442C30.0296 20.9528 29.7956 21.3997 29.5566 21.5189C29.2579 21.6679 27.279 22.1148 27.0549 21.4295M27.0049 19.7024C27.2466 19.7383 27.7623 19.7884 27.8912 19.7024C28.0201 19.6164 28.0255 19.3559 28.012 19.2365M16.5294 35.45C16.8194 37.0014 18.7783 40.4735 24.2941 41.95M27.5286 21.1003C27.3003 20.9091 26.8518 20.4694 26.884 20.2401C26.9243 19.9533 27.0049 19.2006 27.6092 19.2006C28.2135 19.2006 28.3746 19.1648 28.6566 19.6307C28.8822 20.0035 28.8312 20.5507 28.7775 20.7777C28.5895 20.9569 28.0765 21.2723 27.5286 21.1003ZM15.4268 44.55C15.363 44.6203 15.2353 44.803 15.2353 44.9716C15.2353 45.1824 15.2627 45.9203 15.8372 46.5C16.0123 46.247 15.6365 45.0946 15.4268 44.55Z"
                  stroke="#050630"
                />
                <path
                  d="M72.92 20.304L82.44 20.1C82.8027 20.1 82.984 20.4853 82.984 21.256C82.984 22.0267 82.8027 22.412 82.44 22.412H79.516C78.3827 22.412 77.6347 22.6387 77.272 23.092C76.9093 23.5 76.728 24.316 76.728 25.54V63.28H80.672C87.88 63.28 92.8667 62.328 95.632 60.424L96.108 56.684C96.1987 56.3213 96.584 56.14 97.264 56.14C97.9893 56.14 98.352 56.276 98.352 56.548L97.74 67.496C97.74 67.8133 97.3773 67.972 96.652 67.972C95.972 67.972 95.632 67.8133 95.632 67.496V66H73.532L64.012 66.136C63.6493 66.136 63.468 65.7507 63.468 64.98C63.468 64.2093 63.6493 63.824 64.012 63.824H66.936C68.0693 63.824 68.8173 63.62 69.18 63.212C69.5427 62.7587 69.724 61.92 69.724 60.696V28.464C69.724 24.4747 69.248 22.48 68.296 22.48H64.352C63.9893 22.48 63.808 22.1173 63.808 21.392C63.808 20.6213 63.9893 20.236 64.352 20.236C64.352 20.236 67.208 20.2587 72.92 20.304ZM102.646 66L97.2741 66.136C96.9568 66.136 96.7981 65.8413 96.7981 65.252C96.7981 64.6627 96.9568 64.368 97.2741 64.368H99.4501C99.9488 64.368 100.311 64.164 100.538 63.756C101.581 62.0333 103.666 57.4547 106.794 50.02C109.922 42.54 112.166 36.8733 113.526 33.02C113.707 32.612 114.138 32.408 114.818 32.408C115.543 32.408 115.997 32.6347 116.178 33.088C116.722 35.3547 118.309 39.6387 120.938 45.94C123.613 52.2413 125.947 57.5 127.942 61.716C128.486 62.804 128.985 63.5067 129.438 63.824C129.891 64.1413 130.594 64.3 131.546 64.3C131.818 64.3 131.954 64.6173 131.954 65.252C131.954 65.8413 131.841 66.136 131.614 66.136L125.086 66L117.742 66.136C117.47 66.136 117.334 65.8413 117.334 65.252C117.334 64.6627 117.47 64.368 117.742 64.368H121.006C121.505 64.368 121.754 64.164 121.754 63.756C121.754 63.7107 120.485 60.22 117.946 53.284H108.494C106.273 58.7693 105.162 61.988 105.162 62.94C105.162 63.8467 105.434 64.3 105.978 64.3H108.766C109.129 64.3 109.31 64.6173 109.31 65.252C109.31 65.8413 109.174 66.136 108.902 66.136L102.646 66ZM117.062 50.972C116.926 50.564 115.747 47.1187 113.526 40.636H113.322C112.234 43.764 110.942 47.2093 109.446 50.972H117.062ZM154 20.236L162.568 20.372H170.388C176.372 20.372 180.86 21.528 183.852 23.84C186.89 26.152 188.408 28.9853 188.408 32.34C188.408 35.6493 187.026 38.6187 184.26 41.248C181.495 43.832 177.959 45.124 173.652 45.124C171.295 45.124 168.87 44.58 166.376 43.492V57.772C166.376 61.7613 166.852 63.756 167.804 63.756H171.748C172.202 63.756 172.428 64.1413 172.428 64.912C172.428 65.6373 172.202 66 171.748 66H168.824L165.9 65.932H163.18L153.66 66.136C153.298 66.136 153.116 65.7507 153.116 64.98C153.116 64.2093 153.298 63.824 153.66 63.824H156.584C157.718 63.824 158.466 63.62 158.828 63.212C159.191 62.7587 159.372 61.92 159.372 60.696V28.464C159.372 24.4747 158.896 22.48 157.944 22.48H154C153.638 22.48 153.456 22.1173 153.456 21.392C153.456 20.6213 153.638 20.236 154 20.236ZM169.98 41.724C173.471 41.724 176.191 40.8627 178.14 39.14C180.09 37.4173 181.064 35.2867 181.064 32.748C181.064 30.164 179.999 27.92 177.868 26.016C175.783 24.0667 172.768 23.092 168.824 23.092C167.963 23.092 167.328 23.3187 166.92 23.772C166.558 24.2253 166.376 25.0413 166.376 26.22V41.316C167.6 41.588 168.802 41.724 169.98 41.724ZM193.555 33.156L198.927 33.292C199.425 33.292 199.856 33.292 200.219 33.292L207.291 33.156C207.608 33.156 207.767 33.496 207.767 34.176C207.767 34.8107 207.585 35.128 207.223 35.128H204.095C203.505 35.128 203.211 35.4907 203.211 36.216V58.724C203.211 62.1693 203.664 63.892 204.571 63.892H207.971C208.333 63.892 208.515 64.2547 208.515 64.98C208.515 65.66 208.379 66 208.107 66L200.219 65.932L193.419 66.136C193.101 66.136 192.943 65.796 192.943 65.116C192.943 64.436 193.079 64.096 193.351 64.096H196.411C196.909 64.096 197.204 64.0053 197.295 63.824C197.385 63.5973 197.431 63.0307 197.431 62.124V40.704C197.431 37.0773 196.977 35.264 196.071 35.264H193.623C193.079 35.264 192.807 34.924 192.807 34.244C192.807 33.5187 193.056 33.156 193.555 33.156ZM242.218 51.788L249.222 51.652C249.54 51.652 249.698 51.992 249.698 52.672C249.698 53.352 249.54 53.692 249.222 53.692H247.726C246.91 53.692 246.344 53.8507 246.026 54.168C245.754 54.4853 245.618 55.0747 245.618 55.936C245.618 60.9227 245.732 64.1187 245.958 65.524C246.23 66.9293 246.366 67.7227 246.366 67.904C246.366 68.312 246.14 68.516 245.686 68.516C245.324 68.516 244.893 67.8813 244.394 66.612C243.941 65.388 243.51 64.776 243.102 64.776C243.012 64.776 242.49 64.9573 241.538 65.32C238.818 66.3627 236.189 66.884 233.65 66.884C227.893 66.884 223.133 65.4787 219.37 62.668C215.653 59.8573 213.794 55.7547 213.794 50.36C213.794 44.9653 215.789 40.636 219.778 37.372C223.813 34.0627 228.618 32.408 234.194 32.408C236.642 32.408 239.317 33.02 242.218 34.244V33.156C242.218 32.7933 242.513 32.612 243.102 32.612C243.692 32.612 243.986 32.7933 243.986 33.156C243.986 35.9667 244.145 38.46 244.462 40.636C244.508 40.772 244.417 40.908 244.19 41.044C244.009 41.1347 243.714 41.18 243.306 41.18C242.898 41.18 242.649 41.0213 242.558 40.704L242.218 38.528C239.544 36.1253 236.484 34.924 233.038 34.924C229.638 34.924 226.714 36.2387 224.266 38.868C221.864 41.4973 220.662 45.0333 220.662 49.476C220.662 53.9187 221.886 57.5227 224.334 60.288C226.782 63.0533 229.865 64.436 233.582 64.436C234.761 64.436 235.872 64.3 236.914 64.028C237.957 63.7107 238.705 63.3933 239.158 63.076L239.838 62.6V58.044C239.838 55.1427 239.498 53.692 238.818 53.692H233.582C233.265 53.692 233.106 53.3747 233.106 52.74C233.106 52.06 233.265 51.72 233.582 51.72L242.218 51.788ZM254.25 33.156L261.186 33.292H275.262V32.204C275.262 31.932 275.557 31.796 276.146 31.796C276.781 31.796 277.098 31.932 277.098 32.204C277.098 35.7853 277.257 38.3467 277.574 39.888C277.665 40.16 277.415 40.296 276.826 40.296C276.055 40.296 275.67 40.16 275.67 39.888C275.035 37.8027 274.423 36.624 273.834 36.352C271.93 35.672 269.165 35.332 265.538 35.332C264.903 35.3773 264.473 35.5587 264.246 35.876C264.019 36.1933 263.906 36.76 263.906 37.576V48.728C269.391 48.5467 272.406 48.2973 272.95 47.98L273.426 45.124C273.517 44.8973 273.834 44.784 274.378 44.784C274.967 44.784 275.262 44.9427 275.262 45.26C275.081 46.5747 274.99 48.048 274.99 49.68C274.99 51.2667 275.081 52.7173 275.262 54.032C275.262 54.304 274.945 54.44 274.31 54.44C273.721 54.44 273.426 54.3493 273.426 54.168L272.882 51.244C272.338 50.9267 269.346 50.6773 263.906 50.496V58.724C263.906 62.124 264.359 63.824 265.266 63.824H267.442C272.429 63.7333 275.874 63.0307 277.778 61.716L278.118 59.064C278.209 58.792 278.435 58.656 278.798 58.656C279.206 58.656 279.478 58.656 279.614 58.656C279.886 58.7467 280.022 58.8827 280.022 59.064C279.75 60.968 279.614 63.6427 279.614 67.088C279.614 67.3147 279.297 67.428 278.662 67.428C278.073 67.428 277.778 67.3147 277.778 67.088V66H265.674L254.114 66.136C253.797 66.136 253.638 65.796 253.638 65.116C253.638 64.436 253.774 64.096 254.046 64.096H257.106C257.605 64.096 257.899 64.0053 257.99 63.824C258.081 63.5973 258.126 63.0307 258.126 62.124V40.704C258.126 37.0773 257.673 35.264 256.766 35.264H254.318C253.774 35.264 253.502 34.924 253.502 34.244C253.502 33.5187 253.751 33.156 254.25 33.156ZM290.684 37.508C294.356 34.108 298.617 32.408 303.468 32.408C308.319 32.408 312.557 34.108 316.184 37.508C319.856 40.908 321.692 44.9427 321.692 49.612C321.692 54.236 319.856 58.2707 316.184 61.716C312.557 65.1613 308.319 66.884 303.468 66.884C298.617 66.884 294.356 65.1613 290.684 61.716C287.057 58.2707 285.244 54.236 285.244 49.612C285.244 44.9427 287.057 40.908 290.684 37.508ZM311.696 39.14C309.565 36.284 306.823 34.856 303.468 34.856C300.113 34.856 297.371 36.284 295.24 39.14C293.109 41.9507 292.044 45.4413 292.044 49.612C292.044 53.7373 293.109 57.2507 295.24 60.152C297.371 63.008 300.113 64.436 303.468 64.436C306.823 64.436 309.565 63.008 311.696 60.152C313.827 57.2507 314.892 53.7373 314.892 49.612C314.892 45.4413 313.827 41.9507 311.696 39.14ZM358.229 33.292L364.485 33.156C364.757 33.156 364.893 33.496 364.893 34.176C364.893 34.8107 364.757 35.128 364.485 35.128H362.105C361.47 35.128 361.062 35.2867 360.881 35.604C360.065 37.0093 359.657 47.2093 359.657 66.204C359.657 66.6573 359.272 66.884 358.501 66.884C357.776 66.884 357.254 66.7253 356.937 66.408C347.87 55.6187 340.572 46.8693 335.041 40.16H334.837C334.973 48.184 335.109 54.8933 335.245 60.288C335.245 62.6453 335.585 63.824 336.265 63.824H338.985C339.257 63.824 339.393 64.1867 339.393 64.912C339.393 65.592 339.257 65.932 338.985 65.932H333.341L327.153 66.068C326.926 66.068 326.813 65.7507 326.813 65.116C326.813 64.436 326.926 64.096 327.153 64.096H328.785C330.19 64.096 330.916 63.6427 330.961 62.736C331.641 55.392 331.981 46.8013 331.981 36.964C331.256 36.1027 330.644 35.604 330.145 35.468C329.646 35.332 328.717 35.264 327.357 35.264C327.085 35.264 326.949 34.924 326.949 34.244C326.949 33.5187 327.085 33.156 327.357 33.156L336.945 33.292C347.961 47.2547 354.444 55.528 356.393 58.112H356.529C356.348 46.2347 356.189 39.4573 356.053 37.78C355.917 36.1027 355.554 35.264 354.965 35.264H352.585C352.268 35.264 352.109 34.924 352.109 34.244C352.109 33.5187 352.268 33.156 352.585 33.156L358.229 33.292Z"
                  fill="#050630"
                />
              </svg>
            </NavLink>
            <svg
              alt="line"
              className="header-top__vertical-line vertical-line"
              width="2"
              height="40"
              viewBox="0 0 2 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0V46" stroke="#D9D9D9" />
            </svg>
            <svg
              alt="city"
              className="header__map"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9.75C18.9946 9.75 19.9484 10.1451 20.6517 10.8483C21.3549 11.5516 21.75 12.5054 21.75 13.5C21.75 13.9925 21.653 14.4801 21.4646 14.9351C21.2761 15.39 20.9999 15.8034 20.6517 16.1517C20.3034 16.4999 19.89 16.7761 19.4351 16.9645C18.9801 17.153 18.4925 17.25 18 17.25C17.0054 17.25 16.0516 16.8549 15.3484 16.1517C14.6451 15.4484 14.25 14.4946 14.25 13.5C14.25 12.5054 14.6451 11.5516 15.3484 10.8483C16.0516 10.1451 17.0054 9.75 18 9.75ZM18 3C20.7848 3 23.4555 4.10625 25.4246 6.07538C27.3938 8.04451 28.5 10.7152 28.5 13.5C28.5 21.375 18 33 18 33C18 33 7.5 21.375 7.5 13.5C7.5 10.7152 8.60625 8.04451 10.5754 6.07538C12.5445 4.10625 15.2152 3 18 3ZM18 6C16.0109 6 14.1032 6.79018 12.6967 8.1967C11.2902 9.60322 10.5 11.5109 10.5 13.5C10.5 15 10.5 18 18 28.065C25.5 18 25.5 15 25.5 13.5C25.5 11.5109 24.7098 9.60322 23.3033 8.1967C21.8968 6.79018 19.9891 6 18 6Z"
                fill="#050630"
              />
            </svg>
            <a href="#" className="header__city">
              <span href="#" className="header__city-text">
                ODESA
              </span>
              <svg
                alt="arrow"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 15L18 22.5L25.5 15H10.5Z" fill="#050630" />
              </svg>
            </a>
          </div>
          <div className="header__top-right">
            <nav className="header__list">
              <ul className="header__list-items">
                <li className="header__list-item">
                  <a href="#" className="header__promo">
                    PROMOTIONS
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="#" className="header__item-link">
                    GUARANTEE
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="#" className="header__item-link">
                    ABOUT US
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="#" className="header__item-link">
                    MORE
                  </a>
                </li>
              </ul>
              <button className="header__menu"
              onClick={props.onClickSidebar}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 30V26.6667H35V30H5ZM5 21.6667V18.3333H35V21.6667H5ZM5 13.3333V10H35V13.3333H5Z" fill="#050630"/>
              </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
     );
}
 
export default NavbarTop;