"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/slider.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Slider() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=7588431ws84if4kh&locale=kr"
    );

    const json = await res.json();
    const items = json.items.filter(
      (it) => it.contentscd.label === "축제/행사"
    );
    setData(items.slice(5, 9));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className={styles.slide_wrapper}>
      <Swiper
        className={styles.swiper}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.length !== 0 &&
          data.map((it) => (
            <SwiperSlide key={it.contentsid}>
              <div className={styles.img_wrapper}>
                <img src={it.repPhoto.photoid.imgpath} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
