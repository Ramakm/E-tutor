"use client";
import Image from "next/image";
import { Typography, Row, Col } from "antd";
import icon_1 from "../../../public/assets/images/Frame_1.png";
import icon_2 from "../../../public/assets/images/Frame_2.png";
import icon_3 from "../../../public/assets/images/Frame_3.png";
import icon_4 from "../../../public/assets/images/Frame_4.png";
import icon_5 from "../../../public/assets/images/Frame_5.png";
import icon_6 from "../../../public/assets/images/Frame_6.png";
import icon_7 from "../../../public/assets/images/Frame_7.png";
import icon_8 from "../../../public/assets/images/Frame_8.png";
import icon_9 from "../../../public/assets/images/Frame_9.png";
import icon_10 from "../../../public/assets/images/Frame_10.png";
import icon_11 from "../../../public/assets/images/Frame_11.png";
import icon_12 from "../../../public/assets/images/Frame_12.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Category = () => {
  return (
    <>
      <div className="lg:px-28 md:px-12 sm:px-8 px-4">
        <Typography.Title level={2} className="font-semibold text-center mb-7">
          Browse top category
        </Typography.Title>
        {/*--- Card Info ----*/}
        <Row className="items-center">
          {[...Array(12)]?.map((_, index) => (
            <Col key={index} xs={24} sm={24} md={12} lg={6} xl={6}>
              <div
                className={`hover:shadow-lg duration-500 ease-in-out ${
                  index === 0
                    ? "bg-secondary-75"
                    : index === 1
                    ? "bg-success"
                    : index === 2
                    ? "bg-warning"
                    : index === 3
                    ? "bg-error"
                    : index === 4
                    ? "bg-Gray"
                    : index === 5
                    ? "bg-Gray-50"
                    : index === 6
                    ? "bg-secondary-75"
                    : index === 7
                    ? "bg-Gray-50"
                    : index === 8
                    ? "bg-warning"
                    : index === 9
                    ? "bg-primary-50"
                    : index === 10
                    ? "bg-success"
                    : "bg-warning"
                } px-3 py-2 lg:m-3 md:mx-3 my-3`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={
                      index === 0
                        ? icon_1
                        : index === 1
                        ? icon_2
                        : index === 2
                        ? icon_3
                        : index === 3
                        ? icon_4
                        : index === 4
                        ? icon_5
                        : index === 5
                        ? icon_6
                        : index === 6
                        ? icon_7
                        : index === 7
                        ? icon_8
                        : index === 8
                        ? icon_9
                        : index === 9
                        ? icon_10
                        : index === 10
                        ? icon_11
                        : icon_12
                    }
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                  />
                  <div>
                    <Typography.Title level={5} className="text-sm capitalize">
                      {index === 0
                        ? "label"
                        : index === 1
                        ? "business"
                        : index === 2
                        ? "finance & accounting"
                        : index === 3
                        ? "it & software"
                        : index === 4
                        ? "personal development"
                        : index === 5
                        ? "office productivity"
                        : index === 6
                        ? "marketing"
                        : index === 7
                        ? "photography & video"
                        : index === 8
                        ? "lifestyle"
                        : index === 9
                        ? "design"
                        : index === 10
                        ? "health & fitness"
                        : "music"}
                    </Typography.Title>
                    <Typography.Title
                      level={5}
                      className="text-gray-500 text-xs -mt-1"
                    >
                      63,476 Courses
                    </Typography.Title>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/*--- Button ----*/}
        <div className="flex justify-center items-center gap-2 mt-3">
          <div>
            <Typography.Title level={2} className="text-sm text-gray-500">
              We have more category & subcategory.
            </Typography.Title>
          </div>
          <Link
            href={""}
            className="text-primary flex items-center gap-2 text-sm"
          >
            Browser All <BsArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category;
