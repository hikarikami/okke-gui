import React, { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'call-to-action';

type ButtonModifer = 'colour' | 'non-colour';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  modifier?: ButtonModifer;
  label: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  size?: ButtonSize;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  buttonType = 'primary',
  modifier = 'color',
  label,
  iconBefore,
  iconAfter,
  size = 'sm',
  className = '',
  ...props
}) => {
    const getButtonClasses = (): string => {
        let baseClasses = ' inline-flex items-center justify-center self-center whitespace-nowrap rounded';

        switch (buttonType) {
            case 'primary':
                baseClasses += ' bg-lavender-500 text-white hover:bg-lavender-400 border border-lavender-500 hover:border-lavender-400';
                break;

            case 'secondary':
                baseClasses += '  border border-colbert-300 text-colbert-900 shadow-sm  hover:bg-lavender-50 hover:text-lavender-700 bg-white';
                break;

            case 'tertiary':
                baseClasses += ' text-lavender-500 hover:bg-lavender-50 hover:text-lavender-700 border border-transparent hover:border-bg-lavender-50';
                break;

            case 'call-to-action':
                baseClasses += ' bg-tangerine-500 text-white hover:bg-tangerine-400';
                break;
        }

        switch (size) {
            case 'sm':
                baseClasses += ' text-xs px-3 py-1.5';
                break;
                
            case 'md':
                baseClasses += ' text-sm px-4 py-2';
                break;

            case 'lg':
            baseClasses += ' text-base px-6 py-4';
            break;

            case 'xl':
                baseClasses += ' text-base px-6 py-4';
                break;
        }

        return baseClasses;
    };

    return (
        <button
            className={`${getButtonClasses()} ${className}`}
            {...props}
        >
            {iconBefore && <span className="mr-2">{iconBefore}</span>}
            {label}
            {iconAfter && <span className="ml-2">{iconAfter}</span>}
        </button>
    );
};

export default Button;