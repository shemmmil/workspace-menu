import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const BarChart3: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2V14H14M4.66667 8V11.3333H12.6667V5.33333L9.33333 8.66667L6.66667 6L4.66667 8Z"
      stroke="#65A30D"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const BarChart4: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4V28H28M9.33333 16V22.6667H25.3333V10.6667L18.6667 17.3333L13.3333 12L9.33333 16Z"
      stroke="#65A30D"
      stroke-width="2.9925"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const BarChart5: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4V28H28M9.33333 16V22.6667H25.3333V10.6667L18.6667 17.3333L13.3333 12L9.33333 16Z"
      stroke="#4F46E5"
      stroke-width="2.9925"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Brain: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2981_16446)">
      <path
        d="M8.00021 3.33353C8.001 3.06688 7.94845 2.80277 7.84567 2.55673C7.74289 2.31069 7.59195 2.08768 7.40172 1.90083C7.2115 1.71397 6.98583 1.56704 6.73798 1.46868C6.49014 1.37032 6.22513 1.32251 5.95854 1.32807C5.69195 1.33363 5.42917 1.39244 5.18564 1.50104C4.94211 1.60964 4.72276 1.76585 4.54048 1.96047C4.3582 2.15508 4.21668 2.38419 4.12425 2.6343C4.03181 2.88441 3.99032 3.15048 4.00221 3.41686M8.00021 3.33353V12.0002M8.00021 3.33353C7.99943 3.06688 8.05209 2.80277 8.15487 2.55673C8.25765 2.31069 8.40859 2.08768 8.59882 1.90083C8.78905 1.71397 9.01472 1.56704 9.26256 1.46868C9.5104 1.37032 9.77541 1.32251 10.042 1.32807C10.3086 1.33363 10.5714 1.39244 10.8149 1.50104C11.0584 1.60964 11.2778 1.76585 11.4601 1.96047C11.6423 2.15508 11.7839 2.38419 11.8763 2.6343C11.9687 2.88441 12.0102 3.15048 11.9983 3.41686C12.3902 3.51762 12.754 3.70623 13.0622 3.9684C13.3704 4.23058 13.6148 4.55945 13.7771 4.9301C13.9394 5.30075 14.0152 5.70346 13.9987 6.10774C13.9823 6.51202 13.8741 6.90726 13.6823 7.26353M4.00221 3.41686C3.61035 3.51762 3.24655 3.70623 2.93837 3.9684C2.63019 4.23058 2.38571 4.55945 2.22344 4.9301C2.06118 5.30075 1.98539 5.70346 2.0018 6.10774C2.01822 6.51202 2.12643 6.90726 2.31821 7.26353M4.00221 3.41686C4.0154 3.73935 4.1065 4.05383 4.26761 4.3335M2.31821 7.26353C1.981 7.53748 1.71583 7.88968 1.54577 8.28949C1.37571 8.68929 1.30592 9.12459 1.34245 9.55752C1.37899 9.99045 1.52076 10.4079 1.75542 10.7735C1.99008 11.1392 2.31052 11.442 2.68888 11.6555M2.31821 7.26353C2.44017 7.1642 2.57083 7.07649 2.70836 7.00016M2.68888 11.6555C2.64216 12.017 2.67004 12.3843 2.7708 12.7345C2.87157 13.0848 3.04308 13.4108 3.27474 13.6922C3.50639 13.9736 3.79329 14.2045 4.11769 14.3707C4.4421 14.5369 4.79713 14.6348 5.16086 14.6584C5.5246 14.682 5.88931 14.6308 6.23247 14.5079C6.57563 14.3851 6.88997 14.1931 7.15605 13.944C7.42214 13.6949 7.63433 13.3939 7.77952 13.0596C7.92471 12.7252 7.99982 12.3647 8.00021 12.0002M2.68888 11.6555C3.08906 11.8812 3.54101 12.0003 4.00046 12.0001M8.00021 12.0002C8.0006 12.3647 8.07583 12.7252 8.22103 13.0596C8.36622 13.3939 8.57841 13.6949 8.84449 13.944C9.11058 14.1931 9.42491 14.3851 9.76808 14.5079C10.1112 14.6308 10.476 14.682 10.8397 14.6584C11.2034 14.6348 11.5584 14.5369 11.8829 14.3707C12.2073 14.2045 12.4942 13.9736 12.7258 13.6922C12.9575 13.4108 13.129 13.0848 13.2297 12.7345C13.3305 12.3843 13.3584 12.017 13.3117 11.6555M13.6823 7.26353C14.0195 7.53748 14.2847 7.88968 14.4548 8.28949C14.6248 8.68929 14.6946 9.12459 14.6581 9.55752C14.6216 9.99045 14.4798 10.4079 14.2451 10.7735C14.0105 11.1392 13.69 11.442 13.3117 11.6555M13.6823 7.26353C13.5604 7.1642 13.4298 7.07649 13.2923 7.00016M13.3117 11.6555C12.9115 11.8812 12.4598 12.0003 12.0003 12.0001M10.0003 8.66683C9.44062 8.46993 8.95187 8.11149 8.59588 7.63683C8.23988 7.16217 8.03263 6.59261 8.00033 6.00016C7.96802 6.59261 7.76077 7.16217 7.40477 7.63683C7.04878 8.11149 6.56003 8.46993 6.00033 8.66683M11.7331 4.3335C11.8944 4.05389 11.9857 3.73937 11.9991 3.41683"
        stroke="#4F46E5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2981_16446">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ChevronRight: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const ChevronsUpDown: React.FC<IconProps> = ({
  className,
  ...props
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m7 15 5 5 5-5" />
    <path d="m7 9 5-5 5 5" />
  </svg>
);

export const HandMetal: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
    <path d="M14 11V9a2 2 0 1 0-4 0v2" />
    <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
    <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
  </svg>
);

