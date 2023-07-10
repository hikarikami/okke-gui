
import Link from 'next/link';

interface NavlinksProps {
    href: string;
    label: string;
  }

  const Navlinks: React.FC<NavlinksProps> = ({ href, label }) => {
    return (
        <Link href={href} className="flex justify-center lg:justify-start gap-x-2 text-base text-white rounded p-2 lg:px-4 hover:bg-lavender-800">
            <svg className="fill-current w-4.5" width="24" height="24" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.92608 1.5C3.93405 1.5 3.94202 1.5 3.95 1.5H6.8C6.80799 1.5 6.81596 1.5 6.82393 1.5C7.01321 1.49998 7.19756 1.49996 7.35368 1.51271C7.52512 1.52672 7.72742 1.55977 7.93099 1.66349C8.21323 1.8073 8.4427 2.03678 8.58651 2.31902C8.69024 2.52259 8.72329 2.72489 8.73729 2.89633C8.75005 3.05245 8.75003 3.2368 8.75 3.42609V6.32391C8.75003 6.51321 8.75005 6.69755 8.73729 6.85368C8.72329 7.02512 8.69024 7.22742 8.58651 7.43099C8.4427 7.71323 8.21323 7.9427 7.93099 8.08651C7.72742 8.19024 7.52512 8.22329 7.35368 8.23729C7.19755 8.25005 7.01321 8.25003 6.82391 8.25H3.92609C3.7368 8.25003 3.55245 8.25005 3.39633 8.23729C3.22489 8.22329 3.02259 8.19024 2.81902 8.08651C2.53678 7.9427 2.3073 7.71323 2.16349 7.43099C2.05977 7.22742 2.02672 7.02512 2.01271 6.85368C1.99996 6.69756 1.99998 6.51321 2 6.32393C2 6.31596 2 6.30799 2 6.3V3.45C2 3.44202 2 3.43405 2 3.42608C1.99998 3.23679 1.99996 3.05245 2.01271 2.89633C2.02672 2.72489 2.05977 2.52259 2.16349 2.31902C2.3073 2.03677 2.53677 1.8073 2.81902 1.66349C3.02259 1.55977 3.22489 1.52672 3.39633 1.51271C3.55245 1.49996 3.73679 1.49998 3.92608 1.5ZM3.50859 3.00859C3.5083 3.0117 3.50802 3.015 3.50773 3.01848C3.50059 3.10592 3.5 3.22761 3.5 3.45V6.3C3.5 6.5224 3.50059 6.64409 3.50773 6.73153C3.50802 6.73501 3.5083 6.7383 3.50859 6.74142C3.5117 6.7417 3.515 6.74199 3.51848 6.74228C3.60592 6.74942 3.72761 6.75 3.95 6.75H6.8C7.0224 6.75 7.14409 6.74942 7.23153 6.74228C7.23501 6.74199 7.2383 6.7417 7.24142 6.74142C7.2417 6.7383 7.24199 6.73501 7.24228 6.73153C7.24942 6.64409 7.25 6.5224 7.25 6.3V3.45C7.25 3.22761 7.24942 3.10592 7.24228 3.01848C7.24199 3.015 7.2417 3.0117 7.24142 3.00859C7.2383 3.0083 7.23501 3.00802 7.23153 3.00773C7.14409 3.00059 7.0224 3 6.8 3H3.95C3.72761 3 3.60592 3.00059 3.51848 3.00773C3.515 3.00802 3.5117 3.0083 3.50859 3.00859ZM12.1761 1.5H15.0739C15.2632 1.49998 15.4476 1.49996 15.6037 1.51271C15.7751 1.52672 15.9774 1.55977 16.181 1.66349C16.4632 1.8073 16.6927 2.03678 16.8365 2.31902C16.9402 2.52259 16.9733 2.72489 16.9873 2.89633C17.0001 3.05245 17 3.23678 17 3.42607V6.32394C17 6.51322 17.0001 6.69756 16.9873 6.85368C16.9733 7.02512 16.9402 7.22742 16.8365 7.43099C16.6927 7.71323 16.4632 7.9427 16.181 8.08651C15.9774 8.19024 15.7751 8.22329 15.6037 8.23729C15.4476 8.25005 15.2632 8.25003 15.0739 8.25H12.1761C11.9868 8.25003 11.8025 8.25005 11.6463 8.23729C11.4749 8.22329 11.2726 8.19024 11.069 8.08651C10.7868 7.9427 10.5573 7.71323 10.4135 7.43099C10.3098 7.22742 10.2767 7.02512 10.2627 6.85368C10.25 6.69755 10.25 6.51321 10.25 6.32391V3.42609C10.25 3.2368 10.25 3.05245 10.2627 2.89633C10.2767 2.72489 10.3098 2.52259 10.4135 2.31902C10.5573 2.03678 10.7868 1.8073 11.069 1.66349C11.2726 1.55977 11.4749 1.52672 11.6463 1.51271C11.8024 1.49996 11.9868 1.49998 12.1761 1.5ZM11.7586 3.00859C11.7583 3.0117 11.758 3.015 11.7577 3.01848C11.7506 3.10592 11.75 3.22761 11.75 3.45V6.3C11.75 6.5224 11.7506 6.64409 11.7577 6.73153C11.758 6.73501 11.7583 6.7383 11.7586 6.74142C11.7617 6.7417 11.765 6.74199 11.7685 6.74228C11.8559 6.74942 11.9776 6.75 12.2 6.75H15.05C15.2724 6.75 15.3941 6.74942 15.4815 6.74228C15.485 6.74199 15.4883 6.7417 15.4914 6.74141C15.4917 6.7383 15.492 6.73501 15.4923 6.73153C15.4994 6.64409 15.5 6.5224 15.5 6.3V3.45C15.5 3.22761 15.4994 3.10592 15.4923 3.01848C15.492 3.015 15.4917 3.0117 15.4914 3.00859C15.4883 3.0083 15.485 3.00802 15.4815 3.00773C15.3941 3.00059 15.2724 3 15.05 3H12.2C11.9776 3 11.8559 3.00059 11.7685 3.00773C11.765 3.00802 11.7617 3.0083 11.7586 3.00859ZM3.92609 9.75H6.82391C7.01321 9.74998 7.19755 9.74996 7.35368 9.76271C7.52512 9.77672 7.72742 9.80977 7.93099 9.91349C8.21323 10.0573 8.4427 10.2868 8.58651 10.569C8.69024 10.7726 8.72329 10.9749 8.73729 11.1463C8.75005 11.3025 8.75003 11.4868 8.75 11.6761V14.5739C8.75003 14.7632 8.75005 14.9476 8.73729 15.1037C8.72329 15.2751 8.69024 15.4774 8.58651 15.681C8.4427 15.9632 8.21323 16.1927 7.93099 16.3365C7.72742 16.4402 7.52512 16.4733 7.35368 16.4873C7.19756 16.5001 7.01322 16.5 6.82394 16.5H3.92607C3.73678 16.5 3.55245 16.5001 3.39633 16.4873C3.22489 16.4733 3.02259 16.4402 2.81902 16.3365C2.53678 16.1927 2.3073 15.9632 2.16349 15.681C2.05977 15.4774 2.02672 15.2751 2.01271 15.1037C1.99996 14.9476 1.99998 14.7632 2 14.5739V11.6761C1.99998 11.4868 1.99996 11.3024 2.01271 11.1463C2.02672 10.9749 2.05977 10.7726 2.16349 10.569C2.3073 10.2868 2.53678 10.0573 2.81902 9.91349C3.02259 9.80977 3.22489 9.77672 3.39633 9.76271C3.55245 9.74996 3.7368 9.74998 3.92609 9.75ZM3.50859 11.2586C3.5083 11.2617 3.50802 11.265 3.50773 11.2685C3.50059 11.3559 3.5 11.4776 3.5 11.7V14.55C3.5 14.7724 3.50059 14.8941 3.50773 14.9815C3.50802 14.985 3.5083 14.9883 3.50859 14.9914C3.5117 14.9917 3.515 14.992 3.51848 14.9923C3.60592 14.9994 3.72761 15 3.95 15H6.8C7.0224 15 7.14409 14.9994 7.23153 14.9923C7.23501 14.992 7.23831 14.9917 7.24142 14.9914C7.2417 14.9883 7.24199 14.985 7.24228 14.9815C7.24942 14.8941 7.25 14.7724 7.25 14.55V11.7C7.25 11.4776 7.24942 11.3559 7.24228 11.2685C7.24199 11.265 7.2417 11.2617 7.24142 11.2586C7.2383 11.2583 7.23501 11.258 7.23153 11.2577C7.14409 11.2506 7.0224 11.25 6.8 11.25H3.95C3.72761 11.25 3.60592 11.2506 3.51848 11.2577C3.515 11.258 3.5117 11.2583 3.50859 11.2586ZM12.1761 9.75H15.0739C15.2632 9.74998 15.4476 9.74996 15.6037 9.76271C15.7751 9.77672 15.9774 9.80977 16.181 9.91349C16.4632 10.0573 16.6927 10.2868 16.8365 10.569C16.9402 10.7726 16.9733 10.9749 16.9873 11.1463C17.0001 11.3024 17 11.4868 17 11.6761V14.5739C17 14.7632 17.0001 14.9476 16.9873 15.1037C16.9733 15.2751 16.9402 15.4774 16.8365 15.681C16.6927 15.9632 16.4632 16.1927 16.181 16.3365C15.9774 16.4402 15.7751 16.4733 15.6037 16.4873C15.4476 16.5001 15.2632 16.5 15.0739 16.5H12.1761C11.9868 16.5 11.8024 16.5001 11.6463 16.4873C11.4749 16.4733 11.2726 16.4402 11.069 16.3365C10.7868 16.1927 10.5573 15.9632 10.4135 15.681C10.3098 15.4774 10.2767 15.2751 10.2627 15.1037C10.25 14.9476 10.25 14.7632 10.25 14.5739V11.6761C10.25 11.4868 10.25 11.3025 10.2627 11.1463C10.2767 10.9749 10.3098 10.7726 10.4135 10.569C10.5573 10.2868 10.7868 10.0573 11.069 9.91349C11.2726 9.80977 11.4749 9.77672 11.6463 9.76271C11.8025 9.74996 11.9868 9.74998 12.1761 9.75ZM11.7586 11.2586C11.7583 11.2617 11.758 11.265 11.7577 11.2685C11.7506 11.3559 11.75 11.4776 11.75 11.7V14.55C11.75 14.7724 11.7506 14.8941 11.7577 14.9815C11.758 14.985 11.7583 14.9883 11.7586 14.9914C11.7617 14.9917 11.765 14.992 11.7685 14.9923C11.8559 14.9994 11.9776 15 12.2 15H15.05C15.2724 15 15.3941 14.9994 15.4815 14.9923C15.485 14.992 15.4883 14.9917 15.4914 14.9914C15.4917 14.9883 15.492 14.985 15.4923 14.9815C15.4994 14.8941 15.5 14.7724 15.5 14.55V11.7C15.5 11.4776 15.4994 11.3559 15.4923 11.2685C15.492 11.265 15.4917 11.2617 15.4914 11.2586C15.4883 11.2583 15.485 11.258 15.4815 11.2577C15.3941 11.2506 15.2724 11.25 15.05 11.25H12.2C11.9776 11.25 11.8559 11.2506 11.7685 11.2577C11.765 11.258 11.7617 11.2583 11.7586 11.2586Z" />
            </svg>
            <span className="hidden lg:block">{label}</span>
        </Link>
    );
};

export default Navlinks; 
