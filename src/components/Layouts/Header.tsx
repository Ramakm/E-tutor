"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space, Typography } from "antd";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
const TopBar = dynamic(() => import("@/components/Layouts/Topbar"), {
  ssr: false,
});
const { Title } = Typography;

const Header = () => {
  const [activeNav, setActiveNav] = React.useState<string>("");

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50
        ? setActiveNav(
            "fixed top-0 left-0 w-full shadow-lg z-50 transform transition-transform duration-700 ease-in-out"
          )
        : setActiveNav("");
    }
  };

  return (
    <>
      <TopBar />
      <div
        className={`${activeNav} py-2 lg:px-14 md:px-6 sm:px-5 px-2 bg-neutral`}
      >
        <div className="flex justify-between flex-wrap gap-3 items-center">
          {/*--- Left Info ---*/}
          <div className="flex items-center gap-10">
            <Link href={"/"} className="flex items-center gap-3">
              <RiGraduationCapFill className="inline w-7 h-7 text-primary" />
              <Title level={3}>E-tutor</Title>
            </Link>
            {/*--- Language Section ---*/}
            <div className="lg:hidden block">
              <Space>
                <Select
                  defaultValue="USD"
                  style={{ width: 80 }}
                  bordered={false}
                  options={[
                    { value: "USD", label: "USD" },
                    { value: "bangla", label: "Bangla" },
                    { value: "hindi", label: "Hindi" },
                  ]}
                />
                <Select
                  defaultValue="EN"
                  style={{ width: 80, color: "#fff !important" }}
                  bordered={false}
                  options={[
                    { value: "EN", label: "English" },
                    { value: "bangla", label: "Bangla" },
                    { value: "hindi", label: "Hindi" },
                  ]}
                />
              </Space>
            </div>
            {/*--- Search field ---*/}
            <div className="lg:block hidden">
              <div className="flex items-center gap-3">
                <Select
                  style={{ width: 300, border: 0, borderRadius: 0 }}
                  className={
                    "border border-gray-200 focus:outline-none focus:border-primary rounded-none"
                  }
                  defaultValue="Browser"
                  options={[
                    { label: "Browser", value: "browser" },
                    { label: "Browser One", value: "browser-one" },
                    { label: "Browser Two", value: "browser-two" },
                  ]}
                />
                <Input
                  placeholder="What do you want to learn.."
                  className={
                    "border border-gray-200 focus:outline-none focus:border-primary rounded-none"
                  }
                  prefix={<SearchOutlined className="text-gray-500" />}
                />
              </div>
            </div>
          </div>

          {/*---- Right Info ---*/}
          <div className="flex items-center lg:gap-6 md:gap-4 gap-8">
            <IoMdNotificationsOutline className="inline w-6 h-6 text-gray-500 cursor-pointer" />
            <MdFavoriteBorder className="inline w-5 h-5 text-gray-500 cursor-pointer" />
            <BsCart2 className="inline w-5 h-5 text-gray-500 cursor-pointer" />
            <Space>
              <Button
                style={{
                  backgroundColor: "transparent",
                  borderRadius: 0,
                }}
                className={"bg-secondary text-primary border-none"}
              >
                Create account
              </Button>
              <Button
                className={"bg-primary text-neutral border-none rounded-none"}
              >
                Sign In
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
