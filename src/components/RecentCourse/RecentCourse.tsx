"use client";
import { CourseData } from "@/dummy/CourseData";
import { Typography, Divider, Button } from "antd";
import Image from "next/image";
import { AiFillStar, AiOutlineUser, AiOutlineCheck } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { FiBarChart } from "react-icons/fi";
import { BsArrowRight, BsCart2 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import UserImg from "../../../public/assets/images/Photo.png";

const RecentCourse = () => {
  return (
    <>
      <div className="lg:px-28 md:px-12 sm:px-8 px-4 lg:py-10 py-7 relative">
        <Typography.Title level={2} className="font-semibold text-center mb-7">
          Recently added courses
        </Typography.Title>
        {/*---- Card Info -----*/}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 ">
          {CourseData?.slice(0, 4)?.map((course, index) => (
            <div key={index} className="group">
              {/*--- Recent Course ----*/}
              <div className="lg:group-hover:hidden block h-[333px] border border-gray-100 z-0">
                <Image
                  src={course?.img}
                  alt="Icon"
                  width={"0"}
                  height={"0"}
                  priority
                  className="w-full h-[183px] object-cover"
                />
                <div className="py-3 space-y-2">
                  <div className="px-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <Typography.Text
                          className={`${
                            index === 0
                              ? "bg-secondary text-primary"
                              : index === 1
                              ? "bg-secondary-75 text-blue-500"
                              : index === 2
                              ? "bg-success text-success-100"
                              : index === 3
                              ? "bg-secondary-75 text-secondary-30"
                              : index === 4
                              ? "bg-error text-error"
                              : index === 5
                              ? "bg-warning text-warning"
                              : index === 6
                              ? "bg-secondary-75 text-secondary-30"
                              : index === 7
                              ? "bg-success text-success-100"
                              : index === 8
                              ? "bg-secondary text-primary"
                              : "bg-warning text-warning"
                          } text-xs uppercase px-2 py-0.5`}
                        >
                          {course?.title}
                        </Typography.Text>
                      </div>
                      <div>
                        <Typography.Text className="text-primary text-sm font-bold">
                          ${course?.price}
                        </Typography.Text>
                      </div>
                    </div>
                    <Typography.Text
                      style={{ margin: 0 }}
                      className="text-sm my-3 text-gray-900 block font-semibold"
                    >
                      {course?.des?.substring(0, 40) === course?.des
                        ? course?.des?.substring(0, 40)
                        : course?.des?.substring(0, 40) + "..."}
                    </Typography.Text>
                  </div>
                  <Divider className="bg-gray-200 -mt-1" />
                  <div className="px-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <AiFillStar className="text-primary text-lg" />
                        <div>
                          <Typography.Text className={`text-sm`}>
                            {`${course?.rating}.0`}
                          </Typography.Text>
                        </div>
                      </div>
                      <div>
                        <Typography.Text className="text-gray-700 text-sm">
                          {course?.student}{" "}
                          <span className="text-gray-500">students</span>
                        </Typography.Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*---- Hover to Course Details ----*/}
              <div
                className={`lg:w-[424px] lg:h-[670px] absolute lg:-top-14 ${
                  index === 3 && "right-20"
                } z-50 lg:group-hover:block hidden duration-400 ease-in-out bg-neutral shadow-xl space-y-2`}
              >
                <div className="p-5 space-y-4">
                  {/*--- Title & Desc ----*/}
                  <div>
                    <Typography.Text
                      className={`bg-secondary-75 text-blue-500 text-xs uppercase px-2 py-0.5`}
                    >
                      {course?.title}
                    </Typography.Text>
                    <Typography.Text
                      style={{ margin: 0 }}
                      className="text-sm my-3 text-gray-900 block font-semibold"
                    >
                      {course?.des}
                    </Typography.Text>
                  </div>
                  {/*--- User Info ---*/}
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={UserImg}
                        alt="User Image"
                        width={"0"}
                        height={"0"}
                        priority
                      />
                      <div>
                        <Typography.Text
                          style={{ margin: 0 }}
                          className="text-sm text-gray-500"
                        >
                          Course by
                        </Typography.Text>
                        <Typography.Text
                          style={{ margin: 0 }}
                          className="text-sm text-gray-900 block font-semibold"
                        >
                          Kevin Gibert
                        </Typography.Text>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <AiFillStar className="text-primary text-lg" />
                      <div>
                        <Typography.Text className={`text-sm font-semibold`}>
                          {`${course?.rating}.0`}
                        </Typography.Text>{" "}
                        <Typography.Text
                          style={{ margin: 0 }}
                          className="text-sm text-gray-500"
                        >
                          (357,914)
                        </Typography.Text>
                      </div>
                    </div>
                  </div>
                  {/*--- Student Details ----*/}
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    {[...Array(3)]?.map((_, index) => (
                      <div key={index} className="flex items-center gap-1">
                        {index === 0 ? (
                          <AiOutlineUser className="text-secondary-30 text-sm" />
                        ) : index === 1 ? (
                          <FiBarChart className="text-primary text-sm" />
                        ) : (
                          <BiTime className="text-success-100 text-sm" />
                        )}
                        <div>
                          {index === 0 ? (
                            <Typography.Text className="text-gray-700 text-sm">
                              {course?.student}{" "}
                              <span className="text-gray-500">students</span>
                            </Typography.Text>
                          ) : index === 1 ? (
                            <Typography.Text className="text-gray-500 text-sm">
                              Beginner
                            </Typography.Text>
                          ) : (
                            <Typography.Text className="text-gray-500 text-sm">
                              6 hour
                            </Typography.Text>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/*--- Price ----*/}
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <Typography.Text className="text-gray-700 text-sm font-semibold">
                        {`$${course?.price}`}{" "}
                        <span className="text-gray-400 line-through">$40</span>
                      </Typography.Text>
                      <div className="px-4 py-0.5 bg-primary-50">
                        <Typography.Text className="text-primary text-xs font-semibold">
                          50% OFF
                        </Typography.Text>
                      </div>
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center p-1 bg-primary-50 text-primary cursor-pointer">
                      <MdFavoriteBorder />
                    </div>
                  </div>
                </div>
                <Divider className="bg-gray-100" />
                <div className="p-5 space-y-4">
                  {/*---- Learn ----*/}
                  <div>
                    <Typography.Text
                      style={{ margin: 0 }}
                      className="text-xs text-gray-900 block font-semibold uppercase"
                    >
                      {`what you'LL learn`}
                    </Typography.Text>
                    {[1, 2, 3]?.map((_, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 space-y-4"
                      >
                        <AiOutlineCheck className="text-lg text-success-100" />
                        <div>
                          <Typography.Text
                            style={{ margin: 0 }}
                            className="text-sm text-gray-500"
                          >
                            Learn to use Python professionally, learning both
                            Python 2 and Python 3!
                          </Typography.Text>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/*--- Button ---*/}
                  <div className="space-y-3 pt-3">
                    <Button
                      className={
                        "w-full h-10 flex justify-center items-center gap-3 bg-primary text-neutral border-none rounded-none"
                      }
                    >
                      <BsCart2 className="text-xl" /> Add To Cart
                    </Button>
                    <Button
                      className={
                        "w-full h-10 bg-secondary text-primary border-none rounded-none text-center"
                      }
                    >
                      Course Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*--- Button ----*/}
        <div className="mt-16 flex justify-center">
          <Button
            className={
              "flex items-center gap-3 bg-secondary text-primary border-none rounded-none"
            }
          >
            Browser All Courses <BsArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default RecentCourse;
