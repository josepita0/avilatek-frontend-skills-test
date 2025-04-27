import { InfoComponent } from "@/modules/info";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {

  const {push} = useRouter()

  useEffect(()=> {
    push("/info")
  }, [push])

  return <InfoComponent />;
}
