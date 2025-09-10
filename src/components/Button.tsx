import { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'secondary', size = 'md', className = '', children, ...props }, ref) => {
    const baseClasses = 'btn';
    const variantClasses = {
      primary: 'btn--primary',
      secondary: 'btn--secondary',
      danger: 'btn--danger',
      ghost: 'btn--ghost',
    };
    const sizeClasses = {
      sm: 'btn--sm',
      md: 'btn--md',
      lg: 'btn--lg',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
