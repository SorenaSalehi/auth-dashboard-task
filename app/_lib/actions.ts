"use server";

import { cookies } from "next/headers";
import { validateIranPhone } from "./helpers";
import { getOneRandomUser } from "./randomUserApi";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
    const phone = formData.get("phone")?.toString() || "";

    const checkNum = validateIranPhone(phone);

    const data = await getOneRandomUser(checkNum);

    (await cookies()).set({
        name: "user",
        value: JSON.stringify(data?.results[0]),
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
    });

    redirect("/dashboard");
}
