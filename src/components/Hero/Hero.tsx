"use client";
import Image from "next/image";
import { Typography, Row, Col, Button } from "antd";
import bannerImg from "../../../public/assets/images/softic_banner_image.png";

const Hero = () => {
  return (
    <>
      <div className="lg:px-40 md:px-28 sm:px-20 px-10 lg:py-10 py-7 bg-accent">
        <Row gutter={20} className="items-center">
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            className="lg:order-1 md:order-1 order-2"
          >
            <div className="md:space-y-6 space-y-3">
              <Typography.Title
                level={1}
                className="lg:text-5xl md:text-3xl text-2xl font-semibold"
              >
                Learn with expert anytime anywhere
              </Typography.Title>
              <Typography.Title
                level={5}
                className="text-gray-500 text-base text-justify"
              >
                Our mision is to help people to find the best course online and
                learn with expert anytime, anywhere.
              </Typography.Title>
              <Button
                className={"bg-primary text-neutral border-none rounded-none"}
              >
                Create Account
              </Button>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            className="lg:order-2 md:order-2 order-1"
          >
            <div>
              <Image
                src={bannerImg}
                alt="Banner Image"
                width={"0"}
                height={"0"}
                priority
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Hero;
