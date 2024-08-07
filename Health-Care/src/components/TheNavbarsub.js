import React from 'react';
import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsLinkedin,
  BsMapFill,
  BsTwitter,
} from 'react-icons/bs';

const TheNavbarsub = () => {
  return (
    <div className="md:grid md:grid-cols-3 py-3">
      <div className="grid place-content-center md:place-content-start md:col-span-2 md:flex md:flex-wrap md:items-center">
        <p className="mx-2">
          <BsFillTelephoneFill className="inline-block my-1 md:my-0 mx-1 bg-gray-200 w-8 h-8 rounded-full p-1" />
          <span className="text-white">+012 345 678 900</span>
        </p>
        <p className="mx-2">
          <BsFillEnvelopeFill className="inline-block my-1 md:my-0 mx-1 bg-gray-200 w-8 h-8 rounded-full p-1" />
          <span className="text-white">example@gmail.com</span>
        </p>
        <p className="mx-2">
          <BsMapFill className="inline-block my-1 md:my-0 mx-1 bg-gray-200 w-8 h-8 rounded-full p-1" />
          <span className="text-white">Via Rogoredo, 36 - Milan</span>
        </p>
      </div>
      <div className="flex justify-center md:justify-end md:items-center">
        <BsFacebook className="mx-1 bg-gray-200 w-8 h-8 rounded-full p-1" />
        <BsTwitter className="mx-1 bg-gray-200 w-8 h-8 rounded-full p-1" />
        <BsLinkedin className="mx-1 bg-gray-200 w-8 h-8 rounded-full p-1" />
      </div>
    </div>
  );
};

export default TheNavbarsub;
