import React from "react";

export default function ChevronRight(props) {
  return (
    <svg
      width={props.width ?? "24"}
      height={props.height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8299 11.2897L10.5899 7.0497C10.497 6.95598 10.3864 6.88158 10.2645 6.83081C10.1427 6.78004 10.012 6.75391 9.87994 6.75391C9.74793 6.75391 9.61723 6.78004 9.49537 6.83081C9.37351 6.88158 9.26291 6.95598 9.16994 7.0497C8.98369 7.23707 8.87915 7.49052 8.87915 7.7547C8.87915 8.01889 8.98369 8.27234 9.16994 8.4597L12.7099 11.9997L9.16994 15.5397C8.98369 15.7271 8.87915 15.9805 8.87915 16.2447C8.87915 16.5089 8.98369 16.7623 9.16994 16.9497C9.26338 17.0424 9.3742 17.1157 9.49604 17.1655C9.61787 17.2152 9.74834 17.2405 9.87994 17.2397C10.0115 17.2405 10.142 17.2152 10.2638 17.1655C10.3857 17.1157 10.4965 17.0424 10.5899 16.9497L14.8299 12.7097C14.9237 12.6167 14.9981 12.5061 15.0488 12.3843C15.0996 12.2624 15.1257 12.1317 15.1257 11.9997C15.1257 11.8677 15.0996 11.737 15.0488 11.6151C14.9981 11.4933 14.9237 11.3827 14.8299 11.2897Z"
        fill={props.fill ?? "currentColor"}
      />
    </svg>
  );
}