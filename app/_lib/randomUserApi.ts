export async function getOneRandomUser(checkNum: string | null) {
    if (checkNum !== null) return;

    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");

    if (!res.ok) throw new Error("خطا در دریافت کاربر");

    return await res.json();
}
