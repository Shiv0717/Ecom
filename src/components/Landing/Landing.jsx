import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import './Swiper.css'
const Landing = () => {
 
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src='https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww'></img></SwiperSlide>
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123'></img></SwiperSlide>
        <SwiperSlide><img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'></img></SwiperSlide>
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0070/7032/articles/product20tools_1848x970_ca792aed-5337-4e87-9f24-61e53e831b30.png?v=1727453087'></img></SwiperSlide>
        <SwiperSlide><img src='https://cdn.prod.website-files.com/660e658d0cfb31720d8934d0/67094666a374ca6f227cccdf_66bb7af46488a63f4fca7eeb_2020_March_BlogBanners_ProductPhotography_v2.jpg.webp'></img></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Landing;
