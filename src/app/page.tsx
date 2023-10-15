import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
