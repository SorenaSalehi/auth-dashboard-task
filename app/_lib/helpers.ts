export function validateIranPhone(value: string | null): string | null {
    const re = /^(?:\+98|0)?9\d{9}$/;
    if (!value) return "شماره تلفن را وارد کنید.";
    if (!re.test(value)) return "شماره تلفن وارد شده نامعتبر است.";
    return null;
}
