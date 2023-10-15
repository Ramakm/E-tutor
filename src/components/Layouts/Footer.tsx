"use client";

const Footer = () => {
  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        className="bg-secondary-50 text-neutral capitalize py-4 lg:px-28 md:px-12 sm:px-8 px-4 text-center text-sm"
      >
        <p>
          copyright &copy; all rights reserved by{" "}
          <span className="text-primary font-bold">
            mohammad awlad <span>-</span> 2023
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
