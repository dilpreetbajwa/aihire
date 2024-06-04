import homethumb1 from "@/../public/img/bn/home3-alithumb1.jpg";
import homethumb2 from "@/../public/img/bn/home3-alithumb2.jpg";
import lineDash from "@/../public/img/bn/line-dash.png";
import lineDash3 from "@/../public/img/bn/line-dash3.png";
import taskIcon from "@/../public/img/bn/task-icon.png";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";

const Banner = () => {
  return (
    <section className="banner__section  bg__img3 ralt overhid ">
      {/* <!-- Header Here --> */}
        <Header />
      {/* <!-- Header End --> */}

      <div className="container">
        <div className="banner__content__wrapper pt-50 pb-50">
          <div className="row justify-content-center align-items-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div className="banner__content banner__threespace text-center ralt">
                <h4 className="base2 mb-16  ">Empower Your AI Journey</h4>
                <span className="d1 text-white mb-24 fw-600  ">
                  Discover AI Freelance Collaboration
                </span>
                <h4 className="base2 mb-16 wow fadeInDown">
                     Are you an AI professional looking for exciting freelance opportunities? You have come to the right place.
                     <br/>
                     Click on the links above to continue your AI journey with us.
                  </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Element--> */}
      <Image src={homethumb1} alt="img" className="home3__elementleft" />
      <Image src={homethumb2} alt="img" className="home3__elementright" />
      <Image src={lineDash} alt="img" className="home3__linedash" />
      <Image src={lineDash3} alt="img" className="home3__linedash2" />
      <Image src={taskIcon} alt="img" className="home3__shapetast" />
      {/* <!--Element--> */}
    </section>
  );
};

export default Banner;
