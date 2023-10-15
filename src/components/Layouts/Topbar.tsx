import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Select, Drawer, Space, Typography, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { RiGraduationCapFill } from "react-icons/ri";
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
      <div className="bg-secondary-100 text-gray-500 py-3 lg:px-14 md:px-6 sm:px-5 px-2 ">
        <div className="flex justify-between items-center gap-3">
          {/*--- Left Header Item ---*/}
          <div>
            <AiOutlineMenu
              onClick={() => setOpen(true)}
              className="text-xl lg:hidden block cursor-pointer"
            />
            {/*--- Mobile Menu ----*/}
            <Drawer
              style={{ backgroundColor: "#1D2026" }}
              placement={"left"}
              closable={false}
              onClose={() => setOpen(false)}
              open={open}
            >
              <Link href={"/"} className="flex items-center gap-3">
                <RiGraduationCapFill className="inline w-7 h-7 text-primary" />
                <Title level={3} className="text-neutral">
                  E-tutor
                </Title>
              </Link>
              <ul className="capitalize">
                {links.map((link) => (
                  <li
                    key={link?.name}
                    className={`text-sm hover:text-neutral duration-200 ease-in-out my-3 ${
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
              <div className="space-y-4">
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
                  placeholder="What do you want to learn.."
                  className={
                    "border border-gray-600 focus:outline-none focus:border-primary rounded-none bg-secondary-100"
                  }
                  prefix={<SearchOutlined className="text-gray-500" />}
                />
              </div>
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
          {/*---- Right Info ----*/}
          <div>
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
