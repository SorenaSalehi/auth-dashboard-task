"use client";

import { useState, FormEvent } from "react";
import Input from "../_components/Input/Input";
import Button from "../_components/Button/Button";
import styles from "./auth.module.scss";
import { loginAction } from "../_lib/actions";
import { validateIranPhone } from "../_lib/helpers";

export default function AuthPage() {
    const [phone, setPhone] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string | null>(
        "شماره تلفن را وارد کنید."
    );

    const handleValueChange = (value: string, error: string | null) => {
        setPhone(value);
        setPhoneError(error);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        if (phoneError) {
            e.preventDefault();
        }
    };

    return (
        <div className={styles.container}>
            <form
                action={loginAction}
                method="post"
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <h1 className={styles.title}>خوش آمدید</h1>

                <Input
                    name="phone"
                    label="شماره تلفن"
                    type="tel"
                    required
                    validate={validateIranPhone}
                    onValueChange={handleValueChange}
                />

                <Button type="submit" disabled={!!phoneError}>
                    ورود
                </Button>
            </form>
        </div>
    );
}
