"use client"
import dynamic from "next/dynamic";
import type { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/Features/counter/counterSlice";
const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  ssr: false,
});
const Category = dynamic(() => import("@/components/Category/Category"), {
  ssr: false,
});
const Courses = dynamic(() => import("@/components/Courses/Courses"), {
  ssr: false,
});
const Instructor = dynamic(() => import("@/components/Instructor/Instructor"), {
  ssr: false,
});
const RecentCourse = dynamic(
  () => import("@/components/RecentCourse/RecentCourse"),
  {
    ssr: false,
  }
);
const TopInstructor = dynamic(
  () => import("@/components/TopInstructor/TopInstructor"),
  {
    ssr: false,
  }
);

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        IncrementByCounter
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h2>increment- {count}</h2>
      <div className="lg:space-y-16 md:space-y-10 space-y-7">
        <Hero />
        <Category />
        <Courses />
        <RecentCourse />
        <Instructor />
      </div>
      <TopInstructor />
    </>
  );
}
