import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  ssr: false,
});
const Category = dynamic(() => import("@/components/Category/Category"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="lg:space-y-16 md:space-y-10 space-y-7">
        <Hero />
        <Category />
      </div>
    </>
  );
}
