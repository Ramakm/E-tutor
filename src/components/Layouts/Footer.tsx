"use client";
import { Col, Divider, Row, Typography, Button, Space, Select } from "antd";
import Link from "next/link";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsInstagram, BsArrowRight } from "react-icons/bs";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import appleImg from "../../../public/assets/images/apple_app.png";
import googleImg from "../../../public/assets/images/google_app.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary-100 text-neutral lg:pt-16 pb-4 md:pt-10 pt-6 md:space-y-14 space-y-10">
        <div className="lg:px-28 md:px-12 sm:px-8 px-4">
          <Row gutter={30}>
            {/* Start Learning */}
            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
              <div>
                <Typography.Title
                  level={2}
                  className="text-neutral lg:text-3xl md:text-2xl text-xl"
                >
                  Start learning with 67.1k students around the world.
                </Typography.Title>
                <Space className="mt-5">
                  <Button
                    className={
                      "bg-primary lg:w-40 md:w-40 text-neutral border-none rounded-none"
                    }
                  >
                    Join the Family
                  </Button>
                  <Button
                    className={
                      "bg-gray-700 lg:w-40 md:w-40 text-neutral border-none rounded-none"
                    }
                  >
                    Browser All Courses
                  </Button>
                </Space>
              </div>
            </Col>
            {/*--- Online Course ---*/}
            <Col xs={11} sm={11} md={8} lg={4} xl={4}>
              <div className="lg:ml-4 lg:my-0 my-4">
                <Typography.Title level={2} className="text-neutral">
                  6.3k
                </Typography.Title>
                <Typography.Title level={5} className="text-gray-500 -mt-3">
                  Online course
                </Typography.Title>
              </div>
            </Col>
            {/*--- Instructor ---*/}
            <Col xs={11} sm={11} md={8} lg={4} xl={4}>
              <div className="lg:ml-4 lg:my-0 md:ml-4 my-4">
                <Typography.Title level={2} className="text-neutral">
                  26k
                </Typography.Title>
                <Typography.Title level={5} className="text-gray-500 -mt-3">
                  Certified Instructor
                </Typography.Title>
              </div>
            </Col>
            {/*--- Success ---*/}
            <Col xs={24} sm={24} md={8} lg={4} xl={4}>
              <div className="lg:ml-4 lg:my-0 md:ml-4 my-4">
                <Typography.Title level={2} className="text-neutral">
                  99.9%
                </Typography.Title>
                <Typography.Title level={5} className="text-gray-500 -mt-3">
                  Success Rate
                </Typography.Title>
              </div>
            </Col>
          </Row>
        </div>
        <Divider className="bg-gray-700" />
        <div className="lg:px-28 md:px-12 sm:px-8 px-4">
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="items-center"
          >
            {/*---- E-tutor Info ----*/}
            <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6}>
              <div className="space-y-4">
                <div>
                  <Link href={"/"} className="flex items-center gap-3">
                    <RiGraduationCapFill className="inline w-7 h-7 text-primary" />
                    <Typography.Title level={3} className="text-neutral">
                      E-tutor
                    </Typography.Title>
                  </Link>
                </div>
                <Typography.Title level={5} className="text-gray-500 text-sm">
                  Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                  Donec mattis odio at.
                </Typography.Title>
                <Space>
                  <BiLogoFacebook className="inline w-8 h-8 bg-gray-800 hover:bg-primary text-neutral p-2 duration-200 ease-in-out" />
                  <BsInstagram className="inline w-8 h-8 bg-gray-800 hover:bg-primary text-neutral p-2 duration-200 ease-in-out" />
                  <BiLogoLinkedin className="inline w-8 h-8 bg-gray-800 hover:bg-primary text-neutral p-2 duration-200 ease-in-out" />
                  <BiLogoTwitter className="inline w-8 h-8 bg-gray-800 hover:bg-primary text-neutral p-2 duration-200 ease-in-out" />
                  <AiFillYoutube className="inline w-8 h-8 bg-gray-800 hover:bg-primary text-neutral p-2 duration-200 ease-in-out" />
                </Space>
              </div>
            </Col>
            {/*--- Category ---*/}
            <Col className="gutter-row" xs={12} sm={12} md={8} lg={4} xl={4}>
              <div className="lg:ml-4 md:ml-4 md:my-4 lg:my-0 my-4">
                <Typography.Title level={5} className="text-neutral uppercase">
                  top 4 category
                </Typography.Title>
                <ul>
                  <li>
                    {[...Array(4)]?.map((_, index) => (
                      <Link
                        key={index}
                        href={""}
                        className="block text-gray-500 hover:text-neutral duration-200 ease-in-out text-sm my-2"
                      >
                        {index === 0
                          ? "Development"
                          : index === 1
                          ? "Finance & Accounting"
                          : index === 2
                          ? "Design"
                          : "Business"}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </Col>
            {/*--- Quick Links ---*/}
            <Col className="gutter-row" xs={12} sm={12} md={8} lg={4} xl={4}>
              <div className="lg:ml-4 md:ml-4 md:my-4 lg:my-0 my-4">
                <Typography.Title level={5} className="text-neutral uppercase">
                  quick links
                </Typography.Title>
                <ul>
                  <li>
                    {[...Array(4)]?.map((_, index) => (
                      <Link
                        key={index}
                        href={""}
                        className={`text-gray-500 hover:text-neutral duration-200 ease-in-out text-sm my-2 flex items-center gap-1 ${
                          index === 1 && "w-36 border-b border-primary"
                        }`}
                      >
                        {index === 0
                          ? "About"
                          : index === 1
                          ? "Become Instructor"
                          : index === 2
                          ? "Contact"
                          : "Career"}
                        {index === 1 && <BsArrowRight />}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </Col>
            {/*--- Support ---*/}
            <Col className="gutter-row" xs={12} sm={12} md={8} lg={4} xl={4}>
              <div className="lg:ml-4 md:ml-4 md:my-4 lg:my-0 my-4">
                <Typography.Title level={5} className="text-neutral uppercase">
                  support
                </Typography.Title>
                <ul>
                  <li>
                    {[...Array(4)]?.map((_, index) => (
                      <Link
                        key={index}
                        href={""}
                        className="block text-gray-500 hover:text-neutral duration-200 text-sm my-2"
                      >
                        {index === 0
                          ? "Help Center"
                          : index === 1
                          ? "FAQs"
                          : index === 2
                          ? "Terms & Condition"
                          : "Privacy Policy"}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </Col>
            {/*--- App ---*/}
            <Col className="gutter-row" xs={12} sm={12} md={8} lg={6} xl={6}>
              <div className="lg:ml-4 md:ml-4 md:my-4 lg:my-0 my-4">
                <Typography.Title
                  level={5}
                  className="text-neutral uppercase pb-3"
                >
                  download our app
                </Typography.Title>
                <Link href={""}>
                  <Image
                    src={appleImg}
                    alt="Apple Button"
                    priority
                    width={"0"}
                    height={"0"}
                    className="h-10 w-fll object-cover mb-5"
                  />
                </Link>
                <Link href={""}>
                  <Image
                    src={googleImg}
                    alt="Apple Button"
                    priority
                    width={"0"}
                    height={"0"}
                    className="h-10 w-fll object-cover"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <Divider className="bg-gray-700" />
        <div className="flex justify-between items-center flex-wrap gap-3 lg:px-28 md:px-12 sm:px-8 px-4">
          <p className="text-gray-500 hover:text-neutral duration-200 text-xs">
            &copy;2011 - Eduflex. Designed by{" "}
            <span className="text-gray-300 font-bold">TemplateCookie</span> All
            rights reserved
          </p>
          <Select
            defaultValue="EN"
            style={{ width: 200, border: "1px solid #ccc" }}
            bordered={false}
            options={[
              { value: "EN", label: "English" },
              { value: "bangla", label: "Bangla" },
              { value: "hindi", label: "Hindi" },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
