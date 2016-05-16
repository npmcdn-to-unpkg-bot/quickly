var FullscreenPreload = React.createClass({
    render: function(){
        return(
        <div className="fullscreen-preload">
            <div className="container">
                <div className="preloader-logo">
                    <svg viewBox='-200 -200 400 400' className="back">
                      <g className="circle"><circle r='160'/></g>
                    </svg>
                    <svg className="preloader-logo-svg preloader-quickly-logo" xmlns="http://www.w3.org/2000/svg" id="preloader-svg-quickly" fill-rule="evenodd" viewBox="0 0 13214.144 12912.382" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                        <g>
                            <g>
                                <path className="disappear svg-text" fill-rule="nonzero" d="M2552.117 9764.941c-82.4915 24.232-156.2183 36.6058-220.1493 36.6058-163.4363 0-323.2637-48.9794-477.4198-147.4537-97.4433-62.8997-225.3052-172.201-384.617-327.3882-100.5365 11.3426-188.6994 17.014-264.4885 17.014-347.4957 0-636.7317-121.1596-867.1924-363.994C112.4296 8741.5302-.481 8448.1697-.481 8099.643c0-354.198 121.1596-645.4964 363.994-874.4105 238.71-224.7894 535.6796-336.6686 889.8777-336.6686 351.1047 0 638.2784 117.5503 860.49 353.6824 218.087 231.492 327.3883 524.337 327.3883 877.504 0 452.1567-176.8412 793.981-530.5237 1026.504 117.0348 168.0766 210.3534 286.6582 278.9245 355.2293 86.1006 85.0695 206.7445 172.7167 362.4473 263.4574zm-499.5894-1567.855c0-265.5196-74.2424-496.496-224.274-693.4445-163.4363-216.0247-374.3053-323.7793-634.6693-323.7793-244.3812 0-441.3298 82.4915-591.3613 247.9902-142.8135 159.3118-214.478 362.9628-214.478 608.8908 0 263.4573 75.2735 493.918 226.3362 691.8978 166.0142 216.0248 376.8833 323.7794 634.6694 323.7794 238.71 0 434.6273-84.0383 586.2055-253.146 144.876-161.8896 217.5716-362.4472 217.5716-602.1883zM4091.1 9309.1754h-395.4438v-280.9868l-250.0525 274.2844c-79.3982 27.3252-153.125 41.2457-219.6338 41.2457-183.5438 0-310.3745-53.6196-378.9456-160.343-52.5884-83.007-79.9137-221.696-80.945-417.098-1.031-57.744-.5155-140.2355 1.5468-247.4745 3.609-114.457 5.1558-196.9486 5.1558-249.0214 0-252.1148-24.232-459.3748-72.6957-621.78h464.5305c-43.8236 117.0348-65.4776 256.2393-65.4776 415.551v628.9982c0 123.2217 16.4983 207.7756 50.0105 254.177 40.2146 56.713 118.5816 85.0695 234.5853 85.0695 85.0694 0 187.6683-28.872 308.3122-86.616v-838.836c0-166.53-22.1696-319.1393-65.9933-458.3438H4091.1c-44.3392 142.298-65.9932 252.6304-65.9932 330.4818v806.8705c0 211.3846 21.654 385.648 65.9932 523.8213zm756.86-2089.0985c0 64.962-18.5606 122.7062-55.1662 174.779-41.7613 55.1662-93.834 83.007-156.2184 83.007-67.54 0-122.1906-26.294-164.983-79.398-38.1524-48.9794-57.2286-107.7546-57.2286-178.388 0-67.54 19.0762-125.7996 57.2285-175.81 41.7614-55.1663 95.381-83.0072 161.374-83.0072 61.3532 0 113.9416 28.3564 156.2185 85.0694 39.1835 51.5572 58.7752 109.817 58.7752 173.7478zm21.1385 2089.0985h-465.046c43.8235-135.5955 65.993-300.5786 65.993-494.9493v-622.2956c0-146.938-2.5778-239.741-6.7023-279.9557-6.7025-75.789-26.8098-163.4364-59.2908-263.973h465.046c-32.481 126.3152-52.5883 214.478-59.2907 262.9418-4.6402 42.7925-6.7025 131.471-6.7025 266.0353v637.2472c0 196.9486 21.654 361.416 65.9933 494.9493zm1494.1282-343.371l-130.9553 318.6236c-110.848 39.699-219.1182 59.2907-324.295 59.2907-246.959 0-443.392-76.8203-586.721-230.4608-140.2357-149.0005-210.3536-348.0113-210.3536-596.517 0-271.191 80.945-489.7937 243.35-654.7768 161.8898-166.0143 378.9457-248.5058 650.6522-248.5058 133.0176 0 239.741 11.858 320.1703 35.5745l-17.0138 387.7102c-76.8203-69.0867-131.9865-114.457-167.561-134.5644-59.2908-35.059-128.3775-53.104-205.7133-53.104-152.6094 0-272.7377 60.8376-361.9317 182.5126-78.8825 109.817-118.5816 243.35-118.5816 402.1463 0 182.5126 40.73 332.0285 122.1905 448.5478 93.8342 131.9865 227.883 197.9798 402.662 197.9798 118.066 0 246.4434-38.1524 384.1012-114.457zm1617.8655 343.371h-492.3714c7.7336-53.104-64.962-201.073-217.5715-443.9076-92.2874-141.2668-185.0904-282.018-278.409-423.2848v447.001c0 118.066 2.0623 190.7617 6.7025 218.6026 5.1557 43.308 25.263 110.3324 59.2908 201.5887h-465.046c32.481-87.6473 53.1038-170.1388 60.8374-245.4123 3.609-38.1524 5.1557-125.7997 5.1557-260.8796V7410.323c0-137.1423-22.1696-263.4574-65.9932-379.4612l465.046-93.834c-44.339 148.4847-65.9932 311.921-65.9932 489.278v997.1165c82.4916-118.066 164.983-237.1632 248.5058-356.776 112.395-180.9658 167.561-320.686 163.952-418.6446h551.6623c-130.9553 100.5366-244.3812 215.5092-341.8243 345.4334-15.4672 20.623-108.7858 160.8586-278.9246 421.2226 151.0627 236.6476 251.0837 391.8348 300.5786 464.015 117.5505 169.1076 232.0075 313.4678 344.4022 430.5027zm583.1122 0h-464.5306c43.8237-168.0765 65.9933-337.1842 65.9933-506.292V7571.1816c0-172.7167-22.1695-353.167-65.9932-540.3197l464.5306-93.834c-43.8237 230.9762-65.9933 436.6895-65.9933 616.1086v1288.415c0 161.8896 22.1697 317.5924 65.9934 467.624zm1744.1807-1661.1736c-111.879 159.3118-226.336 405.7553-344.9177 738.815-160.343 455.2502-260.8795 726.4412-300.5786 813.573-128.893 288.2047-277.8934 496.496-447.001 625.389H8800.852c139.72-116.0038 250.568-232.523 331.513-349.0424 68.571-97.9587 144.8757-240.2567 228.914-426.8938l-293.8762-722.3166c-124.7684-287.1738-252.6303-513.51-385.648-679.5243h457.828c24.7476 125.284 86.6163 313.468 184.575 564.036 73.7268 180.9658 146.4225 361.9317 218.6026 542.8975 62.3842-180.9658 124.253-362.4472 186.637-544.4442 72.6958-227.883 107.239-415.5512 103.63-562.4893h475.3577z" className="fil0"/>
                         {/*       <path className="disappear svg-line"  fill-rule="nonzero" d="M6594.203 1912.7767c1257.9962-46.4015 2415.9713 421.738 3271.3056 1215.7192 831.1023 771.8115 1376.0622 1852.4508 1448.2423 3068.17l.5154 13.405-202.6198 7.7335 202.6198-7.7336c2.0623 30.4186 3.0935 60.3218 4.6402 90.7406 40.2146 1094.0442-308.3122 2112.2993-922.3587 2921.7476l-188.184-88.163c602.704-778.514 946.5906-1764.8035 907.407-2825.851-1.031-30.4188-2.5777-60.8375-4.1244-90.7407l-1.0312-11.3426c-69.0867-1160.553-589.8146-2192.213-1383.2802-2929.4813-817.182-758.4067-1923.5998-1205.4078-3125.3986-1161.0686-1202.3143 44.3393-2272.6422 571.7697-3031.5645 1388.436-758.4066 817.182-1205.4076 1923.6-1161.0684 3125.3986-146.938 4.6402-137.1422 22.6852-203.1355 7.7336-46.4014-1258.5117 421.7382-2415.9713 1215.7193-3271.3055 793.9812-854.8187 1914.3196-1406.9965 3172.3157-1453.398z" className="fil0"/>
                         */}       <path className="the-path disappear svg-red-angle infinite" id="svg-logo-red" fill="#e80707" d="M9674.2313 9575.726l3266.6654 1479.6923-1312.6468 1493.097z" className="fil2"/>
                                <path className="the-path disappear svg-blue infinite" id="svg-logo-blue" fill="#1620e0" d="M1893.7314 6475.075l-1593.6337 2.0623c-2.0623-1716.3398 677.462-3363.593 1889.572-4578.7966l1123.9475 1120.854c-877.504 880.0816-1420.4014 2094.254-1420.4014 3435.2574 0 6.7025.5156 13.9206.5156 20.623z" className="fil3"/>
                                <path className="the-path disappear svg-green infinite" id="svg-logo-green" fill="#109634" d="M3303.3057 3030.0216l-1131.1653-1128.072C3384.2506 686.2305 5029.4414 2.5817 6745.7814.004c945.0437-1.0313 1878.745 204.682 2736.1415 602.7037L8812.1945 2043.732c-624.358-291.2983-1319.8648-454.219-2054.0396-454.219-1351.3147 0-2573.2208 551.1466-3454.8493 1440.5086z" className="fil4"/>
                                <path className="the-path disappear svg-yellow infinite" id="svg-logo-yellow" fill="#f0c800" d="M8800.852 2038.5763l668.697-1439.4776c2280.8915 1060.0165 3741.5075 3345.548 3744.601 5860.509 2.0622 1325.0207-402.662 2610.8577-1148.695 3689.9503l-1446.6955-735.7215c629.5137-819.7598 1003.819-1845.7485 1003.819-2959.3844 0-1957.112-1155.3972-3644.064-2821.7265-4415.8757z" className="fil5"/>
                                <path className="the-path disappear svg-red infinite" id="svg-logo-red-2" fill="#e00909" d="M6600.39 12910.447c-2169.528-53.104-4062.1934-1170.3488-5192.8432-2839.7716h2080.8494c865.13 782.123 2011.7626 1259.0273 3269.7588 1259.0273 1071.359 0 2062.2887-345.949 2867.097-932.1545l768.2025 1394.6228c-1078.0615 735.7215-2388.646 1152.3038-3793.0646 1118.276z" className="fil6"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        )
    }
});

module.exports = FullscreenPreload;