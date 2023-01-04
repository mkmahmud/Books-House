import React from 'react';
import './Loader.css'

const Loader = () => {
    return ( 
        <div className='h-screen w-full bg-[#150050ba] absolute top-0 left-0 z-50'>
            <svg className='myloader' width="500" height="500" viewBox="0 0 958 896">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#ff006f" />
                        <stop offset="1" />
                    </linearGradient>
                </defs>
                <g id="Group_6" data-name="Group 6" transform="translate(-449 -210)" style={{ mixBlendMode: 'multiply', isolation: ' isolate' }}>
                    <g id="Group_5" data-name="Group 5" transform="translate(527.633 305.39)">
                        <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="400" cy="400.5" rx="400" ry="400.5" transform="translate(0.367 -0.39)" fill="url(#linear-gradient)" />
                        <path id="Ellipse_3_-_Outline" data-name="Ellipse 3 - Outline" d="M400,1a404.913,404.913,0,0,0-40.8,2.063,399.522,399.522,0,0,0-39.617,6.054c-12.854,2.634-25.719,5.946-38.237,9.844-12.378,3.855-24.711,8.375-36.658,13.434A400.507,400.507,0,0,0,32.355,245c-5.053,11.961-9.567,24.31-13.417,36.7-3.894,12.534-7.2,25.415-9.832,38.285A400.96,400.96,0,0,0,3.06,359.652a405.995,405.995,0,0,0,0,81.7,400.96,400.96,0,0,0,6.046,39.667c2.63,12.87,5.938,25.751,9.832,38.285,3.85,12.394,8.364,24.742,13.417,36.7a400.33,400.33,0,0,0,212.337,212.6c11.946,5.059,24.28,9.579,36.658,13.434,12.518,3.9,25.383,7.211,38.237,9.844a399.522,399.522,0,0,0,39.617,6.054,404.487,404.487,0,0,0,81.593,0,399.522,399.522,0,0,0,39.617-6.054c12.854-2.634,25.719-5.946,38.237-9.844,12.378-3.855,24.712-8.375,36.658-13.434A400.507,400.507,0,0,0,767.645,556c5.053-11.961,9.567-24.31,13.417-36.7,3.894-12.534,7.2-25.415,9.832-38.285a400.96,400.96,0,0,0,6.046-39.667,405.995,405.995,0,0,0,0-81.7,400.96,400.96,0,0,0-6.046-39.667c-2.63-12.87-5.938-25.751-9.832-38.285-3.85-12.394-8.364-24.742-13.417-36.7a400.33,400.33,0,0,0-212.337-212.6c-11.946-5.059-24.28-9.579-36.658-13.434-12.518-3.9-25.383-7.211-38.237-9.844A399.522,399.522,0,0,0,440.8,3.063,404.913,404.913,0,0,0,400,1m0-1C620.914,0,800,179.31,800,400.5S620.914,801,400,801,0,621.69,0,400.5,179.086,0,400,0Z" transform="translate(0.367 -0.39)" fill="#707070" />
                        <circle id="Ellipse_4" data-name="Ellipse 4" cx="373.5" cy="373.5" r="373.5" transform="translate(27.367 26.61)" fill="rgba(255,255,255,0.99)" />
                        <path id="Ellipse_4_-_Outline" data-name="Ellipse 4 - Outline" d="M373.5,1a378.5,378.5,0,0,0-38.087,1.923A371.941,371.941,0,0,0,2.923,335.413a378.1,378.1,0,0,0,0,76.174,371.941,371.941,0,0,0,332.49,332.49,378.1,378.1,0,0,0,76.174,0,371.941,371.941,0,0,0,332.49-332.49,378.1,378.1,0,0,0,0-76.174A371.941,371.941,0,0,0,411.587,2.923,378.5,378.5,0,0,0,373.5,1m0-1C579.778,0,747,167.222,747,373.5S579.778,747,373.5,747,0,579.778,0,373.5,167.222,0,373.5,0Z" transform="translate(27.367 26.61)" fill="#707070" />
                    </g>
                    <g id="Group_4" data-name="Group 4" transform="translate(449 210)">
                        <path id="Polygon_26" data-name="Polygon 26" d="M479,0,694.55,428.317,958,829,479,801.367,0,829,263.45,428.317Z" fill="#ff006f" />
                        <path id="Polygon_26_-_Outline" data-name="Polygon 26 - Outline" d="M479,2.225,264.317,428.818l-.032.048L1.929,827.887,479,800.365l.058,0,477.014,27.519L693.683,428.818l-.026-.052L479,2.225M479,0,694.55,428.317,958,829,479,801.367,0,829,263.45,428.317Z" fill="#707070" />
                        <path id="Polygon_28" data-name="Polygon 28" d="M479,0,958,829H0Z" fill='#0000ff00' />
                        <path id="Polygon_28_-_Outline" data-name="Polygon 28 - Outline" d="M479,2,1.733,828H956.267L479,2m0-2L958,829H0Z" fill="#707070" />
                        <path id="Polygon_27" data-name="Polygon 27" d="M479,0,696.945,426.935,958,829,479,804.13,0,829,261.055,426.935Z" fill="#ff006f" />
                        <path id="Polygon_27_-_Outline" data-name="Polygon 27 - Outline" d="M479,2.2,261.922,427.436l-.028.044L1.907,827.9,479,803.129l.052,0L956.093,827.9,696.078,427.436l-.024-.046L479,2.2M479,0,696.945,426.935,958,829,479,804.13,0,829,261.055,426.935Z" fill="#707070" />
                        <path id="Polygon_25" data-name="Polygon 25" d="M479,0,682.575,435.225,958,829,479,787.55,0,829,275.425,435.225Z" />
                        <path id="Polygon_25_-_Outline" data-name="Polygon 25 - Outline" d="M479,2.36,276.294,435.727l-.05.071L2.046,827.819,479,786.546l.086.008,476.868,41.266L681.706,435.727l-.037-.078L479,2.36M479,0,682.575,435.225,958,829,479,787.55,0,829,275.425,435.225Z" fill="#707070" />
                        <path id="Polygon_15" data-name="Polygon 15" d="M479,0,684.97,433.843,958,829,479,790.313,0,829,273.03,433.843Z" />
                        <path id="Polygon_15_-_Outline" data-name="Polygon 15 - Outline" d="M479,2.332,273.9,434.345l-.046.067L2.021,827.834,479,789.31l.08.007,476.9,38.517L684.1,434.345l-.035-.073L479,2.332M479,0,684.97,433.843,958,829,479,790.313,0,829,273.03,433.843Z" fill="#707070" />
                        <path id="Polygon_24" data-name="Polygon 24" d="M479,0,668.2,443.515,958,829,479,770.97,0,829,289.8,443.515Z" fill="#ff006f" />
                        <path id="Polygon_24_-_Outline" data-name="Polygon 24 - Outline" d="M479,2.548,290.667,444.019l-.073.1L2.21,827.725,479,769.963l.12.015,476.67,57.747L667.333,444.019l-.048-.112L479,2.548M479,0,668.2,443.515,958,829,479,770.97,0,829,289.8,443.515Z" fill="#707070" />
                        <path id="Polygon_23" data-name="Polygon 23" d="M479,0,653.835,451.805,958,829,479,754.39,0,829,304.165,451.805Z" />
                        <path id="Polygon_23_-_Outline" data-name="Polygon 23 - Outline" d="M479,2.771,305.041,452.311l-.1.121L2.4,827.614,479,753.378l.154.024L955.6,827.614l-302.639-375.3-.056-.145L479,2.771M479,0,653.835,451.805,958,829,479,754.39,0,829,304.165,451.805Z" fill="#707070" />
                        <path id="Polygon_22" data-name="Polygon 22" d="M479,0,634.675,462.858,958,829,479,732.283,0,829,323.325,462.858Z" fill="#ff006f" />
                        <path id="Polygon_22_-_Outline" data-name="Polygon 22 - Outline" d="M479,3.137,324.208,463.369l-.134.152L2.72,827.431,479,731.263l.2.04L955.28,827.431,633.791,463.369l-.064-.192L479,3.137M479,0,634.675,462.858,958,829,479,732.283,0,829,323.325,462.858Z" fill="#707070" />
                        <path id="Polygon_21" data-name="Polygon 21" d="M479,0,620.3,471.148,958,829,479,715.7,0,829,337.7,471.148Z" />
                        <path id="Polygon_21_-_Outline" data-name="Polygon 21 - Outline" d="M479,3.481,338.585,471.663l-.162.172L3.018,827.258,479,714.676l.23.054L954.982,827.258l-335.566-355.6-.068-.227L479,3.481M479,0,620.3,471.148,958,829,479,715.7,0,829,337.7,471.148Z" fill="#707070" />
                        <path id="Polygon_20" data-name="Polygon 20" d="M479,0,603.54,480.82,958,829,479,696.36,0,829,354.46,480.82Z" fill="#ff006f" />
                        <path id="Polygon_20_-_Outline" data-name="Polygon 20 - Outline" d="M479,3.988,355.359,481.339l-.2.194L3.458,827,479,695.322,954.542,827l-351.9-345.666-.069-.268L479,3.988M479,0,603.54,480.82,958,829,479,696.36,0,829,354.46,480.82Z" fill="#707070" />
                        <path id="Polygon_19" data-name="Polygon 19" d="M479,0,589.17,489.11,958,829,479,679.78,0,829,368.83,489.11Z" />
                        <path id="Polygon_19_-_Outline" data-name="Polygon 19 - Outline" d="M479,4.551,369.737,489.634l-.229.211L3.946,826.723,479,678.733l.3.093,474.756,147.9L588.263,489.634l-.068-.3L479,4.551M479,0,589.17,489.11,958,829,479,679.78,0,829,368.83,489.11Z" fill="#707070" />
                        <path id="Polygon_18" data-name="Polygon 18" d="M479,0l93.4,498.781L958,829,479,660.437,0,829,385.6,498.781Z" fill="#ff006f" />
                        <path id="Polygon_18_-_Outline" data-name="Polygon 18 - Outline" d="M479,5.433,386.513,499.312l-.268.229L4.711,826.282,479,659.377l.332.117L953.289,826.282l-381.8-326.97-.065-.346L479,5.433M479,0l93.4,498.781L958,829,479,660.437,0,829,385.6,498.781Z" fill="#707070" />
                        <path id="Polygon_17" data-name="Polygon 17" d="M479,0l81.43,505.69L958,829,479,646.62,0,829,397.57,505.69Z" fill="#060606" />
                        <path id="Polygon_17_-_Outline" data-name="Polygon 17 - Outline" d="M479,6.29,398.5,506.225l-.3.241L5.455,825.853,479,645.55l.356.135L952.545,825.853,559.5,506.225l-.061-.376L479,6.29M479,0l81.43,505.69L958,829,479,646.62,0,829,397.57,505.69Z" fill="#707070" />
                        <path id="Polygon_16" data-name="Polygon 16" d="M479,0l62.27,516.743L958,829,479,624.513,0,829,416.73,516.743Z" fill="#ff006f" />
                        <path id="Polygon_16_-_Outline" data-name="Polygon 16 - Outline" d="M479,8.359,417.672,517.287l-.342.256L7.248,824.818,479,623.426l.393.168L950.752,824.818,540.328,517.287l-.051-.424L479,8.359M479,0l62.27,516.743L958,829,479,624.513,0,829,416.73,516.743Z" fill="#707070" />
                        <path id="Polygon_10" data-name="Polygon 10" d="M479,0l50.3,523.651L958,829,479,610.7,0,829,428.7,523.651Z" />
                        <path id="Polygon_10_-_Outline" data-name="Polygon 10 - Outline" d="M479,10.459,429.657,524.2l-.372.265L9.07,823.767,479,609.6l.415.189L948.93,823.767,528.343,524.2l-.044-.454L479,10.459M479,0l50.3,523.651L958,829,479,610.7,0,829,428.7,523.651Z" fill="#707070" />
                        <path id="Polygon_14" data-name="Polygon 14" d="M479,0l35.925,531.942L958,829,479,594.117,0,829,443.075,531.942Z" fill="#ff006f" />
                        <path id="Polygon_14_-_Outline" data-name="Polygon 14 - Outline" d="M479,14.841,444.04,532.5l-.408.273L12.87,821.575,479,593,945.13,821.575,513.96,532.5l-.033-.49L479,14.841M479,0l35.925,531.942L958,829,479,594.117,0,829,443.075,531.942Z" fill="#707070" />
                        <path id="Polygon_12" data-name="Polygon 12" d="M479,0l23.95,538.85L958,829,479,580.3,0,829,455.05,538.85Z" fill="#070707" />
                        <path id="Polygon_12_-_Outline" data-name="Polygon 12 - Outline" d="M479,22.522,456.026,539.414l-.438.279L19.531,817.732,479,579.173l.461.239,459.008,238.32L501.974,539.414l-.023-.519L479,22.522M479,0l23.95,538.85L958,829,479,580.3,0,829,455.05,538.85Z" fill="#707070" />
                        <path id="Polygon_13" data-name="Polygon 13" d="M479,0l14.37,544.377L958,829,479,569.247,0,829,464.63,544.377Z" fill="#ff006f" />
                        <path id="Polygon_13_-_Outline" data-name="Polygon 13 - Outline" d="M479,37.9l-13.385,507.05-.463.284L32.864,810.041,479,568.109l.477.258,445.66,241.674-432.751-265.1-.014-.543L479,37.9M479,0l14.37,544.377L958,829,479,569.246,0,829,464.63,544.377Z" fill="#707070" />
                        <path id="Polygon_11" data-name="Polygon 11" d="M479,0l4.79,549.9L958,829,479,558.193,0,829,474.21,549.9Z" />
                        <path id="Polygon_11_-_Outline" data-name="Polygon 11 - Outline" d="M479,114.815l-3.795,435.663-.488.287L99.56,771.564,479,557.044l379.441,214.52L482.795,550.478l0-.566L479,114.815M479,0l4.79,549.9L958,829,479,558.193,0,829,474.21,549.9Z" fill="#707070" />
                    </g>
                </g>
            </svg>
        </div>

    );
};

export default Loader;