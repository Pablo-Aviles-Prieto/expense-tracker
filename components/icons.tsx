import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoardIcon,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  LayoutDashboardIcon,
  Loader2,
  LogIn,
  LucideIcon,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  User2Icon,
  UserX2Icon,
  X,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  dashboard: LayoutDashboardIcon,
  logo: Command,
  login: LogIn,
  close: X,
  profile: User2Icon,
  spinner: Loader2,
  kanban: CircuitBoardIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  employee: UserX2Icon,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.5 0 48 48"
      {...props}
    >
      <title>{"Google-color"}</title>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FBBC05"
          d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 0 0 .213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 0 1 9.827 24"
        />
        <path
          fill="#EB4335"
          d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 0 0-21.09 13.071l7.908 6.04a13.849 13.849 0 0 1 13.182-9.51"
        />
        <path
          fill="#34A853"
          d="M23.714 37.867a13.849 13.849 0 0 1-13.182-9.51l-7.909 6.038a23.43 23.43 0 0 0 21.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"
        />
        <path
          fill="#4285F4"
          d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"
        />
      </g>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
  expenses: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-icon="expenses"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 486.3 486.3"
      fill="currentColor"
      {...props}
    >
      <path d="M0 41.25h486.3v128.1c0 44.4-36 80.3-80.3 80.3v-128.8H80.3v128.8c-44.3 0-80.3-36-80.3-80.3V41.25zm220.9 308.1c0 12.4 10.1 22.5 22.5 22.5s22.5-10.1 22.5-22.5-10.1-22.5-22.5-22.5-22.5 10.1-22.5 22.5zm-110.1-199v257.7c0 20.4 16.6 37 37 37h190.5c20.4 0 37-16.6 37-37v-257.7h-31.6v219.7c-2.2-.4-4.5-.6-6.9-.6-20.7 0-37.5 16.8-37.5 37.5 0 2.2.2 4.4.6 6.6H186.2c.4-2.1.6-4.3.6-6.6 0-20.7-16.8-37.5-37.5-37.5-2.4 0-4.7.2-6.9.6v-219.7h-31.6zm132.3 162c-44.7 0-81-36.3-81-81s36.3-81 81-81 81 36.3 81 81-36.3 81-81 81zm41.4-98.9-15.7-15.8-36.2 36-15.1-15.2-15.8 15.7 15.1 15.2 15.7 15.8 15.8-15.7 36.2-36z" />
    </svg>
  ),
  incomes: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-icon="incomes"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 958.736 958.736"
      fill="currentColor"
      {...props}
    >
      <path d="M95.5 944.268h63.8c27.6 0 50-22.399 50-50v-164.3c-53.2 7.8-107.9 12.7-162.9 14.4h-1v149.8c.1 27.7 22.5 50.1 50.1 50.1zM389.1 944.268c27.601 0 50-22.399 50-50v-219.5c-26.5 9.101-54 17.4-81.699 24.801-24.801 6.6-50.4 12.6-75.9 17.8-2 .399-4.1.8-6.2 1.2v175.6c0 27.6 22.4 50 50 50h63.8v.099zM618.7 944.268c27.6 0 50-22.399 50-50v-330.4c-4.8 3.2-9.601 6.3-14.5 9.3-42.3 26.6-88.4 50.7-137.101 71.6-4 1.7-8.1 3.4-12.199 5.101v244.3c0 27.6 22.399 50 50 50h63.8v.099zM898.4 894.268v-577.8c-10.101 20.5-21.801 40.7-35 60.4-29.101 43.3-65.5 84.3-108.4 121.8-6.6 5.8-13.4 11.5-20.4 17.2v378.5c0 27.6 22.4 50 50 50h63.8c27.6-.1 50-22.5 50-50.1zM25.2 713.868h.4c6.7-.101 13.3-.3 20-.5 55.6-1.7 110.3-6.7 163.8-14.7 22.2-3.3 44.1-7.2 65.9-11.6 25-5.101 49.7-10.9 74.101-17.4 30.8-8.2 60.699-17.4 89.699-27.7 22.5-8 44.5-16.5 65.9-25.7 47.3-20.3 91.7-43.399 132.8-69.3 10.601-6.7 21-13.5 31-20.5 23.5-16.3 45.5-33.399 65.9-51.2 40.899-35.699 75.399-74.399 103.1-115.7 27.8-41.4 48.101-84.4 60.7-128.5 5.7-19.9 9.8-39.9 12.4-60.2h22.8c20.1 0 32-22.6 20.6-39.2l-73.5-106.5c-5-7.2-12.8-10.8-20.6-10.8s-15.601 3.6-20.601 10.8l-73.399 106.5c-11.4 16.6.399 39.2 20.6 39.2h22.9c-7.8 45.6-26.2 90.2-55 133-6.3 9.3-13 18.5-20.101 27.5-18.899 24-40.899 46.899-65.899 68.7-25.2 22-53.3 42.8-84.3 62.399-25.101 15.8-51.601 30.5-79.5 44-21.2 10.3-43.2 19.9-65.9 28.8-36.6 14.4-75.2 27-115.5 37.801-16 4.3-32.1 8.199-48.4 11.8-21.7 4.8-43.7 9-65.9 12.6-53.4 8.7-108.1 14-163.8 15.9-6.9.2-13.8.399-20.8.5-13.6.3-24.6 11.3-24.6 25v50c.2 13.8 11.4 25 25.2 25z" />
    </svg>
  ),
  netSavings: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-icon="net-savings"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fill="currentColor"
      viewBox="0 0 512 512"
      {...props}
    >
      <g id="SVGRepo_iconCarrier">
        <style>{".st0{fill:currentColor}"}</style>
        <path
          d="M234.57 374.46h58.859c11.828 0 21.406-9.578 21.406-21.391 0-11.828-9.578-21.406-21.406-21.406h-85.594c-53.516 0-70.453 22.297-89.188 41.031l-33.984 29.672a10.099 10.099 0 0 0-3.469 7.625v98.641c0 1.313.766 2.516 1.969 3.063s2.609.359 3.609-.516l65.672-56.297a10.213 10.213 0 0 1 8.391-2.266l102.344 18.609c7.141 1.297 14.484-.344 20.422-4.531 0 0 130.625-90.828 140.266-98.859 9.188-8.438 9.094-20.672.641-29.875-8.438-9.203-24.172-7.25-34.688.531-9.625 8.016-75.359 51.219-75.359 51.219H234.57l-.25.125c-4.203-.141-7.5-3.672-7.375-7.875.156-4.203 3.688-7.5 7.875-7.359l-.25-.141z"
          className="st0"
        />
        <path
          d="M418.336 193.866C397.758 111.819 318.07 80.96 311.102 73.444l19.594-71.328s-24.469-7.906-58.797 6.828c-43.641 18.734-67.953-5.156-67.953-5.156l21.547 70.781c-6.766 7.688-91.516 42.141-106.875 123.219-7.797 41.094 3.422 92.531 39.25 127.516 12.953-4.984 29.078-8.219 49.969-8.219h85.594c19.844 0 35.984 16.141 35.984 35.984 0 .906-.125 1.797-.188 2.688 78.031-27.094 103.328-105.328 89.109-161.891zm-115.938-22.203-3.422-1.438c-5.625-2.375-11.484-3.578-17.391-3.578-17.125 0-32.828 9.922-40.375 25.109h57.063l-3.516 17.047H236.57a45.35 45.35 0 0 0-.109 2.938c0 2.438.219 4.922.625 7.406h55.563l-3.516 17.047h-45.406c8.281 12.875 22.375 20.672 37.859 20.672 5.25 0 10.5-.969 15.625-2.875l4.094-1.516v23.969l-2.234.594a66.81 66.81 0 0 1-17.484 2.344c-27.859 0-52.922-17.266-62.984-43.188h-14.406v-17.047h10.219c-.313-2.609-.469-5.031-.469-7.406 0-.969.031-1.969.078-2.938h-9.828v-17.047h12.844c8.734-28.156 34.953-47.641 64.547-47.641a66.705 66.705 0 0 1 22.969 4.078l2.438.906-4.597 22.564z"
          className="st0"
        />
      </g>
    </svg>
  ),
  transactions: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-icon="transactions"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 489.882 489.882"
      fill="currentColor"
      {...props}
    >
      <path d="M.641 200.141c-1.8-3.1.4-7 4-7h18.8v-36.7c0-40.9 33.3-74.2 74.2-74.2h45.2v31h-45.2c-23.8 0-43.1 19.3-43.1 43.1v36.7h18.8c3.6 0 5.8 3.9 4 7l-34.3 59.5c-1.8 3.1-6.3 3.1-8.1 0l-34.3-59.4zm417.7-81.1c9.3 0 16.8-7.5 16.8-16.8s-7.5-16.8-16.8-16.8-16.8 7.5-16.8 16.8 7.5 16.8 16.8 16.8zm-176.4 0c9.3 0 16.8-7.5 16.8-16.8s-7.5-16.8-16.8-16.8-16.8 7.5-16.8 16.8 7.6 16.8 16.8 16.8zm-71.5 54.4v-142.4c0-15.3 12.4-27.7 27.7-27.7h264c15.3 0 27.7 12.4 27.7 27.7v142.4c0 15.3-12.4 27.7-27.7 27.7h-264c-15.3 0-27.7-12.4-27.7-27.7zm23.7-28.7c1.6-.3 3.2-.4 4.9-.4 15.5 0 28 12.5 28 28 0 1.8-.2 3.5-.5 5.2h205c-.1-1.1-.2-2.3-.2-3.5 0-15.5 12.5-28 28-28 2.4 0 4.7.3 6.9.9v-86c-2.2.6-4.5.9-6.9.9-15.5 0-28-12.5-28-28 0-2.4.3-4.6.9-6.8h-205.7c.3 1.7.5 3.4.5 5.2 0 15.5-12.5 28-28 28-1.7 0-3.3-.2-4.9-.4v84.9zm75.4-42.5c0-33.5 27.1-60.6 60.6-60.6s60.6 27.1 60.6 60.6-27.1 60.6-60.6 60.6-60.6-27.1-60.6-60.6zm36.7 15.1c.3 6 2.2 10.7 5.8 13.9 3.9 3.5 8.8 5.6 14.6 6.3v7.8c0 1.1.9 1.9 1.9 1.9h6.9c1.1 0 1.9-.9 1.9-1.9v-8c4.7-.9 8.5-2.7 11.4-5.6 3.5-3.3 5.2-7.8 5.2-13.3 0-5.8-1.7-10.2-5.2-13.3-3.4-3.1-8.8-6.2-16.2-9.4-3.2-1.4-5.3-2.8-6.5-4.1-1.2-1.4-1.7-3.1-1.7-5.3 0-2.1.5-3.9 1.6-5.3s2.7-2.1 5-2.1c2.2 0 4 .8 5.3 2.5 1.1 1.4 1.7 3.3 1.9 5.7.1 1.1 1.1 1.9 2.2 1.9l11.4-.2c1.2 0 2.3-1.1 2.2-2.3-.3-5-1.9-9.1-4.8-12.5-3-3.5-7-5.7-11.9-6.7v-8.6c0-1.1-.9-1.9-1.9-1.9h-6.9c-1.1 0-1.9.9-1.9 1.9v8.3c-5.3.8-9.5 2.7-12.8 5.8-3.6 3.5-5.4 7.9-5.4 13.2 0 5.9 1.7 10.4 5.1 13.4s8.8 6.1 16.3 9c3.1 1.3 5.2 2.7 6.4 4.1 1.2 1.4 1.8 3.3 1.8 5.8 0 2.1-.6 3.9-1.8 5.2-1.2 1.3-2.9 2-5.2 2-2.7 0-4.9-.9-6.6-2.6-1.4-1.4-2.2-3.6-2.5-6.5-.1-1.1-1.1-2-2.2-2l-11.3.2c-1.1.5-2.2 1.5-2.1 2.7zm86 259.2h-45.2v31h45.2c40.9 0 74.2-33.3 74.2-74.2v-36.7h18.8c3.6 0 5.8-3.9 4-7l-34.3-59.4c-1.8-3.1-6.3-3.1-8.1 0l-34.3 59.5c-1.8 3.1.4 7 4 7h18.8v36.7c0 23.8-19.3 43.1-43.1 43.1zm-144.3 27.9c9.3 0 16.8-7.5 16.8-16.8s-7.5-16.8-16.8-16.8-16.8 7.5-16.8 16.8 7.5 16.8 16.8 16.8zm-176.4 0c9.3 0 16.8-7.5 16.8-16.8s-7.5-16.8-16.8-16.8-16.8 7.5-16.8 16.8 7.5 16.8 16.8 16.8zm-71.5 54.4v-142.4c0-15.3 12.4-27.7 27.7-27.7h264c15.3 0 27.7 12.4 27.7 27.7v142.4c0 15.3-12.4 27.7-27.7 27.7h-264c-15.3 0-27.7-12.4-27.7-27.7zm23.6-28.7c1.6-.3 3.2-.4 4.9-.4 15.5 0 28 12.5 28 28 0 1.8-.2 3.5-.5 5.2h205c-.1-1.1-.2-2.3-.2-3.5 0-15.5 12.5-28 28-28 2.4 0 4.7.3 6.9.9v-85.9c-2.2.6-4.5.9-6.9.9-15.5 0-28-12.5-28-28 0-2.4.3-4.6.9-6.8h-205.6c.3 1.7.5 3.4.5 5.2 0 15.5-12.5 28-28 28-1.7 0-3.3-.2-4.9-.4v84.8h-.1zm75.4-42.5c0-33.5 27.1-60.6 60.6-60.6s60.6 27.1 60.6 60.6-27.1 60.6-60.6 60.6c-33.4 0-60.6-27.1-60.6-60.6zm36.7 15.2c.3 6 2.2 10.7 5.8 13.9 3.9 3.5 8.8 5.6 14.6 6.3v7.8c0 1.1.9 1.9 1.9 1.9h6.9c1.1 0 1.9-.9 1.9-1.9v-8c4.7-.9 8.5-2.7 11.4-5.6 3.5-3.3 5.2-7.8 5.2-13.3 0-5.8-1.7-10.2-5.2-13.3-3.4-3.1-8.8-6.2-16.2-9.4-3.2-1.4-5.3-2.8-6.5-4.1-1.2-1.4-1.7-3.1-1.7-5.3 0-2.1.5-3.9 1.6-5.3s2.7-2.1 5-2.1c2.2 0 4 .8 5.3 2.5 1.1 1.4 1.7 3.3 1.9 5.7.1 1.1 1.1 1.9 2.2 1.9l11.4-.2c1.2 0 2.3-1.1 2.2-2.3-.3-5-1.9-9.1-4.8-12.5-3-3.5-7-5.7-11.9-6.7v-8.6c0-1.1-.9-1.9-1.9-1.9h-6.9c-1.1 0-1.9.9-1.9 1.9v8.3c-5.3.8-9.5 2.7-12.8 5.8-3.6 3.5-5.4 7.9-5.4 13.2 0 5.9 1.7 10.4 5.1 13.4 3.4 3 8.8 6.1 16.3 9 3.1 1.3 5.2 2.7 6.4 4.1s1.8 3.3 1.8 5.8c0 2.1-.6 3.9-1.8 5.2-1.2 1.3-2.9 2-5.2 2-2.7 0-4.9-.9-6.6-2.6-1.4-1.4-2.2-3.6-2.5-6.5-.1-1.1-1.1-2-2.2-2l-11.3.2c-1.1.4-2.1 1.4-2.1 2.7z" />
    </svg>
  ),
};