export const Headphones: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 7.3335H4C4.35362 7.3335 4.69276 7.47397 4.94281 7.72402C5.19286 7.97407 5.33333 8.31321 5.33333 8.66683V10.6668C5.33333 11.0205 5.19286 11.3596 4.94281 11.6096C4.69276 11.8597 4.35362 12.0002 4 12.0002H3.33333C2.97971 12.0002 2.64057 11.8597 2.39052 11.6096C2.14048 11.3596 2 11.0205 2 10.6668V7.3335ZM2 7.3335C2 6.54557 2.15519 5.76535 2.45672 5.0374C2.75825 4.30944 3.20021 3.64801 3.75736 3.09086C4.31451 2.5337 4.97595 2.09175 5.7039 1.79022C6.43185 1.48869 7.21207 1.3335 8 1.3335C8.78793 1.3335 9.56815 1.48869 10.2961 1.79022C11.0241 2.09175 11.6855 2.5337 12.2426 3.09086C12.7998 3.64801 13.2417 4.30944 13.5433 5.0374C13.8448 5.76535 14 6.54557 14 7.3335M14 7.3335V10.6668M14 7.3335H12C11.6464 7.3335 11.3072 7.47397 11.0572 7.72402C10.8071 7.97407 10.6667 8.31321 10.6667 8.66683V10.6668C10.6667 11.0205 10.8071 11.3596 11.0572 11.6096C11.3072 11.8597 11.6464 12.0002 12 12.0002H12.6667C13.0203 12.0002 13.3594 11.8597 13.6095 11.6096C13.8595 11.3596 14 11.0205 14 10.6668M14 10.6668V12.0002C14 12.7074 13.719 13.3857 13.219 13.8858C12.7189 14.3859 12.0406 14.6668 11.3333 14.6668H8"
      stroke="#4346A2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const LayoutGrid: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99967 10.6668V8.00016M7.99967 5.3335H8.00634M14.6663 8.00016C14.6663 11.6821 11.6816 14.6668 7.99967 14.6668C4.31778 14.6668 1.33301 11.6821 1.33301 8.00016C1.33301 4.31826 4.31778 1.3335 7.99967 1.3335C11.6816 1.3335 14.6663 4.31826 14.6663 8.00016Z"
      stroke="#18181B"
      stroke-width="1.33"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Mail: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const Newspaper: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </svg>
);

export const FileCheck2: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m3 15 2 2 4-4" />
  </svg>
);

