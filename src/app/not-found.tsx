import dynamic from "next/dynamic";
const NotFound = dynamic(() => import("@/components/NotFound/NotFound"), {
  ssr: false,
});

export const metadata = {
  title: "Not found",
  description: "This page not working.",
};

export default function Notfound() {
  return (
    <>
      <NotFound />
    </>
  );
}
