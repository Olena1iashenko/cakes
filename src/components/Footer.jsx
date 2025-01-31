const Footer = () => {
  return (
    <footer
      id="about"
      className="container mx-auto py-8 border-t border-gray-400"
    >
      <div className="container flex px-16 py-8">
        <div className="justify-between w-full mx-auto flex flex-wrap">
          <div className="flex  w-full md:w-2/5 ">
            <div className="px-3 md:px-0">
              <div>
                <h3 className="font-bold text-gray-900">Про нас</h3>
                <p className="py-4">
                  Цей магазинчик створено любителькою солодкого для таких самих
                  солодкоїжок) Тому всі десерти приготовано з любовʼю та з
                  найякісніших продуктів. Асортимент постійно доповнюється та
                  змінюється, тому слідкуйте за навністю) далі буде...
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4 w-full md:w-1/5">
            <video
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full shadow-lg border-4 border-orange-400"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/review.mp4" type="video/mp4" />
              Ваш браузер не підтримує відео.
            </video>
          </div>
          <div className="flex  lg:justify-end lg:text-right mt-6 md:mt-0">
            <div className="px-3 md:px-0">
              <h3 className="text-center font-bold text-gray-900">Контакти</h3>
              <div className="w-full flex items-center py-4 mt-0">
                <a href="https://t.me/five_personalities" className="mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="29"
                    height="29"
                    viewBox="0,0,256,256"
                  >
                    <defs>
                      <linearGradient
                        x1="9.858"
                        y1="9.858"
                        x2="38.142"
                        y2="38.142"
                        gradientUnits="userSpaceOnUse"
                        id="color-1_oWiuH0jFiU0R_gr1"
                      >
                        <stop offset="0" stopColor="#ffa500" />
                        <stop offset="1" stopColor="#ffa500" />
                      </linearGradient>
                    </defs>
                    <g
                      fill="none"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z"
                          fill="url(#color-1_oWiuH0jFiU0R_gr1)"
                        />
                        <path
                          d="M10.119,23.466c8.155,-3.695 17.733,-7.704 19.208,-8.284c3.252,-1.279 4.67,0.028 4.448,2.113c-0.273,2.555 -1.567,9.99 -2.363,15.317c-0.466,3.117 -2.154,4.072 -4.059,2.863c-1.445,-0.917 -6.413,-4.17 -7.72,-5.282c-0.891,-0.758 -1.512,-1.608 -0.88,-2.474c0.185,-0.253 0.658,-0.763 0.921,-1.017c1.319,-1.278 1.141,-1.553 -0.454,-0.412c-0.19,0.136 -1.292,0.935 -1.745,1.237c-1.11,0.74 -2.131,0.78 -3.862,0.192c-1.416,-0.481 -2.776,-0.852 -3.634,-1.223c-1.185,-0.513 -1.639,-2.224 0.14,-3.03z"
                          fill="#ffa500"
                          opacity="0.05"
                        />
                        <path
                          d="M10.836,23.591c7.572,-3.385 16.884,-7.264 18.246,-7.813c3.264,-1.318 4.465,-0.536 4.114,2.011c-0.326,2.358 -1.483,9.654 -2.294,14.545c-0.478,2.879 -1.874,3.513 -3.692,2.337c-1.139,-0.734 -5.723,-3.754 -6.835,-4.633c-0.86,-0.679 -1.751,-1.463 -0.71,-2.598c0.348,-0.379 2.27,-2.234 3.707,-3.614c0.833,-0.801 0.536,-1.196 -0.469,-0.508c-1.843,1.263 -4.858,3.262 -5.396,3.625c-1.025,0.69 -1.988,0.856 -3.664,0.329c-1.321,-0.416 -2.597,-0.819 -3.262,-1.078c-1.486,-0.576 -1.506,-1.816 0.255,-2.603z"
                          fill="#ffa500"
                          opacity="0.07"
                        />
                        <path
                          d="M11.553,23.717c6.99,-3.075 16.035,-6.824 17.284,-7.343c3.275,-1.358 4.28,-1.098 3.779,1.91c-0.36,2.162 -1.398,9.319 -2.226,13.774c-0.491,2.642 -1.593,2.955 -3.325,1.812c-0.833,-0.55 -5.038,-3.331 -5.951,-3.984c-0.833,-0.595 -1.982,-1.311 -0.541,-2.721c0.513,-0.502 3.874,-3.712 6.493,-6.21c0.343,-0.328 -0.088,-0.867 -0.484,-0.604c-3.53,2.341 -8.424,5.59 -9.047,6.013c-0.941,0.639 -1.845,0.932 -3.467,0.466c-1.226,-0.352 -2.423,-0.772 -2.889,-0.932c-1.795,-0.616 -1.369,-1.414 0.374,-2.181z"
                          fill="#ffffff"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100007257076656"
                  className="mx-2"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/helen_lyashenko_?igsh=MnRid2x2cGo2dzZm"
                  className="mx-2"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                  </svg>
                </a>
                <a
                  href="http://www.linkedin.com/in/olena-liashenko-5921952b2"
                  className="mx-2"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.818 20.4h-3.2v-11.2h3.2v11.2zm-1.6-12.8c-1.04 0-1.8-.771-1.8-1.717 0-.947.76-1.717 1.8-1.717s1.8.771 1.8 1.717c0 .947-.76 1.717-1.8 1.717zm14.4 12.8h-3.2v-6.002c0-1.501-.016-3.434-2.09-3.434-2.095 0-2.414 1.632-2.414 3.325v6.11h-3.2v-11.2h3.074v1.567h.045c.429-.811 1.477-1.664 3.043-1.664 3.247 0 3.849 2.137 3.849 4.914v6.384z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
