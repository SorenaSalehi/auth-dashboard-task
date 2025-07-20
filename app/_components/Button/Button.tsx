"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary";
}

export default function Button({
    variant = "primary",
    disabled,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                disabled && styles.disabled
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
