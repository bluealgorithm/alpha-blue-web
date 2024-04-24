export default function BadgeIcon(props) {
  return (
    <svg
      width={props.width ?? "24"}
      height={props.height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.87 17.25L18.16 12.57C18.7145 11.5515 19.0034 10.4097 19 9.25C19 7.39348 18.2625 5.61301 16.9497 4.30025C15.6369 2.9875 13.8565 2.25 12 2.25C10.1434 2.25 8.36296 2.9875 7.0502 4.30025C5.73745 5.61301 4.99995 7.39348 4.99995 9.25C4.99651 10.4097 5.28541 11.5515 5.83995 12.57L3.12995 17.25C3.04201 17.4023 2.9958 17.5751 2.99597 17.751C2.99615 17.9269 3.0427 18.0996 3.13094 18.2517C3.21918 18.4039 3.34598 18.53 3.49856 18.6175C3.65113 18.705 3.82408 18.7507 3.99995 18.75H6.86995L8.32995 21.21C8.37917 21.2915 8.43978 21.3656 8.50995 21.43C8.69533 21.6087 8.94248 21.709 9.19995 21.71H9.33995C9.49092 21.6893 9.63517 21.6345 9.76169 21.5495C9.88821 21.4646 9.99365 21.3519 10.07 21.22L12 17.9L13.93 21.25C14.0074 21.38 14.1133 21.4908 14.2398 21.5739C14.3662 21.6571 14.5099 21.7104 14.66 21.73H14.8C15.0609 21.7316 15.3121 21.6311 15.5 21.45C15.5672 21.3893 15.6246 21.3184 15.67 21.24L17.13 18.78H20C20.1762 18.7807 20.3494 18.7348 20.5022 18.647C20.655 18.5592 20.7818 18.4326 20.87 18.28C20.9634 18.1245 21.0128 17.9464 21.0128 17.765C21.0128 17.5836 20.9634 17.4055 20.87 17.25ZM9.18995 18.78L8.29995 17.29C8.21231 17.1422 8.08806 17.0194 7.93917 16.9336C7.79029 16.8478 7.6218 16.8018 7.44995 16.8H5.71995L7.14995 14.32C8.13468 15.2689 9.37577 15.9085 10.72 16.16L9.18995 18.78ZM12 14.25C11.011 14.25 10.0443 13.9568 9.2221 13.4073C8.39985 12.8579 7.75899 12.077 7.38055 11.1634C7.00212 10.2498 6.9031 9.24445 7.09602 8.27455C7.28895 7.30464 7.76515 6.41373 8.46442 5.71447C9.16368 5.0152 10.0546 4.539 11.0245 4.34607C11.9944 4.15315 12.9997 4.25216 13.9134 4.6306C14.827 5.00904 15.6079 5.6499 16.1573 6.47215C16.7067 7.29439 17 8.26109 17 9.25C17 10.5761 16.4732 11.8479 15.5355 12.7855C14.5978 13.7232 13.326 14.25 12 14.25ZM16.55 16.8C16.3781 16.8018 16.2096 16.8478 16.0607 16.9336C15.9118 17.0194 15.7876 17.1422 15.7 17.29L14.81 18.78L13.29 16.13C14.6294 15.8734 15.8659 15.2343 16.85 14.29L18.28 16.77L16.55 16.8Z"
        fill={props.fill ?? "currentColor"}
      />
    </svg>
  );
}