export const PencilRuler: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m15 5 4 4" />
    <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
    <path d="m8 6 2-2" />
    <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
    <path d="m18 16 2-2" />
    <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
  </svg>
);

export const Handshake: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
);

export const BookOpen: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const HeadsetIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// Custom component icons
export const OneCIcon: React.FC = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="1C"
  >
    <path
      d="M7.27275 7.27274V24.7272H2.90906V13.0909H0V8.72724H2.90906V7.27274H7.27275ZM21.5273 14.5454H26.0364C25.3091 10.4727 21.8182 7.27274 17.4545 7.27274C12.6545 7.27274 8.72725 11.2 8.72725 16C8.72725 20.7026 12.4969 24.5724 17.1636 24.7272H32V20.3636H17.4546C13.3125 20.2708 11.9342 15.7128 14.1375 13.1359C16.3177 10.6042 20.4394 11.4068 21.5386 14.577"
      fill="#F59E0B"
    />
  </svg>
);

export const MacroERPIcon: React.FC = () => (
  <svg
    width="32"
    height="26"
    viewBox="0 0 32 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="MacroERP"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.5224 -0.00979614L16.0001 5.32204L6.47779 -0.00979614L0 3.6171L16.0001 12.5753L31.9997 3.6171L25.5224 -0.00979614Z"
      fill="#C85FA5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.9996 3.61734L16 12.5755V21.5321L24.0006 17.0532V26.0098L31.9996 21.5311V3.61734Z"
      fill="#7391C8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3.61734L16.0001 12.5755V21.5321L7.99951 17.0532V26.0098L0 21.5311V3.61734Z"
      fill="#50648C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.0006 17.0529L16 21.5318L24.0006 26.0095V17.0529Z"
      fill="#AAAAAA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 17.0529L16.0006 21.5318L8 26.0095V17.0529Z"
      fill="#D2D2D2"
    />
  </svg>
);

export const SensataServicesIcon: React.FC = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.00004 17.3333H5.33337V26.6666C5.33337 28.1373 6.52938 29.3333 8.00004 29.3333H24C25.4707 29.3333 26.6667 28.1373 26.6667 26.6666V17.3333H28C28.2637 17.3333 28.5214 17.255 28.7407 17.1085C28.9599 16.962 29.1307 16.7538 29.2316 16.5102C29.3325 16.2666 29.3589 15.9985 29.3075 15.7399C29.2561 15.4813 29.1291 15.2438 28.9427 15.0573L16.9427 3.05731C16.6927 2.80735 16.3536 2.66693 16 2.66693C15.6465 2.66693 15.3074 2.80735 15.0574 3.05731L3.05737 15.0573C2.87096 15.2438 2.74402 15.4813 2.6926 15.7399C2.64117 15.9985 2.66758 16.2666 2.76847 16.5102C2.86936 16.7538 3.04022 16.962 3.25943 17.1085C3.47864 17.255 3.73637 17.3333 4.00004 17.3333ZM16 5.88531L24 13.8853V20L24.0014 26.6666H8.00004V13.8853L16 5.88531Z"
      fill="#4346A2"
    />
    <path
      d="M16 24C20.9374 24 22.5347 19.2814 22.6 19.0814L20.0667 18.2534C20.056 18.284 19.0254 21.3334 16 21.3334C13.016 21.3334 11.9734 18.372 11.932 18.2454L9.40002 19.0814C9.46536 19.2814 11.0627 24 16 24Z"
      fill="#4346A2"
    />
  </svg>
);

export const RefbookIcon: React.FC = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33325 26V5.99996C5.33325 5.1159 5.68444 4.26806 6.30956 3.64294C6.93468 3.01782 7.78253 2.66663 8.66659 2.66663H26.6666V29.3333H8.66659C7.78253 29.3333 6.93468 28.9821 6.30956 28.357C5.68444 27.7319 5.33325 26.884 5.33325 26ZM5.33325 26C5.33325 25.1159 5.68444 24.2681 6.30956 23.6429C6.93468 23.0178 7.78253 22.6666 8.66659 22.6666H26.6666M10.6666 17.3333L15.9999 7.99996L21.3333 17.3333M12.1334 14.6666H19.7334"
      stroke="#047857"
      strokeWidth="2.9925"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
