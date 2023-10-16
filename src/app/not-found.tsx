import dynamic from "next/dynamic";
const NotFound = dynamic(() => import("@/components/NotFound/NotFound"), {
  ssr: false,
});

export default function Notfound() {
  return (
    <>
      <NotFound />
    </>
  );
}
