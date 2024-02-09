import React from 'react';

const SocialHeader = () => {
  return (
    <section className="mt-6 flex h-full items-center  justify-center">
      <div className="flex h-[100px] w-full items-center justify-center bg-[#3B5999] py-14 text-center uppercase text-white medium:text-2xl">
        <p>compartilhar no facebook</p>
      </div>
      <div className="flex h-[100px] w-full items-center justify-center bg-[#EE3A5D] py-14 text-center uppercase text-white medium:text-2xl">
        <p>compartilhar no instagram</p>
      </div>
      <div className="flex h-[100px] w-full items-center justify-center bg-[#00A0D0] py-14 text-center uppercase text-white medium:text-2xl">
        <p> compartilhar no linkedin</p>
      </div>
    </section>
  );
};

export default SocialHeader;
