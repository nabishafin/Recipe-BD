import React from 'react';


const Banner = () => {
    return (
        <div className=''>
            <div
                className="hero h-[600px] "
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/0yRzbmP/banner-update.jpg)",
                }}>
                <div className=" "></div>
                <div className=" text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-center ">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn  backdrop-blur-sm border-[#0BE58A] bg-white/30 font-bold ">Explore Now</button>
                        <button className="btn  backdrop-blur-sm bg-white/30 ml-1 border-[#0BE58A]   font-bold">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;