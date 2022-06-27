import style from "../styles/testimonials.module.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  // image array

  const callouts = [
    {
      avatar: "./assets/avatar1.jpg",
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid corporis tempora nemo delectus commodi repudiandae ipsam beatae, obcaecati dolorum modi. Itaque unde nihil voluptatem magni deleniti accusantium labore velit.",
    },
    {
      avatar: "./assets/avatar2.jpg",
      name: "Shatta Wale",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid corporis tempora nemo delectus commodi repudiandae ipsam beatae, obcaecati dolorum modi. Itaque unde nihil voluptatem magni deleniti accusantium labore velit.",
    },
    {
      avatar: "./assets/avatar3.jpg",
      name: "Kwanw Despite",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid corporis tempora nemo delectus commodi repudiandae ipsam beatae, obcaecati dolorum modi. Itaque unde nihil voluptatem magni deleniti accusantium labore velit.",
    },
    {
      avatar: "./assets/avatar4.jpg",
      name: "Mana Ama McBrown",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid corporis tempora nemo delectus commodi repudiandae ipsam beatae, obcaecati dolorum modi. Itaque unde nihil voluptatem magni deleniti accusantium labore velit.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className={style.testimonials__container}
        // Installation of Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {callouts.map((callout, index) => (
          <SwiperSlide key={index} className={style.testimonial}>
            <div className={style.client__avatar}>
              <img src={callout.avatar} />
            </div>
            <h5 className={style.client__name}>{callout.name}</h5>
            <small className={style.client__review}>{callout.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
