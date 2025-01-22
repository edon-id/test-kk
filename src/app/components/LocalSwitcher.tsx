import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation"; // Changed from "next/navigation"
import React, { ChangeEvent } from "react";

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const currentPath = pathname;

    const pathWithoutLocale = currentPath.replace(/\/[a-z]{2}\b/, "");

    router.replace(`/${nextLocale}${pathWithoutLocale}`);
  };

  return (
    <select
      className="cursor-pointer px-4 py-2 rounded-lg bg-customGreen text-white text-center"
      defaultValue={localActive}
      onChange={onSelectChange}
    >
      <option value="en">EN</option>
      <option value="sq">SQ</option>
      <option value="ar">AR</option>
    </select>
  );
}
