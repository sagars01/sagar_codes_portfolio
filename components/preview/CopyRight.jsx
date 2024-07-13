import React from "react";

export default function CopyRight() {
  return (
    <div className="copy-right">
      <div className="text-center">
        <span>
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          Sagarmoy Sengupta
        </span>
      </div>
    </div>
  );
}
