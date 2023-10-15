"use client";
import Image from "next/image";
import { Typography, Divider } from "antd";
import { CourseData } from "@/dummy/CourseData";
import { AiFillStar } from "react-icons/ai";

const Courses = () => {
  return (
    <>
      <div className="bg-accent lg:px-28 md:px-12 sm:px-8 px-4 lg:py-10 py-7">
        <Typography.Title level={2} className="font-semibold text-center mb-7">
          Best selling courses
        </Typography.Title>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6">
          {CourseData?.map((course, index) => (
            <div key={index} className="shadow-lg">
              <Image
                src={course?.img}
                alt="Icon"
                width={"0"}
                height={"0"}
                priority
                className="w-full h-60 object-cover"
              />
              <div className="py-2 px-3">
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
                  className="text-sm mt-1 text-gray-900"
                >
                  {course?.des?.substring(0, 40) === course?.des
                    ? course?.des?.substring(0, 40)
                    : course?.des?.substring(0, 40) + "..."}
                </Typography.Text>
              </div>
              <Divider className="bg-gray-200 -mt-1" />
              <div className="py-1 pb-4 px-3 -mt-4">
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
                      ${course?.student}{" "}
                      <span className="text-gray-500">students</span>
                    </Typography.Text>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
