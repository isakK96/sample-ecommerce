import img from "../assets/8.png";
export default function About() {
  return (
    <>
      <div className="bg-aboutimg bg-no-repeat bg-cover bg-center">
        <div className="bg-cover bg-gray-900 bg-opacity-50">
          <h1 className="text-center text-gray-100 text-6xl py-20">About Us</h1>
        </div>
      </div>
      <div className="lg:w-2/3 mx-auto my-10">
        <h2 className="text-3xl mb-4 mx-2 pb-4 border-b border-black">
          All natural and cruelty free products
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <p className="leading-relaxed text-xl mx-2 self-center">
              For all its progress, the beauty industry still has a ways to go.
              <br />
              Animal testing and palm oil are still a thing and knowing what’s
              “clean” versus “natural” is still quite confusing. We don’t think
              finding good makeup that doesn’t harm humans or the planet should
              be so complicated, so that’s why we started Burenta; to make the
              most ethical makeup and skincare on the planet.
            </p>
            <p className="leading-relaxed text-xl mx-2 mt-4">
              It isn’t easy! But it is totally worth the sweat because our
              community is growing - thanks to many of you - and little by
              little we’re making a difference.
              <br />
              So thank you for choosing Burenta and thank you for choosing to
              wear no evil.
            </p>
          </div>
          <img
            src={img}
            alt="image"
            className="max-w-xs mx-auto mt-4 lg:mt-0"
          />
        </div>
      </div>
    </>
  );
}
