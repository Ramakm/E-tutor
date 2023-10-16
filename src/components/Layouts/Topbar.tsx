import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Select, Drawer, Space, Typography, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { RiGraduationCapFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
const { Title } = Typography;

const links = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "courses", link: "/courses" },
  { name: "Contact", link: "/contact" },
  { name: "become a instructor", link: "/instructor" },
];

const activeColor = "text-neutral";
const inactiveColor = "text-gray-500";

const TopBar = () => {
  const [activeLink, setActiveLink] = React.useState<string>(links[0]?.name);
  const [open, setOpen] = React.useState(false);

  const setActive = (index: any) => {
    setActiveLink(index);
  };

  return (
    <>
      <div className="bg-secondary-100 text-gray-500 py-3 lg:px-14 md:px-6 sm:px-5 px-2">
        <div className="flex justify-between items-center gap-3">
          {/*--- Mobile Menu ----*/}
          <div>
            <AiOutlineMenu
              onClick={() => setOpen(true)}
              className="text-xl lg:hidden block cursor-pointer text-primary"
            />
            <Drawer
              style={{ backgroundColor: "#1D2026" }}
              placement={"left"}
              closable={false}
              onClose={() => setOpen(false)}
              open={open}
            >
              <div className="flex justify-between items-center">
                <Link href={"/"} className="flex items-center gap-3">
                  <RiGraduationCapFill className="inline w-7 h-7 text-primary" />
                  <Title level={3} className="text-neutral">
                    E-tutor
                  </Title>
                </Link>
                <AiOutlineClose
                  onClick={() => setOpen(false)}
                  className="inline w-7 h-7 p-1 text-red-500 cursor-pointer border rounded-full"
                />
              </div>
              <ul className="capitalize float-left">
                {links.map((link) => (
                  <li
                    key={link?.name}
                    className={`text-base hover:text-neutral duration-200 ease-in-out my-3 ${
                      activeLink === link?.name ? activeColor : inactiveColor
                    }`}
                    onClick={() => {
                      setActive(link?.name);
                      setOpen(false);
                    }}
                  >
                    <Link href={link.link}>{link?.name}</Link>
                  </li>
                ))}
              </ul>
            </Drawer>
            <div className="lg:block hidden">
              <ul className="flex items-center gap-6 capitalize">
                {links.map((link) => (
                  <li
                    key={link?.name}
                    className={`text-sm hover:text-neutral duration-200 ease-in-out ${
                      activeLink === link?.name ? activeColor : inactiveColor
                    }`}
                    onClick={() => setActive(link?.name)}
                  >
                    <Link href={link.link}>{link?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/*--- Middle Search bar ---*/}
          <div className="lg:hidden block">
            <div className="flex items-center gap-3">
              <Select
                style={{ width: "100%", border: 0, borderRadius: 0 }}
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
                style={{ width: "100%" }}
                placeholder="What do you want to learn.."
                className={
                  "border border-gray-200 focus:outline-none focus:border-primary rounded-none text-neutral"
                }
                prefix={<SearchOutlined className="text-gray-500" />}
              />
            </div>
          </div>
          {/*---- Right Info ----*/}
          <div className="lg:block hidden">
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
                defaultValue="USD"
                style={{ width: 80, color: "#fff !important" }}
                bordered={false}
                options={[
                  { value: "USD", label: "USD" },
                  { value: "bangla", label: "Bangla" },
                  { value: "hindi", label: "Hindi" },
                ]}
              />
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
