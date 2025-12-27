"use client";

import { useRouter } from "next/navigation";

const Banner = () => {
    const router = useRouter();
      const checkPassword = () => {
        const password = window.prompt("Enter the banner password:");
    if (password === "12345"){
alert("Access Granted");
router.push("/dashboard");
    } 
    else {
      alert("Access Denied To The Dashboard");
    };
   
  };
  return ( 
    <section
      className="flex items-center h-[300px] "
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
        <div className="text-center h-full  justify-center content-center w-full">
      <h1 className="text-white text-3xl flex items-center justify-center font-bold">
        Welcome to Our Website
      </h1>
         <button onClick={checkPassword} className="mt-4 bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Learn More
      </button>
   </div>
    
    </section>
  );
};

export default Banner;
