import "./Style.css";

const EightSec = () => {
  return (
    <>
      <div className="custom-scroll ">
        <div className="lg:w-[85%] mx-auto flex justify-between">
          <ul id="cards">
            <li className="card" id="card_1">
              <div className="card__content">
                <div>
                  <h2 className="mt-[36px] text-[40px] md:text-[56px] lg:text-[65px] leading-[70px] font-[400] pt-10">
                    We believe in improving
                  </h2>

                  <p className="mt-10 text-xl leading-[40px] font-[Inter] md:text-[28px]">
                    We are committed to giving back to the community and donate
                    5% of our revenue to charities that make a difference in the
                    lives of others......
                  </p>
                </div>
              </div>
            </li>

            <li className="card  mt-[100px] mb-[300px]" id="card_2">
              <div className="card__content">
                <figure>
                  <img
                    src="https://cdn.create.vista.com/api/media/small/14226715/stock-photo-office-work"
                    alt="Image description"
                  />
                </figure>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EightSec;
