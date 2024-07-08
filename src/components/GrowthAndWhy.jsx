import React from "react";
import check from "../assets/check1.svg";
import close from "../assets/close.svg";
import tint from "../assets/tint.svg"
import sphere from "../assets/sphere.png";

const buttons = [
	{
		id: 1,
		title: "Name",
	},
	{
		id: 1,
		title: "Company name",
	},
	{
		id: 1,
		title: "Email",
	},
	{
		id: 1,
		title: "Get in touch",
	},
];

const table = [
	{
		title: "Ability to hand over day-to-day management",
		pt1: "We take over management",
		pt2: "Often required to remain post-acquisition",
		pt3: "Continue running the company",
	},
	{
		title: "Founder payout",
		pt1: "Bespoke terms with full or partial cash exit",
		pt2: "Locked into long-term incentive structure",
		pt3: "No exit until sale or IPO",
	},
	{
		title: "Process",
		pt1: "Fast and simple process that can work with your timeline",
		pt2: "Process can last for months",
		pt3: "Months-long complicated process, requiring multiple investors to buy in",
	},
	{
		title: "Time horizon",
		pt1: "Plan to operate for long-term",
		pt2: "Goal to sell in 3-5 years",
		pt3: "Focus only until next round",
	},
	{
		title: "Approach to growth",
		pt1: "Long-term sustainable growth orientation",
		pt2: "Focus on short-term value creation, which often leads to cost-cutting and layoffs",
		pt3: "Unsustainable growth fueled by VC capital that pushes company to its limits",
	},
];
const GrowthAndWhy = () => {
	return (
		<>
			<div className="bg-transparent  relative w-full mx-1 md:px-20 my-12 mb-24 z-10">
				<div className="bg-transparent  md:mx-auto md:max-w-[860px] ">
					<div className="bg-transparent space-y-8">
						<div className="bg-transparent text-center space-y-6">
							<h1 className="bg-transparent md:w-[891px] font-light text-2xl md:text-5xl text-center">
								<span className="bg-transparent bg-gradient-to-b from-[#01F3FD] to-[#FF6DC1] text-transparent bg-clip-text">
									Growth
								</span>{" "}
								and independence for you
							</h1>
							<p>Interested in getting a valuation?</p>
						</div>
						<div className="bg-transparent flex text-sm  justify-around md:justify-between h-[53px]">
							<p className=" bg-slate-950 flex items-center md:w-[190px] p-2 md:pl-5 ">
								Name
							</p>
							<p className=" bg-slate-950 flex items-center md:w-[190px] p-2 md:pl-5 ">
								Company Name
							</p>
							<p className=" bg-slate-950 flex items-center md:w-[190px] p-2 md:pl-5 ">
								Email
							</p>
							<button class="bg-transparent bg-gradient-to-br from-[#01F3FD] to-[#FF6DC1] text-white font-sm  p-[1px]">
								<span class="flex w-full bg-black text-slate-500  md:px-5 py-3">
									Get in touch
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="bg-transparent mt-24">
					<div className="max-w-[660px] space-y-3 mb-8">
						<h2 className="font-light text-[60px]">Why sell to us?</h2>
						<p className="text-[24px] text-[#E7E9F7]">
							Avalerian bring experience, growth and independence for you.
						</p>
					</div>
					<div className="md:max-w-[1240px] md:mx-auto">
						<div className="h-[40px] flex md:gap-0  justify-around md:justify-between mb-4">
							<h2 className="md:w-[274px]"></h2>
							<h2 className="text-sm md:text-[24px] md:w-[274px]">
								<span className="bg-gradient-to-r from-[#01F3FD] to-[#FF6DC1] text-transparent bg-clip-text">
									Avalerian
								</span>{" "}
							</h2>
							<h2 className="text-sm md:text-[24px] md:w-[274px]">Private equity</h2>
							<h2 className="text-sm md:text-[24px] md:w-[274px]">Venture Capital</h2>
						</div>
						<div>
							<ul className="flex flex-col gap-4 ">
								{table.map((row, index) => (
									<li
										key={index}
										className={`h-full flex md:flex-row items-start md:gap-10 ${
											index == 4 ? "" : "border-b"
										}  border-0 border-slate-800 pb-2`}
									>
										<h3 className="text-xs md:text-[16px] max-w-[150px] md:max-w-[267px] md:min-w-[267px]">
											{row.title}
										</h3>
										<div className="text-xs md:text-[16px] max-w-[150px] md:max-w-[267px] gap-2 md:min-w-[267px] flex items-start ">
											<img src={check} className="md:w-[24px] md:h-[24px]" />
											<p className="text-[#6A6E87] font-medium">{row.pt1}</p>
										</div>
										<div className=" text-xs md:text-[16px] max-w-[150px]  md:max-w-[267px] gap-2  md:min-w-[267px] items-start  flex">
											<img src={close} className="md:w-[24px] md:h-[24px]"/>
											<p className="text-[#6A6E87] font-medium">{row.pt2}</p>
										</div>
										<div className="text-xs md:text-[16px] max-w-[150px]  md:max-w-[267px] gap-2  md:min-w-[267px] items-start  flex">
											<img src={close} className="md:w-[24px] md:h-[24px]"/>
											<p className="text-[#6A6E87] font-medium">{row.pt3}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				
				<img src={tint} className="absolute bg-transparent h-[1500px] right-[-57px] top-[-500px]" />
				<img src={sphere} className="absolute hidden md:block bg-transparent overflow-hidden h-[700px] right-[-300px] -top-10" />

			</div>
		</>
	);
};

export default GrowthAndWhy;
