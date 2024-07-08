import React from "react";

const Hero = () => {
	return (
		<>
			<div className="z-10 bg-transparent w-full mt-40 flex flex-col items-center gap-14 my-24">
				<div className="items-center w-full flex bg-transparent flex-col gap-8">
					<p className="text-[40px] md:text-[70px] bg-transparent w-[400px] md:w-[700px] text-center leading-none">
						We buy exceptional software companies
					</p>
					<p className=" text-sm md:text-xl text-[#E7E9F7] bg-transparent">
						We enable founders to secure their legacy and move on to their{" "}
						<br /> next adventure while participating in the next horizon of
						growth.
					</p>
				</div>
				<div className="flex flex-col items-center bg-transparent  gap-4">
					<p className="text-sm text-slate-700 bg-transparent">
						Are you a <span className="text-slate-400">mission-critical</span> B2B
						software founder?
					</p>
					<button class="bg-gradient-to-br from-[#01F3FD] to-[#FF6DC1] text-white font-sm  p-[1px]">
						<span class="flex w-full bg-black text-slate-500  px-5 py-3">
							Get in touch
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Hero;
