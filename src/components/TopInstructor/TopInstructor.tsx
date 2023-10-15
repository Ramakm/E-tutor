"use client";
import { Typography, Divider } from "antd";
import { AiFillStar } from "react-icons/ai";
import { TopInstructorData } from "@/dummy/TopInstructorData";
import Image from "next/image";

const TopInstructor = () => {
  return (
    <>
      <div className="bg-neutral px-5 py-3 lg:mx-28 md:mx-12 sm:mx-8 mx-4 lg:-mt-20 md:-mt-36 mb-20 border border-gray-100 shadow-md">
        <Typography.Title level={3} className="font-semibold text-center mt-10 mb-5">
          Top instructor of the month
        </Typography.Title>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6">
          {TopInstructorData?.map((top, index) => (
            <div key={index} className="border border-gray-100">
              <Image
                src={top?.img}
                alt="Icon"
                width={"0"}
                height={"0"}
                priority
                className="w-full h-44 object-cover"
              />
              <div className="py-2 px-3 text-center">
                <Typography.Text
                  className={`text-base capitalize block font-semibold text-gray-900`}
                >
                  {top?.name}
                </Typography.Text>
                <Typography.Text
                  style={{ margin: 0 }}
                  className="text-sm capitalize"
                >
                  {top?.title}
                </Typography.Text>
              </div>
              <Divider className="bg-gray-200 -mt-1" />
              <div className="py-1 pb-4 px-3 -mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <AiFillStar className="text-primary text-lg" />
                    <div>
                      <Typography.Text className={`text-sm`}>
                        {`${top?.rating}.0`}
                      </Typography.Text>
                    </div>
                  </div>
                  <div>
                    <Typography.Text className="text-gray-700 text-sm">
                      {top?.student}{" "}
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

export default TopInstructor;
