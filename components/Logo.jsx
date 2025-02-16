import Image from "next/image";

function Logo() {
  return (
    <div className="w-max h-max">
      <Image
        src="/sjclogo.png"
        alt="logo"
        style={{ objectFit: "contain" }}
        width={35}
        height={35}
        blurDataURL="/placeholder-logo.jpg"
      />
    </div>
  );
}

export default Logo;
