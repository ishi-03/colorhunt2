import React from "react";
import "./colors.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Context from "../context/Context";

const Color = ({ colorName, colorHeading, bgColor }) => {
  const { copyText } = React.useContext(Context);

  return (
    <>
      <div className="container">
        <div className="ind-container">
          <h1 style={{ backgroundColor: `${bgColor}` }} className="heading">
            {colorHeading}
          </h1>
          <div className="flex">
            {Object.values(colorName)?.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    className="color"
                    style={{ backgroundColor: `${item}` }}
                  ></div>
                  <CopyToClipboard text={item} onCopy={() => copyText(item)}>
                    <button
                      className="color-name"
                      style={{ backgroundColor: `${item}` }}
                    >
                      {item}
                    </button>
                  </CopyToClipboard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Color;
