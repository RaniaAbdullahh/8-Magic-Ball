import { useRouter } from "next/router";
import Link from "next/link";


export default function Career() {
  const router = useRouter();
    const data = router.query;
    console.log(data.result);
  return (
    <>
      <h1 className="flex w-1/2 bg-red-200 mx-auto my-5 p-2 text-8xl mx-1">
        {data.result}
      </h1>

      <Link href="/">
        <a className="flex w-1/2 bg-teal-100 mx-auto my-5 p-2 text-2xl mx-1">
          {" "}
          back to Home{" "}
        </a>
      </Link>
    </>
  );
}
