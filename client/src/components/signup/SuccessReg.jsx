import './style.css'
import { NavLink } from 'react-router-dom';

const SuccessRegistration = () => {
  return (
    <div className="container">
      <div className="success__registration-inner">
        <div className="success__registration-left">
          <h1 className="success__registration-title">
            Congratulations!
          </h1>
          <p className="success__registration-text">
            Now you are part of La Pigeon community. Thank you for choosing us!
          </p>
          <NavLink to="/" className="successfull__button">
            WORLD'S BEST CATALOG
          </NavLink>
        </div>
        <div className="success__registration-right">
        <svg alt="pigeon" width="768" height="918" viewBox="0 0 768 918" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M691.5 544.579L666.5 513.579C662 523.912 654.1 546.679 658.5 555.079C664 565.579 703.5 626.579 708.5 665.079C713.5 703.579 712 835.079 708.5 859.579C705.7 879.179 691.333 916.746 684.5 933.079L746 926.579C760 890.079 766 766.079 765 745.579C764 725.079 757.5 669.079 742 633.079C729.6 604.279 714.5 578.412 708.5 569.079L695.5 555.079L691.5 544.579Z" fill="#FDEB46" stroke="#050630" strokeWidth="4"/>
          <path d="M672 511.079L633 434.079L631 488.579L660.5 549.079L673.5 527.079L672 511.079Z" fill="#FDEB46" stroke="#050630" strokeWidth="4"/>
          <path d="M689.5 921.079H253.5L233.5 838.079L287.5 465.579L296.5 449.079L618.5 476.579C621.167 476.912 627.9 480.479 633.5 492.079C640.5 506.579 652.48 533.643 663 552.579C675.5 575.079 697 614.079 707 655.079C712.436 677.366 720 715.079 721.5 732.579C723 750.079 717 809.079 714.5 837.579C712.5 860.379 697 902.746 689.5 921.079Z" fill="#1C7FF3" stroke="#050630" strokeWidth="4"/>
          <path d="M627 459.5L266 399L298.5 544.079L323 625.579L335 642.5V657.079V670.5L340.5 676.5L353.5 693.5L348.5 697.579L360 712.5L371 732.5L376.5 751L390 760.5L402 772L411 791L429.5 811L452 819.5L475 831L496.5 827L522 831L545 835.5L567 827L593.5 819.5L618 811L648.5 791L653 772L673 751L682 727V706L690.5 693.5L682 676.5L686.5 657.079L627 459.5Z" fill="#FDFDFD"/>
          <path d="M593.5 795.5C577.5 768.886 545.4 712.042 545 697.579C541.833 685.386 534.3 654.8 529.5 630C523.5 599 523 585 515.5 559C509.5 538.2 506.667 530.333 506 529M266 399L627 459.5L686.5 657.079L682 676.5L690.5 693.5L682 706V727L673 751L653 772L648.5 791L618 811L593.5 819.5L567 827L545 835.5L522 831L496.5 827L475 831L452 819.5L429.5 811L411 791L402 772L390 760.5L376.5 751L371 732.5L360 712.5L348.5 697.579L353.5 693.5L340.5 676.5L335 670.5V657.079V642.5L323 625.579L298.5 544.079L266 399Z" stroke="#050630" strokeWidth="4"/>
          <path d="M228.5 465.579C232.1 449.579 262.333 401.167 275 382.5C274.667 394.833 271.4 428.679 277 437.079C284 447.579 292.5 468.079 300.5 481.079C308.471 494.032 310.982 522.374 312.484 534.449C312.49 534.492 312.495 534.535 312.5 534.579V546.579C312.5 551.079 307.5 563.579 310 574.079C312 582.479 310.833 661.246 310 699.579C300.5 762.079 278.9 894.079 268.5 922.079H3C3.66667 901.746 9.7 850.779 28.5 809.579C26.8333 806.412 23.4 798.179 23 790.579C22.5 781.079 20 727.079 73 646.079C126 565.079 141.5 546.079 173.5 518.079C199.1 495.679 212.5 485.746 216 483.579C218.18 480.246 224.036 472.379 230.02 467.579L228.5 465.579Z" fill="#FDEB46"/>
          <path d="M312.5 534.579C312.1 530.979 308 530.079 306 530.079C298 529.279 289 536.746 285.5 540.579L230.02 467.579M312.5 534.579C311 522.579 308.5 494.079 300.5 481.079C292.5 468.079 284 447.579 277 437.079C271.4 428.679 274.667 394.833 275 382.5C262.333 401.167 232.1 449.579 228.5 465.579L230.02 467.579M312.5 534.579C312.5 537.079 312.5 542.979 312.5 546.579C312.5 551.079 307.5 563.579 310 574.079C312 582.479 310.833 661.246 310 699.579C300.5 762.079 278.9 894.079 268.5 922.079H3C3.66667 901.746 9.7 850.779 28.5 809.579C26.8333 806.412 23.4 798.179 23 790.579C22.5 781.079 20 727.079 73 646.079C126 565.079 141.5 546.079 173.5 518.079C199.1 495.679 212.5 485.746 216 483.579C218.18 480.246 224.036 472.379 230.02 467.579" stroke="#050630" strokeWidth="4"/>
          <path d="M285 676.77C284.2 676.77 280.333 672.77 278.5 670.77C276 664.77 279.5 662.27 279.5 660.27C279.5 658.27 287.5 656.27 287.5 657.27C287.5 658.27 290 660.77 291 662.27C292 663.77 295 667.77 294.5 669.27C294 670.77 286 676.77 285 676.77Z" fill="#68737D" stroke="#050630" strokeWidth="4"/>
          <path d="M254 601.77C254 600.97 255.5 595.77 257 597.27L265 612.77C265.167 613.27 265.2 614.37 264 614.77C262.5 615.27 257 609.27 255.5 608.77C254 608.27 254 602.77 254 601.77Z" fill="#68737D" stroke="#050630" strokeWidth="4"/>
          <path d="M270.5 390.421L274 384L633.5 451V449.5C633.5 449.333 633.8 449.1 635 449.5C636.2 449.9 636.833 452.667 637 454V485.5C637 487.5 634 491 633 492.5C632.2 493.7 632 497.667 632 499.5C624.4 518.3 607.5 537.667 600 545L541.5 524L503.5 519.5L446.5 548.5C431 547.167 399.4 544 397 542C394.6 540 330.333 497.167 298.5 476C276.9 447.6 269.833 423.5 269 415L270.5 390.421Z" stroke="#050630" strokeWidth="4"/>
          <path d="M271.5 389L275 382.579L634.5 449.579V448.079C634.5 447.912 634.8 447.679 636 448.079C637.2 448.479 637.833 451.246 638 452.579V484.079C638 486.079 635 489.579 634 491.079C633.2 492.279 633 496.246 633 498.079C625.4 516.879 608.5 536.246 601 543.579L542.5 522.579L504.5 518.079L447.5 547.079C432 545.746 400.4 542.579 398 540.579C395.6 538.579 331.333 495.746 299.5 474.579C277.9 446.179 270.833 422.079 270 413.579L271.5 389Z" fill="#FDFDFD" stroke="#050630" strokeWidth="4"/>
          <path d="M321.5 280.579C324.5 261.079 327 232.579 325.5 224.579C324.3 218.179 319.333 216.246 317 216.079C315.5 213.246 311.1 206.379 305.5 201.579H291.5L293.5 125.079C292 119.079 289.7 102.879 292.5 86.0789C295.3 69.2789 303.667 56.0789 307.5 51.5789C314.333 44.0789 328.6 28.5789 331 26.5789C334 24.0789 348.5 16.0789 353.5 14.0789C358.5 12.0789 367.5 7.57893 373 7.07893C378.5 6.57893 391.5 6.57893 395 5.57893C398.5 4.57893 415.5 2.57893 420 2.07893C424.5 1.57893 448 3.57893 454 4.57893C459.726 5.5333 485.946 11.9526 490.5 14.2749C500.833 19.3762 523.3 33.0789 530.5 47.0789C539.5 64.5789 546 76.0789 549.5 85.0789C549.833 86.9122 550.5 91.7789 550.5 96.5789C550.5 101.379 553.5 106.912 555 109.079L564.5 125.579L573 140.579L581 154.079L588 177.079L596.5 206.079L597 222.579L604 239.079V262.579L614 298.579L616.5 340.579L626 371.579L631.5 414.079L634 449.079C631.5 459.079 613.9 482.279 563.5 495.079L512.5 504.579H495.5C463.833 496.579 398.4 479.679 390 476.079C379.5 471.579 282 439.579 274 382.579C283.397 365.157 298.989 335.133 309.764 311.5C315.998 297.829 320.62 286.296 321.5 280.579Z" fill="#2A4150"/>
          <path d="M491 14.5789C490.886 14.4876 490.718 14.3859 490.5 14.2749M490.5 14.2749C485.946 11.9526 459.726 5.5333 454 4.57893C448 3.57893 424.5 1.57893 420 2.07893C415.5 2.57893 398.5 4.57893 395 5.57893C391.5 6.57893 378.5 6.57893 373 7.07893C367.5 7.57893 358.5 12.0789 353.5 14.0789C348.5 16.0789 334 24.0789 331 26.5789C328.6 28.5789 314.333 44.0789 307.5 51.5789C303.667 56.0789 295.3 69.2789 292.5 86.0789C289.7 102.879 292 119.079 293.5 125.079L291.5 201.579H305.5C311.1 206.379 315.5 213.246 317 216.079C319.333 216.246 324.3 218.179 325.5 224.579C327 232.579 324.5 261.079 321.5 280.579C320.62 286.296 315.998 297.829 309.764 311.5M490.5 14.2749C500.833 19.3762 523.3 33.0789 530.5 47.0789C539.5 64.5789 546 76.0789 549.5 85.0789C549.833 86.9122 550.5 91.7789 550.5 96.5789C550.5 101.379 553.5 106.912 555 109.079L564.5 125.579L573 140.579L581 154.079M581 154.079L588 177.079L596.5 206.079L597 222.579L604 239.079V262.579L614 298.579L616.5 340.579L626 371.579L631.5 414.079L634 449.079C631.5 459.079 613.9 482.279 563.5 495.079L512.5 504.579H495.5C463.833 496.579 398.4 479.679 390 476.079C379.5 471.579 282 439.579 274 382.579C283.397 365.157 298.989 335.133 309.764 311.5M581 154.079C578.167 152.386 572.2 148.7 571 147.5C569.5 146 568.5 151 567.5 152.5C566.5 154 559 152 556.5 153C554.5 153.8 556.333 160.667 557.5 164C554.667 165.333 548.8 168.7 548 171.5C547.2 174.3 552 181.667 554.5 185C552.9 185.4 551.167 190.5 550.5 193C550.5 194.333 550.2 197.3 549 198.5C547.5 200 548 203 549 206.079C550 209.158 546.5 215.5 545 216.5C543.5 217.5 540.5 224.579 540 226.5C539.5 228.421 521 242.5 517.5 244C514 245.5 511.5 253 509.5 258.5C507.5 264 496 284.5 487.5 282C479 279.5 479.5 277 464 280C451.6 282.4 423.5 276.667 411 273.5C397.167 263.667 368.6 244 365 244C360.5 244 355.5 282.5 353 280.579C351 279.042 340.5 264.219 335.5 257C335.833 257.167 336.3 259.8 335.5 269C334.7 278.2 318.01 301.167 309.764 311.5" stroke="#050630" strokeWidth="4"/>
          <path d="M499 496.579C503.4 498.979 503.5 495.579 506.5 496.579C506.966 496.734 507.316 497.455 507.57 498.579C508.547 497.079 511.1 494.079 513.5 494.079C515.634 494.079 521.819 494.585 525.75 501C532.833 499.386 546.224 493.796 550 491.579C559.5 486 606 472.5 614 476C620.4 478.8 615.167 495.745 616.5 503.579C613.5 537.157 619.75 533.137 617.75 540L618.5 549.579L603 592.579C599.8 591.379 566.333 561.746 550 547.079C545.6 539.879 529.833 529.61 522.5 525.376C522.032 525.508 521.532 525.579 521 525.579C520.167 525.245 518.3 524.379 517.5 523.579C516.167 524.412 513 526.079 511 526.079C509 526.079 507.384 525.079 506.827 524.579C506.716 525.217 506.605 525.727 506.5 526.079C505.241 530.275 500.46 529.541 496 527.423C494.667 528.308 491.2 530.979 488 534.579C484.8 538.179 454.667 577.412 440 596.579C426.333 581.912 399.2 550.879 400 544.079C400.8 537.279 393.333 512.579 389.5 501.079C389.9 495.479 395 480.579 405.5 479.579C416 478.579 448.287 482 454.687 486C461.087 490 481.007 501.667 487.917 501C487.524 496.099 487.808 497.54 488 496.579C491 492.579 493.5 493.579 499 496.579Z" fill="#1C7FF3"/>
          <path d="M507.57 498.579C507.316 497.455 506.966 496.734 506.5 496.579C503.5 495.579 503.4 498.979 499 496.579C493.5 493.579 491 492.579 488 496.579C487.808 497.54 487.524 496.099 487.917 501M507.57 498.579C508.547 497.079 511.1 494.079 513.5 494.079C515.634 494.079 521.819 494.585 525.75 501M507.57 498.579C508.811 504.055 507.783 519.081 506.827 524.579M506.827 524.579C506.716 525.217 506.605 525.727 506.5 526.079C505.241 530.275 500.46 529.541 496 527.423M506.827 524.579C507.384 525.079 509 526.079 511 526.079C513 526.079 516.167 524.412 517.5 523.579C518.3 524.379 520.167 525.245 521 525.579C521.532 525.579 522.032 525.508 522.5 525.376M487.917 501C481.007 501.667 461.087 490 454.687 486C448.287 482 416 478.579 405.5 479.579C395 480.579 389.9 495.479 389.5 501.079C393.333 512.579 400.8 537.279 400 544.079C399.2 550.879 426.333 581.912 440 596.579C454.667 577.412 484.8 538.179 488 534.579C491.2 530.979 494.667 528.308 496 527.423M487.917 501C488.259 505.259 489.188 515.673 490.172 519.5C491.002 522.725 492.092 525.234 493.5 526.079C494.304 526.561 495.146 527.017 496 527.423M522.5 525.376C527.312 524.018 528.848 516.18 529 512.079C528.923 511.204 528.82 510.371 528.695 509.579C528.119 505.93 527.059 503.137 525.75 501M522.5 525.376C529.833 529.61 545.6 539.879 550 547.079C566.333 561.746 599.8 591.379 603 592.579L618.5 549.579L617.75 540C619.75 533.137 613.5 537.157 616.5 503.579C615.167 495.745 620.4 478.8 614 476C606 472.5 559.5 486 550 491.579C546.224 493.796 532.833 499.386 525.75 501" stroke="#050630" strokeWidth="4"/>
          <path d="M321.319 280.579C324.319 261.079 326.819 232.579 325.319 224.579C324.119 218.179 319.153 216.246 316.819 216.079C315.319 213.246 310.919 206.379 305.319 201.579H291.319L293.319 125.079C291.819 119.079 289.519 102.879 292.319 86.0789C295.119 69.2789 303.486 56.0789 307.319 51.5789C314.153 44.0789 328.419 28.5789 330.819 26.5789C333.819 24.0789 348.319 16.0789 353.319 14.0789C358.319 12.0789 367.319 7.57893 372.819 7.07893C378.319 6.57893 391.319 6.57893 394.819 5.57893C398.319 4.57893 415.319 2.57893 419.819 2.07893C424.319 1.57893 447.819 3.57893 453.819 4.57893C459.545 5.5333 485.765 11.9526 490.319 14.2749C500.653 19.3762 523.119 33.0789 530.319 47.0789C539.319 64.5789 545.819 76.0789 549.319 85.0789C549.653 86.9122 550.319 91.7789 550.319 96.5789C550.319 101.379 553.319 106.912 554.819 109.079L564.319 125.579L572.819 140.579L580.819 154.079C577.986 152.386 572.019 148.7 570.819 147.5C569.319 146 568.319 151 567.319 152.5C566.319 154 558.819 152 556.319 153C554.319 153.8 556.153 160.667 557.319 164C554.486 165.333 548.619 168.7 547.819 171.5C547.019 174.3 551.819 181.667 554.319 185C552.719 185.4 550.986 190.5 550.319 193C550.319 194.333 550.019 197.3 548.819 198.5C547.319 200 547.819 203 548.819 206.079C549.819 209.158 546.319 215.5 544.819 216.5C543.319 217.5 540.319 224.579 539.819 226.5C539.319 228.421 520.819 242.5 517.319 244C513.819 245.5 511.319 253 509.319 258.5C507.319 264 495.819 284.5 487.319 282C478.819 279.5 479.319 277 463.819 280C451.419 282.4 423.319 276.667 410.819 273.5C396.986 263.667 368.419 244 364.819 244C360.319 244 355.319 282.5 352.819 280.579C350.836 279.055 340.496 264.469 335.447 257.185C335.749 257.923 336.02 260.944 335.319 269C334.519 278.2 317.829 301.167 309.584 311.5C315.817 297.829 320.44 286.296 321.319 280.579Z" fill="#292C33"/>
          <path d="M490.819 14.5789C490.705 14.4876 490.537 14.3859 490.319 14.2749M490.319 14.2749C485.765 11.9526 459.545 5.5333 453.819 4.57893C447.819 3.57893 424.319 1.57893 419.819 2.07893C415.319 2.57893 398.319 4.57893 394.819 5.57893C391.319 6.57893 378.319 6.57893 372.819 7.07893C367.319 7.57893 358.319 12.0789 353.319 14.0789C348.319 16.0789 333.819 24.0789 330.819 26.5789C328.419 28.5789 314.153 44.0789 307.319 51.5789C303.486 56.0789 295.119 69.2789 292.319 86.0789C289.519 102.879 291.819 119.079 293.319 125.079L291.319 201.579H305.319C310.919 206.379 315.319 213.246 316.819 216.079C319.153 216.246 324.119 218.179 325.319 224.579C326.819 232.579 324.319 261.079 321.319 280.579C320.44 286.296 315.817 297.829 309.584 311.5C317.829 301.167 334.519 278.2 335.319 269C336.119 259.8 335.653 257.167 335.319 257C340.319 264.219 350.819 279.042 352.819 280.579C355.319 282.5 360.319 244 364.819 244C368.419 244 396.986 263.667 410.819 273.5C423.319 276.667 451.419 282.4 463.819 280C479.319 277 478.819 279.5 487.319 282C495.819 284.5 507.319 264 509.319 258.5C511.319 253 513.819 245.5 517.319 244C520.819 242.5 539.319 228.421 539.819 226.5C540.319 224.579 543.319 217.5 544.819 216.5C546.319 215.5 549.819 209.158 548.819 206.079C547.819 203 547.319 200 548.819 198.5C550.019 197.3 550.319 194.333 550.319 193C550.986 190.5 552.719 185.4 554.319 185C551.819 181.667 547.019 174.3 547.819 171.5C548.619 168.7 554.486 165.333 557.319 164C556.153 160.667 554.319 153.8 556.319 153C558.819 152 566.319 154 567.319 152.5C568.319 151 569.319 146 570.819 147.5C572.019 148.7 577.986 152.386 580.819 154.079L572.819 140.579L564.319 125.579L554.819 109.079C553.319 106.912 550.319 101.379 550.319 96.5789C550.319 91.7789 549.653 86.9122 549.319 85.0789C545.819 76.0789 539.319 64.5789 530.319 47.0789C523.119 33.0789 500.653 19.3762 490.319 14.2749Z" stroke="#050630" strokeWidth="4"/>
          <path d="M281.609 145.948C282.109 142.782 283.909 135.848 287.109 133.448C290.309 131.048 292.775 131.448 293.609 131.948C293.942 127.782 296.509 118.148 304.109 112.948C304.109 111.448 304.509 108.148 306.109 106.948C308.109 105.448 311.109 101.448 315.109 100.948C317.775 98.0888 323.808 92.2697 326.608 91.8697C330.108 91.3697 333.608 90.3697 341.108 82.3697C347.108 75.9697 353.608 84.0363 356.108 88.8697C358.345 99.5363 358.948 121.07 343.464 121.87C344.335 123.42 344.914 124.959 345.109 126.448C343.942 127.448 341.609 130.349 341.609 133.949V140.949C346.109 144.615 355.109 152.449 355.109 154.449C355.109 156.449 354.775 157.949 354.609 158.449L345.609 159.949C342.869 161.414 338.966 163.498 335.01 165.602C347.63 159.99 367.472 154.926 386.109 161.449C387.942 161.864 391.309 164.221 390.109 170.322H364.609C359.409 170.322 355.775 173.74 354.609 175.449C348.609 177.282 338.109 182.849 338.109 184.449C338.109 186.049 349.442 193.115 355.109 196.449C354.442 198.949 351.309 203.949 344.109 203.949C336.909 203.949 330.775 197.949 328.609 194.949C328.442 195.449 327.309 196.449 324.109 196.449C320.909 196.449 319.442 194.782 319.109 193.949C317.609 195.115 314.309 197.649 313.109 198.449C311.609 199.449 304.609 200.949 296.609 201.449C288.609 201.949 270.609 194.949 269.109 192.449C267.909 190.449 276.942 160.615 281.609 145.948Z" fill="#7C5247"/>
          <path d="M315.109 100.948C311.109 101.448 308.109 105.448 306.109 106.948C304.509 108.148 304.109 111.448 304.109 112.948C296.509 118.148 293.942 127.782 293.609 131.948C292.775 131.448 290.309 131.048 287.109 133.448C283.909 135.848 282.109 142.782 281.609 145.948C276.942 160.615 267.909 190.449 269.109 192.449C270.609 194.949 288.609 201.949 296.609 201.449C304.609 200.949 311.609 199.449 313.109 198.449C314.309 197.649 317.609 195.115 319.109 193.949C319.442 194.782 320.909 196.449 324.109 196.449C327.309 196.449 328.442 195.449 328.609 194.949C330.775 197.949 336.909 203.949 344.109 203.949C351.309 203.949 354.442 198.949 355.109 196.449C349.442 193.115 338.109 186.049 338.109 184.449C338.109 182.849 348.609 177.282 354.609 175.449C355.775 173.74 359.409 170.322 364.609 170.322C369.809 170.322 383.775 170.322 390.109 170.322C391.309 164.221 387.942 161.864 386.109 161.449C362.109 153.049 336.109 163.864 326.109 170.322M315.109 100.948C317.775 98.0888 323.808 92.2697 326.608 91.8697C330.108 91.3697 333.608 90.3697 341.108 82.3697C347.108 75.9697 353.608 84.0363 356.108 88.8697C358.345 99.5363 358.948 121.07 343.464 121.87M315.109 100.948C318.591 100.513 337.608 111.445 343.464 121.87M296.609 177.949C302.209 177.549 314.609 174.782 320.109 173.449C321.122 172.942 323.333 171.786 326.109 170.322M326.109 170.322C332.096 167.163 340.712 162.568 345.609 159.949L354.609 158.449C354.775 157.949 355.109 156.449 355.109 154.449C355.109 152.449 346.109 144.615 341.609 140.949C341.609 140.115 341.609 137.549 341.609 133.949C341.609 130.349 343.942 127.448 345.109 126.448C344.914 124.959 344.335 123.42 343.464 121.87" stroke="#050630" strokeWidth="4"/>
          <path d="M450.5 110C448.1 113.6 437.167 125.5 432 131C436.5 138.5 476 149.5 483.5 145.5C491 141.5 492 137.5 497.5 131C501.9 125.8 510 120.5 513.5 118.5C505 117 501 103 499.5 99.5003C498 96.0003 485 86.5003 474 92.0003C463 97.5003 453.5 105.5 450.5 110Z" fill="#784C38" stroke="#050630" strokeWidth="4"/>
          <path d="M487.499 132.501C480.299 142.101 464.499 138.167 457.499 135.001C454.499 131.501 452.999 122.5 454.499 117.5C455.999 112.5 461.999 104.001 475.999 100.001C487.199 96.8005 492.999 102.334 494.499 105.501C495.165 110.501 494.699 122.901 487.499 132.501Z" fill="#573120" stroke="#050630" strokeWidth="4"/>
          <path d="M466.502 128.578C464.102 128.578 461.488 122.5 460.321 119C458.346 108.907 466.693 100.8 474.322 103.5C479.798 105.439 479.414 107.441 483.002 114.078C486.923 121.332 481.669 126.911 479.002 128.578C474.202 131.778 468.669 129.911 466.502 128.578Z" fill="#050630" stroke="#050630" strokeWidth="4"/>
          <path d="M483 110.579C481 108.579 476.5 104.412 474.5 102.579C482.9 100.979 484.5 101.579 488.5 102.079C492 103.579 494 107.579 493.5 111.079C493.1 113.879 486.333 121.245 483 124.579C483.833 120.745 485 112.579 483 110.579Z" fill="#FDFDFD" stroke="#050630" strokeWidth="4"/>
          <path d="M258 169.079C263.2 161.479 275 150.912 281 146.079C286.5 147.079 312.5 156.579 312.5 158.579C312.5 160.579 311 173.079 309 175.579C307.4 177.579 303 178.746 301 179.079L288 188.579C287.167 190.912 283.8 195.579 277 195.579C268.5 195.579 271.5 197.579 264 195.579C258 193.979 257.5 196.246 258 197.579C254.8 205.179 258.999 209.5 262 214.579L255.999 211.5C241.999 200 251.5 178.579 258 169.079Z" fill="#050630" stroke="#050630" strokeWidth="4"/>
          <path d="M309.999 142C308.799 144.8 308.832 148.5 308.999 150C315.498 151.5 313.499 151 316.499 151C319.499 151 319.499 147 319.499 145C319.499 143 321.499 140 323.999 139C326.499 138 323.999 135.5 320.999 135C317.999 134.5 311.499 138.5 309.999 142Z" fill="#050630" stroke="#050630" strokeWidth="4"/>
        </svg>
        </div>
      </div>
    </div>
  );
}

export default SuccessRegistration;