import Context from "./Context.js";
import React from "react";
import colorJson from "../color.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";


export default function Provider({ children }) {
  const blueColor = colorJson?.colors?.blue?.map((item) => item);
  const redColor = colorJson?.colors?.red?.map((item) => item);
  const yellowColor = colorJson?.colors?.Yellow?.map((item) => item);
  const greenColor = colorJson?.colors?.green?.map((item) => item);
  const fancyColor = colorJson?.colors?.Fancy?.map((item) => item);
  const greyColor = colorJson?.colors?.Grey?.map((item) => item);
  const [copied, setCopied] = React.useState(false);
  const copyText = (text) => {
    console.log(text);
    setCopied(true);
    toast.success('successfully copied' + text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };
  return (
    <div>
      <Context.Provider
        value={{
          blueColor,
          redColor,
          yellowColor,
          greenColor,
          greyColor,
          fancyColor,
          copied,
          copyText
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
}
