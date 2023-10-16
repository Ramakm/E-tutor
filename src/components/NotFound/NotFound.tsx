"use client";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { Typography, Button } from "antd";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 h-screen">
        <div>
          <Typography.Title
            level={2}
            className="font-semibold text-error block mb-7"
          >
            {`Sorry, couldn't find this page`}
          </Typography.Title>
          <div className="flex justify-center">
            <Link href={"/"}>
              <Button className="flex items-center gap-3 border-none rounded-none bg-warning text-primary ">
                <BiArrowBack /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
