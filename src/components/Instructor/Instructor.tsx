"use client";
import { Row, Col, Typography, Button } from "antd";
import { BsArrowRight } from "react-icons/bs";
import becomeImg from "../../../public/assets/images/become_instructor.png";
import Image from "next/image";

const Instructor = () => {
  return (
    <>
      <div className="lg:px-28 md:px-12 sm:px-8 px-4 lg:pt-10 lg:pb-40 md:pt-10 md:pb-44 py-7 bg-accent">
        <div className="lg:mx-10 md:mx-6">
          <Row className="items-center">
            {/*--- Instructor Section ---*/}
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className="bg-primary px-5 py-5 text-neutral flex justify-between gap-3 relative">
                <div className="space-y-5">
                  <Typography.Text className="text-2xl text-neutral block">
                    Become an instructor
                  </Typography.Text>
                  <Typography.Title
                    level={4}
                    className="text-xs text-gray-100 md:w-72"
                  >
                    Instructors from around the world teach millions of students
                    on Udemy. We provide the tools and skills to teach what you
                    love.
                  </Typography.Title>
                  <Button
                    className={
                      "bg-neutral text-primary border-none rounded-none flex items-center gap-2"
                    }
                  >
                    Start Teaching
                    <BsArrowRight />
                  </Button>
                </div>
                <Image
                  src={becomeImg}
                  alt="Become Instructor Image"
                  width={"0"}
                  height={"0"}
                  priority
                  className="lg:block md:block hidden w-36 h-auto object-cover absolute bottom-0 right-5"
                />
              </div>
            </Col>
            {/*--- Earning Step ----  */}
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className="bg-neutral px-6 py-7 lg:mx-6 lg:my-0 my-6">
                <Typography.Text className="md:text-2xl text-xl block">
                  Your teaching & earning steps
                </Typography.Text>
                <div className="flex justify-between flex-wrap items-center gap-4 my-3">
                  {[...Array(4)]?.map((_, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Typography.Text
                        className={`${
                          index === 0
                            ? "bg-secondary-75 text-blue-500"
                            : index === 1
                            ? "bg-primary-50 text-primary"
                            : index === 2
                            ? "bg-primary-50 text-primary"
                            : "bg-success text-success-100"
                        } w-8 h-8 rounded-full text-lg flex justify-center items-center`}
                      >
                        {index === 0
                          ? 1
                          : index === 1
                          ? 2
                          : index === 2
                          ? 3
                          : 4}
                      </Typography.Text>
                      <Typography.Text className={`text-xs`}>
                        {index === 0
                          ? "Apply to become instructor"
                          : index === 1
                          ? "Build & edit your profile"
                          : index === 2
                          ? "Create your new course"
                          : "Start teaching & earning"}
                      </Typography.Text>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Instructor;
