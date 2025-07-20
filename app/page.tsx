import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function home() {
    const cookie = await cookies();

    if (cookie.has("user")) {
        redirect("/dashboard");
    } else {
        redirect("auth");
    }
}
