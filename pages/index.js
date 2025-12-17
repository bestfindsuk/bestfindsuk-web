import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/beauty/concealers/clean-under-60");
  }, [router]);

  return null;
}
