import Image from "next/image";
import React from "react";

function CustomImage() {
  return (
    <>
      <Image
        src="https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="img"
        width={50}
        height={50}
        style={{ width: 400, height: 400, objectFit: "cover" }}
      />
      <Image
        src="https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="img"
        width={500}
        height={500}
        style={{ width: 400, height: 400, objectFit: "cover" }}
      />
    </>
  );
}

export default CustomImage;
