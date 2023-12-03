import aboutImg from "../../../assets/images/about_us/person.jpg";
import partsImg from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="flex h-[450px] my-8">
      <div className="w-1/2">
        <img
          src={aboutImg}
          className=" w-[473px] h-[360px] rounded-lg shadow-2xl"
        />
        <img
          className="h-[227px] w-[332px] relative -top-[160px] -right-44"
          src={partsImg}
          alt=""
        />
      </div>

      <div className=" w-1/2 my-auto space-y-1">
        <h3 className="text-orange-500 font-semibold">About us</h3>
        <h1 className="text-5xl font-bold">
          We are qualified <br></br> & of experience <br /> in this field
        </h1>
        <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable.
        </p>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        <button className="btn btn-warning">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
