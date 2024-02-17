import ChildCarousel from "./ChildCarousel";

const Recommends = ({ compName,page }) => {

  return (
    <div className="m-6">
      <h6 className="ml-5 tracking-wider font-semibold">{compName}</h6>
      <ChildCarousel page={page} />
    </div>
  );
};

export default Recommends;
