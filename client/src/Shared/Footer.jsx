import moment from "moment/moment";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='text-white flex flex-col lg:flex-row '>
        {/* left div */}
        <div className='bg-[#1F2937] flex justify-center items-center w-full flex-col py-20'>
          <h2 className='uppercase pb-6 font-medium text-3xl'>Contact US</h2>
          <div>
            123 ABS Street, Uni 21, Bangladesh <br /> Mon - Fri: 08:00 - 22:00{" "}
            <br /> Sat - Sun: 10:00 - 23:00
          </div>
        </div>
        {/* Right div */}
        <div className='bg-[#111827] w-full flex justify-center items-center flex-col py-20'>
          <h2 className='font-medium text-3xl'>Follow Us</h2>
          <h2 className='pt-8 pb-6'>Join us on social media</h2>
          <div className='flex gap-8'>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* bottom div */}
      <div className='text-center bg-[#151515] text-white'>
        <h2> ©Copyright - {moment().format(" YYYY")} All rights reserved.</h2>
        <h2>Developed By - Nihan Shahriar</h2>
      </div>
    </>
  );
};

export default Footer;
