import { Container } from "react-bootstrap";
import Section from "./Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const companiesImages = [
  {
    desktopImage: "solana/images/home/companies-1.png",
    mobileImage: "solana/images/home/companies-1.png",
    alternateText: "companies",
  },
  {
    desktopImage: "solana/images/home/companies-2.png",
    mobileImage: "solana/images/home/companies-2.png",
    alternateText: "companies",
  },
  {
    desktopImage: "solana/images/home/companies-3.png",
    mobileImage: "solana/images/home/companies-3.png",
    alternateText: "companies",
  },
  {
    desktopImage: "solana/images/home/companies-4.png",
    mobileImage: "solana/images/home/companies-4.png",
    alternateText: "companies",
  },
  {
    desktopImage: "solana/images/home/companies-5.png",
    mobileImage: "solana/images/home/companies-5.png",
    alternateText: "companies",
  },
  {
    desktopImage: "solana/images/home/companies-6.png",
    mobileImage: "solana/images/home/companies-6.png",
    alternateText: "companies",
  },
  {
    desktopImage: "solana/images/home/companies-7.png",
    mobileImage: "solana/images/home/companies-7.png",
    alternateText: "companies",
  },
  {
    desktopImage: "solana/images/home/companies-7.png",
    mobileImage: "solana/images/home/companies-7.png",
    alternateText: "companies",
  },
];

export default function ClientsSection() {
  return (
    <Section className="typ-clients">
      <Container>
        <h2 className="bs-heading typ-15 typ-blue typ-400 text-uppercase text-center mb-50" data-aos="fade-up">
          Powering tools and integrations from companies all around the world
        </h2>
        <div className="bs-swiper typ-clients">
          <Swiper
            spaceBetween={20}
            slidesPerView={7}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1279: { slidesPerView: 5, spaceBetween: 10 },
            }}
          >
            {companiesImages.map((companies, index) => (
              <SwiperSlide key={index}>
                <div className="companies-img-box text-center" data-aos="fade-up">
                  <img
                    src={companies.desktopImage}
                    className="img-fluid"
                    alt={companies.alternateText}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
}
