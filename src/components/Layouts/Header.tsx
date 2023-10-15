"use client";
import React from "react";
import Link from "next/link";
import { Typography } from "antd";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
const { Title } = Typography;
import { Select, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const browserData = [
  { label: "Browser", value: 1 },
  { label: "Browser One", value: 2 },
  { label: "Browser Two", value: 3 },
];

const Header = () => {
  const [selectType, setSelectType] = React.useState(browserData[0]);
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
            "fixed top-0 left-0 w-full shadow-lg z-30 transform transition-transform duration-700 ease-in-out"
          )
        : setActiveNav("");
    }
  };

  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
      >
        <div
          className={`${activeNav} py-4 lg:px-14 md:px-6 sm:px-5 px-2 bg-neutral`}
        >
          <div className="flex justify-between items-center">
            {/*--- Left Info ---*/}
            <div className="flex items-center gap-10">
              <Link href={"/"} className="flex items-center gap-3">
                <RiGraduationCapFill className="inline w-7 h-7 text-primary" />
                <Title level={3}>E-tutor</Title>
              </Link>
              {/*--- Search field ---*/}
              <div className="lg:block hidden">
                <div className="flex items-center gap-3">
                  <Select
                    style={{ width: 300, border: 0, borderRadius: 0 }}
                    className={
                      "border border-gray-200 focus:outline-none focus:border-primary rounded-none"
                    }
                    value={selectType}
                    onChange={(e: any) => setSelectType(e.target?.value)}
                    options={browserData.map((city) => ({
                      label: city?.label,
                      value: city?.value,
                    }))}
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
            <div className="flex items-center gap-4">
              <IoMdNotificationsOutline className="inline w-6 h-6 text-gray-500 cursor-pointer" />
              <MdFavoriteBorder className="inline w-5 h-5 text-gray-500 cursor-pointer" />
              <BsCart2 className="inline w-5 h-5 text-gray-500 cursor-pointer" />
              <Space wrap>
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
      </div>
    </>
  );
};

export default Header;
