import React from "react";
import img1 from "../assets/sphere9.png";
import img2 from "../assets/sphere8.png";
import img3 from "../assets/sphere5.png";
import img4 from "../assets/sphere4.png";
import img5 from "../assets/sphere2.png";
import img6 from "../assets/sphere6.png";

const dataSet = [
	{
		id: 1,
		title: "Solving a critical pain-point",
		desc: "Product that addresses a mission-critical challenge",
		img: img1,
	},
	{
		id: 2,
		title: "Proven product-market fit",
		desc: "Annual recurring revenue of $4M+",
		img: img2,
	},
	{
		id: 3,
		title: "Fast-growing end market",
		desc: "Growing niche segments with favorable tailwinds",
		img: img4,
	},
	{
		id: 4,
		title: " Great tech",
		desc: "Strong underlying tech fundamentals and tech stack",
		img: img6,
	},
	{
		id: 5,
		title: "Track record",
		desc: "History of revenue for 4+ years",
		img: img5,
	},
	{
		id: 6,
		title: "Sticky customers",
		desc: "High retention, low cohort churn, sticky customer base",
		img: img3,
	},
];

const Characteristics = () => {
	return (
		<>
			<div className="bg-transparent w-full z-20 flex items-center flex-col gap-8 mx-auto">
				<h3 className="bg-transparent text-slate-300 text-[24px]">
					We are excited about companies with the following characteristics
				</h3>
				<div className="bg-transparent max-w-[800px]">
					<ul className="bg-transparent flex flex-wrap  justify-between">
						{dataSet.map((data) => (
							<li
								key={data.id}
								className="bg-transparent h-[300px] w-[215px] flex flex-col gap-3 items-center"
							>
								<img src={data.img} alt="" className="w-[146px] bg-transparent" />
								<h3 className="text-[14px] tracking-wide bg-transparent">{data.title}</h3>
								<p className="text-[#6A6E87] text-sm text-center bg-transparent max-w-[200px]">{data.desc}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Characteristics;
