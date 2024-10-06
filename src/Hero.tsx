const Hero = () => {
  return (
    <div className="hero_container">
      <div className="description">
        <p className="name">RONALD REYES</p>
        <h1 className="job_title">ENGINEER & ASPIRING PROGRAMMER</h1>
        <div className="image"></div>
        <button className="resumeBtn">
          Download Resume
          <svg
            width="25"
            height="22"
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.875 13.75V17.4167C21.875 17.9029 21.6555 18.3692 21.2648 18.713C20.8741 19.0568 20.3442 19.25 19.7917 19.25H5.20833C4.6558 19.25 4.12589 19.0568 3.73519 18.713C3.34449 18.3692 3.125 17.9029 3.125 17.4167V13.75M7.29167 9.16667L12.5 13.75M12.5 13.75L17.7083 9.16667M12.5 13.75V2.75"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <img src="./src/picture.png" alt="" className="mypicture" />
      <div className="social">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="35" fill="white" />
          <path
            d="M26.25 2.91667H21.875C19.9411 2.91667 18.0864 3.6849 16.719 5.05235C15.3515 6.4198 14.5833 8.27447 14.5833 10.2083V14.5833H10.2083V20.4167H14.5833V32.0833H20.4166V20.4167H24.7916L26.25 14.5833H20.4166V10.2083C20.4166 9.82156 20.5703 9.45063 20.8438 9.17714C21.1173 8.90365 21.4882 8.75 21.875 8.75H26.25V2.91667Z"
            stroke="#B3B3B3"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_55)">
            <path
              d="M25.5209 9.47916H25.5354M10.2084 2.91666H24.7917C28.8188 2.91666 32.0834 6.18125 32.0834 10.2083V24.7917C32.0834 28.8187 28.8188 32.0833 24.7917 32.0833H10.2084C6.18128 32.0833 2.91669 28.8187 2.91669 24.7917V10.2083C2.91669 6.18125 6.18128 2.91666 10.2084 2.91666ZM23.3334 16.5812C23.5133 17.7949 23.306 19.0345 22.7409 20.1236C22.1758 21.2126 21.2817 22.0958 20.1857 22.6474C19.0898 23.1991 17.8478 23.3911 16.6364 23.1961C15.425 23.0012 14.3059 22.4293 13.4383 21.5617C12.5707 20.6941 11.9988 19.575 11.8039 18.3636C11.6089 17.1523 11.8009 15.9103 12.3526 14.8143C12.9042 13.7183 13.7874 12.8242 14.8765 12.2591C15.9655 11.694 17.2051 11.4867 18.4188 11.6667C19.6568 11.8502 20.8029 12.4271 21.6879 13.3121C22.5729 14.1971 23.1498 15.3432 23.3334 16.5812Z"
              stroke="#B3B3B3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_55">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_70)">
            <path
              d="M33.5416 4.375C32.1451 5.36007 30.5989 6.11349 28.9625 6.60625C28.0842 5.59637 26.9169 4.88059 25.6186 4.55573C24.3202 4.23086 22.9534 4.31258 21.703 4.78983C20.4526 5.26708 19.379 6.11684 18.6272 7.22417C17.8755 8.33151 17.482 9.64299 17.5 10.9813V12.4396C14.9372 12.506 12.3977 11.9376 10.1077 10.785C7.81773 9.63241 5.84836 7.93134 4.37498 5.83333C4.37498 5.83333 -1.45835 18.9583 11.6666 24.7917C8.66325 26.8304 5.08542 27.8526 1.45831 27.7083C14.5833 35 30.625 27.7083 30.625 10.9375C30.6236 10.5313 30.5846 10.1261 30.5083 9.72708C31.9967 8.25926 33.047 6.40604 33.5416 4.375Z"
              stroke="#B3B3B3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_70">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
