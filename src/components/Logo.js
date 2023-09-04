import React from 'react';

function Logo({background, backgroundOpacity, head, headOpacity, left, leftOpacity, right, rightOpacity, logoSize}) {

    let color = {
        background: background || "#323330",
        backgroundOpacity: backgroundOpacity || "1",
        head: head || "#f0db4f",
        headOpacity: headOpacity || "1",
        left: left || "#e10052",
        leftOpacity: leftOpacity || "1",
        right: right || "#0000ff",
        rightOpacity: rightOpacity || "1"
    };

    let size = logoSize || "60";

    return (
        <div className="logo">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width={size} height={size}>
                <defs>
                    <path d="M0 0L640 0L640 640L0 640L0 0Z" id="a2gQ9T4NTh"></path>
                    <path d="M130.6 422.16L199.62 248.79L267.01 335.11C274.33 333.49 278.9 332.48 280.73 332.07C308.48 325.92 337.25 326.1 364.92 332.6C367.01 333.1 372.24 334.32 380.6 336.29L442.55 248.79L509.95 422.16C509.95 422.16 509.95 422.16 509.95 422.16C525.31 416.37 542.22 416.17 557.73 421.57C557.95 421.65 558.51 421.85 559.4 422.16L442.55 150.96L362.66 277.05C354.53 274.28 349.44 272.56 347.4 271.86C330.88 266.25 312.99 266.09 296.37 271.41C294.7 271.95 290.53 273.28 283.86 275.42L199.62 150.96L80.6 422.16C81 422.01 81.26 421.92 81.36 421.88C96.96 416.27 114.02 416.25 129.64 421.81C129.76 421.86 130.08 421.97 130.6 422.16Z" id="d5dTps6NC"></path>
                    <path d="M222.61 420.44L230.61 426.3L241.01 431.37L250.08 432.17C259.84 430.44 265.93 429.36 268.37 428.93C273.15 428.08 277.61 425.95 281.27 422.76C282.2 421.95 284.51 419.93 288.21 416.7C290.49 413.48 291.91 411.46 292.47 410.65C294.95 407.14 295.33 402.57 293.46 398.7C293.4 398.58 293.25 398.27 293.01 397.77L284.48 392.44C277.85 390.41 273.71 389.15 272.06 388.64C267.66 387.3 262.94 387.41 258.61 388.97C258.61 388.97 258.61 388.97 258.61 388.97L250.61 420.44L246.88 416.7C243.24 400.22 240.97 389.91 240.06 385.79C239.67 383.99 238.27 382.57 236.47 382.16C232.7 381.29 223.28 379.11 208.21 375.64C206.62 376.35 205.63 376.8 205.23 376.98C203.88 377.58 203.2 379.09 203.62 380.5C205.02 385.18 205.52 386.87 206.18 389.08C209.11 398.89 213.69 408.14 219.7 416.43C220.09 416.96 221.06 418.3 222.61 420.44Z" id="b3cdHtTbWA"></path>
                    <path d="M416.61 420.44L408.61 426.3L398.21 431.37L389.14 432.17C379.38 430.44 373.29 429.36 370.85 428.93C366.07 428.08 361.61 425.95 357.95 422.76C357.02 421.95 354.71 419.93 351.01 416.7C348.73 413.48 347.31 411.46 346.75 410.65C344.27 407.14 343.89 402.57 345.76 398.7C345.82 398.58 345.97 398.27 346.21 397.77L354.74 392.44C361.37 390.41 365.51 389.15 367.16 388.64C371.56 387.3 376.28 387.41 380.61 388.97C380.61 388.97 380.61 388.97 380.61 388.97L388.61 420.44L392.34 416.7C395.98 400.22 398.25 389.91 399.16 385.79C399.55 383.99 400.95 382.57 402.75 382.16C406.52 381.29 415.94 379.11 431.01 375.64C432.6 376.35 433.59 376.8 433.99 376.98C435.34 377.58 436.02 379.09 435.6 380.5C434.2 385.18 433.7 386.87 433.04 389.08C430.11 398.89 425.53 408.14 419.52 416.43C419.13 416.96 418.16 418.3 416.61 420.44Z" id="aOH49dhAC"></path>
                </defs>
                <g>
                    <g>
                        <g>
                            {/* -background-   */}
                            <use xlinkHref="#a2gQ9T4NTh" opacity={color.backgroundOpacity} fill={color.background} fillOpacity="1"></use>
                            <g>
                                <use xlinkHref="#a2gQ9T4NTh" opacity="1" fillOpacity="0" stroke="#1a966f" strokeWidth="0" strokeOpacity="1"></use>
                            </g>
                        </g>
                        <g>
                            {/* -head- M  */}
                            <use xlinkHref="#d5dTps6NC" opacity={color.headOpacity} fill={color.head} fillOpacity="1"></use>
                            <g>
                                <use xlinkHref="#d5dTps6NC" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="0" strokeOpacity="1"></use>
                            </g>
                        </g>
                        <g>
                            {/* -left- eye  */}
                            <use xlinkHref="#b3cdHtTbWA" opacity={color.leftOpacity} fill={color.left} fillOpacity="1"></use>
                            <g>
                                <use xlinkHref="#b3cdHtTbWA" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="0" strokeOpacity="1"></use>
                            </g>
                        </g>
                        <g>
                            {/* -right- eye  */}
                            <use xlinkHref="#aOH49dhAC" opacity={color.rightOpacity} fill={color.right} fillOpacity="1"></use>
                            <g>
                                <use xlinkHref="#aOH49dhAC" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="0" strokeOpacity="1">
                                </use>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>

    )
}

export default Logo;