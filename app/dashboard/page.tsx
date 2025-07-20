import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import styles from "./dashboard.module.scss";

export const metadata: Metadata = {
    title: "Welcome to Dashboard ",
    description: "auth dashboard task . Dashboard page",
};

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("user");

    if (!userCookie) {
        redirect("/auth");
    }

    const user = JSON.parse(userCookie.value);

    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>
                Welcome {user?.name?.first} {user?.name?.last}
            </h1>
        </div>
    );
}
