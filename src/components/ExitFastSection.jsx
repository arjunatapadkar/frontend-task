import React from "react";
import timeline from "../assets/timeline.svg";
import tint2 from "../assets/tint2.svg";
import tint3 from "../assets/tint3.svg";
import cube from "../assets/cube.png";

const ExitFastSection = () => {
	return (
		<>
			<div className="relative bgotransparent z-10 flex gap-36 mx-auto">
				<div className="w-[470px] h-[620px]">
					<img src={timeline} />
				</div>
				<div className="w-[400px] space-y-5">
					<h2 className="font-light text-[60px]">
						Exit{" "}
						<span className="bg-gradient-to-b from-[#01F3FD] to-[#FF6DC1] text-transparent bg-clip-text">
							fast.
						</span>
					</h2>
					<p className="text-[24px] text-[#E7E9F7]">
						Our process emphasizes fast,
						<br /> lucrative exits for software founders
					</p>
					<button class="bg-gradient-to-br from-[#01F3FD] to-[#FF6DC1] text-white font-sm  p-[1px]">
						<span class="flex w-full bg-black text-slate-500  px-12 py-3">
							Get started
						</span>
					</button>
				</div>

				<img src={tint2} className='bg-transparent left-[-300px] top-[-400px] absolute' />
				<img src={tint3} className='bg-transparent right-[-240px] absolute' />
				<img src={cube} className='bg-transparent h-[600px] w-[530px] bottom-[-100px] right-[-450px] absolute' />
			</div>
		</>
	);
};

export default ExitFastSection;
