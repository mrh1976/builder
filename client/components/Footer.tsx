import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-gray py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex gap-8 md:gap-20 mb-12 md:mb-20 flex-col md:flex-row">
          <div className="w-[170px]">
            <Link
              to="/"
              className="flex items-center justify-center w-[100px] md:w-[130px] h-6 md:h-8 mb-6 md:mb-8"
            >
              <svg
                width="130"
                height="32"
                viewBox="0 0 130 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_footer)">
                  <mask
                    id="mask0_footer"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                  >
                    <path d="M32 0H0V32H32V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_footer)">
                    <path
                      d="M0 15.9983L9.14286 6.85547V11.4269H18.2857L9.14286 18.284V25.1412L0 15.9983Z"
                      fill="#11141A"
                    />
                    <path
                      d="M32.0005 15.9983L22.8576 25.1412V20.5697H13.7148L22.8576 13.7126V6.85547L32.0005 15.9983Z"
                      fill="#11141A"
                    />
                  </g>
                  <path
                    d="M59.5215 26.1613V5.90625H64.4171V14.4711H64.6842L71.3798 5.90625H77.1457L69.9655 14.9458L77.2743 26.1613H71.4193L66.3754 18.1997L64.4171 20.6722V26.1613H59.5215Z"
                    fill="#11141A"
                  />
                  <path
                    d="M42.166 26.1613V23.3722L52.0067 9.88209H42.1759V5.90625H58.198V8.69527L48.3573 22.1854H58.1881V26.1613H42.166Z"
                    fill="#11141A"
                  />
                  <path
                    d="M123.968 26.4771C122.609 26.4771 121.426 26.1376 120.417 25.4585C119.415 24.7793 118.637 23.8497 118.083 22.6694C117.529 21.4892 117.252 20.1441 117.252 18.6342C117.252 17.1112 117.532 15.7562 118.093 14.5694C118.66 13.3826 119.444 12.4529 120.447 11.7804C121.449 11.1012 122.613 10.7617 123.938 10.7617C124.953 10.7617 125.873 10.9595 126.697 11.3551C127.521 11.7441 128.201 12.2947 128.735 13.0067C129.275 13.7122 129.615 14.5364 129.753 15.4793H127.973C127.788 14.6221 127.343 13.8903 126.638 13.2837C125.939 12.6705 125.049 12.3639 123.968 12.3639C122.998 12.3639 122.141 12.6276 121.396 13.1551C120.651 13.676 120.067 14.4046 119.646 15.3408C119.23 16.2705 119.022 17.3485 119.022 18.5749C119.022 19.8079 119.227 20.8991 119.636 21.8485C120.044 22.7914 120.618 23.5299 121.357 24.0639C122.102 24.598 122.972 24.865 123.968 24.865C124.64 24.865 125.253 24.7398 125.807 24.4892C126.368 24.2321 126.836 23.8694 127.211 23.4013C127.594 22.9332 127.851 22.376 127.983 21.7299H129.763C129.631 22.6464 129.305 23.4639 128.784 24.1826C128.27 24.8947 127.6 25.4552 126.776 25.864C125.959 26.2727 125.022 26.4771 123.968 26.4771Z"
                    fill="#11141A"
                  />
                  <path
                    d="M105.614 16.6679V26.1625H103.854V10.9712H105.565V13.3547H105.723C106.079 12.5767 106.633 11.9536 107.384 11.4855C108.143 11.0107 109.079 10.7734 110.193 10.7734C111.215 10.7734 112.112 10.9877 112.883 11.4162C113.661 11.8382 114.265 12.4613 114.693 13.2855C115.128 14.1097 115.346 15.1217 115.346 16.3217V26.1625H113.586V16.4305C113.586 15.1844 113.236 14.1987 112.537 13.4734C111.845 12.7481 110.915 12.3855 109.748 12.3855C108.95 12.3855 108.242 12.5569 107.622 12.8998C107.002 13.2426 106.511 13.7371 106.148 14.3833C105.792 15.0228 105.614 15.7844 105.614 16.6679Z"
                    fill="#11141A"
                  />
                  <path
                    d="M91.8257 31.8607C91.4762 31.8607 91.1499 31.8277 90.8466 31.7618C90.5433 31.6959 90.3026 31.6233 90.1246 31.5442L90.5993 29.9915C91.1993 30.1761 91.7334 30.242 92.2015 30.1893C92.6697 30.1431 93.085 29.9321 93.4477 29.5563C93.8103 29.1871 94.1334 28.62 94.4169 27.8552L94.9708 26.3123L89.3828 10.9727H91.2916L95.8015 23.8398H95.94L100.45 10.9727H102.359L95.9301 28.5673C95.6598 29.2991 95.3268 29.909 94.9312 30.397C94.5356 30.8915 94.0774 31.2574 93.5565 31.4948C93.0422 31.7387 92.4653 31.8607 91.8257 31.8607Z"
                    fill="#11141A"
                  />
                  <path
                    d="M88.4776 14.3024L86.8655 14.7573C86.7072 14.3024 86.4831 13.8903 86.193 13.521C85.9028 13.1518 85.5237 12.8584 85.0556 12.6408C84.594 12.4232 84.0204 12.3144 83.3347 12.3144C82.3061 12.3144 81.4622 12.5584 80.8028 13.0463C80.1435 13.5342 79.8138 14.1639 79.8138 14.9353C79.8138 15.5881 80.038 16.1189 80.4863 16.5276C80.9413 16.9298 81.6402 17.2496 82.583 17.487L84.8776 18.0507C86.1501 18.3606 87.1028 18.8518 87.7358 19.5244C88.3754 20.1969 88.6952 21.0409 88.6952 22.0562C88.6952 22.9134 88.4578 23.6749 87.9831 24.3409C87.5083 25.0068 86.8457 25.531 85.9952 25.9134C85.1512 26.2892 84.1721 26.4771 83.0578 26.4771C81.5743 26.4771 80.3512 26.1442 79.3885 25.4782C78.4259 24.8057 77.8094 23.8365 77.5391 22.5705L79.2303 22.1551C79.4479 23.0584 79.8731 23.7409 80.5061 24.2024C81.1457 24.6639 81.9863 24.8947 83.0281 24.8947C84.1951 24.8947 85.1281 24.6343 85.827 24.1134C86.5259 23.5859 86.8754 22.9266 86.8754 22.1354C86.8754 21.5222 86.671 21.0079 86.2622 20.5925C85.8534 20.1705 85.2336 19.8606 84.4028 19.6628L81.9204 19.0694C80.6017 18.7529 79.6259 18.2518 78.9929 17.5661C78.36 16.8804 78.0435 16.0298 78.0435 15.0145C78.0435 14.1771 78.2709 13.4419 78.7259 12.8089C79.1808 12.1694 79.8072 11.6683 80.605 11.3056C81.4028 10.943 82.3127 10.7617 83.3347 10.7617C84.7259 10.7617 85.8369 11.0782 86.6677 11.7111C87.505 12.3375 88.1083 13.2013 88.4776 14.3024Z"
                    fill="#11141A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_footer">
                    <rect width="130" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          <div className="flex gap-8 md:gap-20 flex-1 flex-wrap">
            <div>
              <h3 className="text-brand-dark text-xs md:text-sm font-semibold uppercase mb-4 md:mb-6">
                Products
              </h3>
              <ul className="space-y-2 md:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline"
                  >
                    Prividium
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline"
                  >
                    ZK Stack
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline"
                  >
                    ZKsync Connect
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline"
                  >
                    Airbender
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    solx{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-brand-dark text-xs md:text-sm font-semibold uppercase mb-4 md:mb-6">
                Developers
              </h3>
              <ul className="space-y-2 md:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    ZKsync Prividium Docs{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-base hover:underline inline-flex items-center gap-1"
                  >
                    ZK Stack Docs{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    Airbender Docs{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    GitHub Discussions{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    Developer updates on X{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-brand-dark text-xs md:text-sm font-semibold uppercase mb-4 md:mb-6">
                What's happening
              </h3>
              <ul className="space-y-2 md:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    Blog{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    Community{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-brand-dark text-xs md:text-sm font-semibold uppercase mb-4 md:mb-6">
                Social
              </h3>
              <ul className="space-y-2 md:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    X{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    LinkedIn{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    Discord{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-dark text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    GitHub{" "}
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2 7.17969L0.5 6.47969L5.3 1.67969H1V0.679688H7V6.67969H6V2.37969L1.2 7.17969Z"
                        fill="#11141A"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gray-border pt-6 md:pt-10 flex gap-4 md:gap-8 justify-end text-xs md:text-base flex-col md:flex-row">
          <a href="#" className="text-black hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-black hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-black hover:underline">
            Cookie Policy
          </a>
          <a href="#" className="text-black hover:underline">
            API License
          </a>
        </div>
      </div>
    </footer>
  );
}
