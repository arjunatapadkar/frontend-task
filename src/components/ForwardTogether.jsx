import React from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";
import rectangle1 from "../assets/rectangle1.svg";
import hollow from "../assets/hollow.png";


const horizontal = [
	{
		id: 1,
		title: "Analytics & business intelligence",
		svg: icon1,
	},

	{
		id: 2,
		title: "Payments & sales",
		svg: icon3,
	},

	{
		id: 3,
		title: "Cybersecurity",
		svg: icon5,
	},
];
const vertical = [
	{
		id: 2,
		title: "Financial services & fintech",
		svg: icon2,
	},

	{
		id: 3,
		title: "Healthcare",
		svg: icon4,
	},

	{
		id: 3,
		title: "EDUCATION",
		svg: icon6,
	},
];

const ForwardTogether = () => {
	return (
		<>
			<div className="relative bg-transparent w-screen mx-2  gap-20 md:gap-0 flex flex-col md:flex-row md:items-start md:justify-around my-10">
				<div>
					<div className="bg-transparent max-w-[350px]  space-y-6 md:max-w-[460px]">
						<h2 className=" bg-transparent text-6xl md:text-[60px]">
							Forward{" "}
							<span className="bg-transparent bg-gradient-to-br from-[#01F3FD] to-[#FF6DC1] text-transparent bg-clip-text">
								together
							</span>
						</h2>
						<p className="bg-transparent text-[#E7E9F7] text-[14px] md:text-[24px]">
							We've listed a few industries that we like. If you're not sure if
							your business fits the bill, we'd love to talk anyway.
						</p>
					</div>
				</div>
				<div className="flex md:max-w-[620px] bg-transparent gap-4">
					<div className="bg-transparent flex flex-col gap-4">
						<p className="bg-transparent flex-1/2 pl-2 text-sm md:text-[14px] border-l border-[#00E5FF] md:max-w-[295px] font-medium">
							Horizontal software solutions across industries
						</p>
						<div>
							<ul className="bg-transparent space-y-4">
								{horizontal.map((data) => (
									<li className=" md:max-w-[295px] md:h-[226px] bg-slate-950 p-2 md:p-[30px] flex flex-col justify-between md:gap-8 h-[130px] border-t border-[#4BD2E4]">
										<img
											src={data.svg}
											className="bg-transparent bg-slate-900 rounded-full p-[16px] w-[77px]"
										/>
										<p className=" bg-transparent bg-slate-950 w-[180px] uppercase text-xs md:text-[14px] tracking-wider ">
											{data.title}
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="bg-transparent flex flex-col gap-4">
						<p className="bg-transparent flex-1/2 pl-2 text-[14px] border-l border-[#FF83B7] max-w-[295px] font-medium">
							Vertical software solutions focused in a specific niche
						</p>
						<div>
							<ul className="bg-transparent space-y-4">
								{vertical.map((data) => (
									<li className=" md:max-w-[295px] bg-slate-950 p-2 md:p-[30px] flex flex-col justify-between md:gap-8 border-t border-[#FF83B7] h-[130px] md:h-[226px]">
										<img
											src={data.svg}
											className="bg-transparent bg-slate-900 rounded-full p-[16px] w-[77px]"
										/>
										<p className="bg-transparent bg-slate-950 w-[180px] uppercase text-xs md:text-[14px] tracking-wider ">
											{data.title}
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<img src={rectangle1} className="left-[-57px] bg-transparent bottom-[-300px] md:bottom-[-150px] md:w-[900px] md:h-[1200px]  absolute -z-2" />
				<img src={hollow} className=" bg-transparent hidden md:block md:w-[630px] md:h-[600px] left-[-157px] -bottom-64 md:-bottom-10  absolute -z-2" />
				
			</div>
		</>
	);
};

export default ForwardTogether;
