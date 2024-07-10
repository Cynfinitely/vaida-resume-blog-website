import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="bg-primaryColor w-full  flex flex-col  text-secondaryColor p-16  font-semibold">
        <h1 className="text-center text-4xl">MISSION</h1>
        <div className="">
          <p className="mt-2 text-2xl">
            To even out the playing field in labour market.{" "}
          </p>
          <p className="mt-2 text-2xl">
            For employers it can be the struggle to compete for talented
            employees with bigger companies without a significant marketing and
            recruitment budget.
          </p>
          <p className="mt-2 text-2xl">
            For job seekers it’s about being able to make informed decisions in
            their job search to accelerate results.
          </p>
        </div>
      </section>
      <section className="flex bg-thirdColor text-secondaryColor w-full  items-center justify-center p-16 gap-16">
        <div className="w-full">
          <img
            src="profilePicture.png"
            alt="Vaida Kavaliukaitė-Kaijanmäki"
            className="rounded-full object-cover h-48 w-48"
          />
          <figcaption className="text-center">
            Vaida Kavaliukaitė-Kaijanmäki
          </figcaption>
        </div>

        <div>
          <h2 className="text-xl font-bold">ABOUT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac
            turpis egestas sed tempus urna et pharetra. Purus ut faucibus
            pulvinar elementum integer enim neque. Nec feugiat nisl pretium
            fusce id. Euismod quis viverra nibh cras pulvinar mattis nunc sed.
            Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
            Dictum varius duis at consectetur lorem donec. Dictum non
            consectetur a erat. Tincidunt augue interdum velit euismod in
            pellentesque massa placerat. Hac habitasse platea dictumst
            vestibulum rhoncus est pellentesque. Sociis natoque penatibus et
            magnis dis. Neque aliquam vestibulum morbi blandit cursus risus at.
            Elit duis tristique sollicitudin nibh sit amet commodo nulla.
            Lobortis elementum nibh tellus molestie nunc non blandit massa enim.
            Mattis vulputate enim nulla aliquet. Sed tempus urna et pharetra
            pharetra massa.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
