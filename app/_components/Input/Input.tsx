"use client";

import { InputHTMLAttributes, ChangeEvent, FocusEvent, useState } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    validate?: (value: string) => string | null;
    onValueChange?: (value: string, error: string | null) => void;
}

export default function Input({
    label,
    validate,
    onValueChange,
    ...props
}: InputProps) {
    const [error, setError] = useState<string | null>(null);

    const runValidation = (value: string) => {
        const err = validate ? validate(value) : null;
        setError(err);
        onValueChange?.(value, err);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        runValidation(value);
        props.onChange?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        runValidation(e.target.value);
        props.onBlur?.(e);
    };

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
                {...props}
                className={styles.input}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={11}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
