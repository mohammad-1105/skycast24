import { HashLink } from "react-router-hash-link";
import cloudImg from "../assets/cloud.png";
import towerImg from "../assets/tower.jpg";
import weatherImg from "../assets/weatherImg.jpg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Home = () => {
  return (
    <main className="">
      <div className="w-full md:min-h-screen bg-[#79addc] py-12 md:px-28 px-5 flex md:flex-row flex-col md:justify-between justify-start md:gap-0 gap-10 md:items-center md:py-2 ">
        <div className="w-full">
          <h1 className="text-7xl mb-10 font-syne font-bold">
            Today&apos;s Forecast Frenzy
          </h1>
          <div className="flex md:flex-row flex-col md:items-center gap-3">
            <HashLink to={'#aboutUs'} className="font-spaceGrotesk font-bold py-2 px-4 rounded-full block md:w-40 text-center cursor-pointer bg-[#adf7b6]">
              About Us
            </HashLink>
            <HashLink to={'#contactUs'} className="font-spaceGrotesk font-bold py-2 px-4 rounded-full block md:w-40 text-center cursor-pointer bg-[#ffee93]">
              Contact Us
            </HashLink>
          </div>
        </div>
        <div className=" w-full">
          <div className="rounded-3xl overflow-hidden ">
            <img className="object-cover w-full h-full" src={cloudImg} alt="" />
          </div>
        </div>
      </div>

      <div className="md:py-32 py-12 md:px-28 px-5 bg-black">
        <h1 className="text-[#ffee93] md:text-5xl text-3xl font-syne mb-4">
          What&apos;s The Weather ?
        </h1>
        <div className="text-[#adf7b6] flex md:flex-row flex-col gap-4 justify-between font-spaceGrotesk md:text-2xl text-xl">
          <p>
            Stop guessing and start knowing! Our weather website provides
            up-to-the-minute forecasts to help you stay one step ahead of Mother
            Nature.
          </p>
          <p>
            Rain or shine, we’ve got you covered with the latest weather news,
            so you can better plan your day and avoid any weather-related
            catastrophes.
          </p>
        </div>
      </div>

      <div className="md:py-32 py-12 md:px-28 px-5 bg-[#ffc09f]">
        <div className="flex md:flex-row flex-col items-center justify-center gap-10">
          <div>
            <h1 className="md:text-3xl text-2xl font-bold font-syne">
              Blazing Fast Weather Updates - Right at Your Fingertips
            </h1>
            <p className="font-spaceGrotesk md:text-xl text-lg">
              Our state-of-the-art technology delivers weather data with
              lightning-fast precision, just like a bolt from the blue!
            </p>
          </div>
          <div className="md:w-400px w-full h-[300px] rounded-3xl overflow-hidden">
            <img className="object-cover w-full h-full" src={towerImg} alt="" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 mt-20">
          <div className="md:w-400px w-full h-[300px] rounded-tl-[250px] rounded-tr-xl rounded-bl-xl rounded-br-xl overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={weatherImg}
              alt=""
            />
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-bold font-syne">
              Reliable Forecasts from Certified Meteorology Experts
            </h1>
            <p className="font-spaceGrotesk md:text-xl text-lg">
              Our weather gurus work tirelessly around the clock to provide you
              with top-notch forecasts that you can trust - rain or shine!
            </p>
          </div>
        </div>
      </div>

      <div className="md:py-32 py-12 md:px-28 px-5 bg-[#ffc09f]">
        <div className="max-w-[1000px] mx-auto">
          <h1 className=" md:text-5xl text-3xl font-syne font-bold mb-4">
            Winds of Wisdom
          </h1>
          <div className="flex md:justify-between gap-10 md:flex-nowrap flex-wrap justify-center items-start">
            <div className="w-full">
              <h2 className="font-syne font-bold md:text-xl text-lg mb-2">
                How accurate your weather forecast?
              </h2>
              <p className="font-spaceGrotesk ">
                Our forecasts are powered by high-quality data sources and
                advanced algorithms, ensuring that you receive the most accurate
                information possible.
              </p>
            </div>
            <div className="w-full">
              <h2 className="font-syne font-bold md:text-xl text-lg mb-2">
                Do you have a mobile app?
              </h2>
              <p className="font-spaceGrotesk ">
                N0! we don&apos;t have mobile app yet.But we are deciding to
                launch our mobile too for Android and IOS. Whenever we launch,
                you will recieve a message through your email
              </p>
            </div>
            <div className="w-full">
              <h2 className="font-syne font-bold md:text-xl text-lg mb-2">
                How can I remove ads?
              </h2>
              <p className="font-spaceGrotesk ">
                Congratulation! We don&apos;t have any ads in your website.You
                can use it free.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer  className="md:py-10 py-12 md:px-28 px-5 bg-[#ffc09f]">
    <div id="aboutUs" className="mb-10 pt-10 max-w-[1000px] mx-auto">
      <h1 className="text-3xl font-syne font-bold mb-3 md:text-start text-center">About Us</h1>
      <p className="font-spaceGrotesk text-xl md:text-start text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab in aperiam molestiae eveniet doloremque! Harum voluptate, necessitatibus velit magnam, rerum doloribus rem porro unde deserunt vitae inventore atque labore, nam temporibus aliquid cupiditate fugiat repellendus totam delectus distinctio? Cum voluptatibus esse quaerat doloremque animi soluta modi vel culpa facere.</p>
    </div>


        <div id="contactUs" className="pt-12 max-w-[1000px] mx-auto flex flex-col justify-center gap-3 md:items-start items-center">
          <h1 className="text-3xl font-syne font-bold text-center mb-7">Contact Us</h1>
          <div className="flex items-center justify-center gap-5 text-2xl">
            <a href="https://facebook.com/mohammad1105" target="blank">
              <FaFacebookSquare />
            </a>
            <a href="https://instagram.com/mohammad_amaan1105" target="blank">
              <FaInstagramSquare />
            </a>
            <a href="https://twitter.com/amaan_1105" target="blank">
              <FaTwitterSquare />
            </a>
            <a href="https://github.com/mohammad-1105" target="blank">
              <FaGithubSquare />
            </a>
          </div>
          <p className="font-spaceGrotesk ">&copy; 2023 SkyCast</p>
        </div>


      </footer>
    </main>
  );
};

export default Home;
