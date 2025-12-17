import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home/vacuums/cordless-under-120");
  }, [router]);

  return null;
}
