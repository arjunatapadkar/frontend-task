import React from "react";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import arrow from "../assets/arrow.svg";
import tint4 from '../assets/tint4.svg'
const GetInTouch = () => {
	return (
		<>
			<div className="relative mt-24 flex justify-between z-10 mb-16 mx-10">
				<div className="p-6 space-y-8">
					<div className="space-y-1 ">
						<h2 className="bg-gradient-to-br from-[#01F3FD] to-[#FF6DC1] text-transparent bg-clip-text text-[60px]">
							Get in touch
						</h2>
						<p className="text-[24px] text-[#E7E9F7] font-light">
							Thinking of selling, or you know
							<br /> someone whom we should meet?
						</p>
						<div className="flex gap-4 items-center">
							<div className="w-[45px] h-[45px] bg-slate-900 flex   rounded-full items-center justify-center">
								<img src={linkedin} className="w-[18px] h-[18px]" />
							</div>
							<div className="w-[45px] h-[45px] bg-slate-900 flex   rounded-full items-center justify-center">
								<img src={mail} className="w-[18px] h-[18px]" />
							</div>

							<p>contact@avaleriancapital.com</p>
						</div>
					</div>
					<div className="">
						<h2 className="text-[24px] font-medium">
							Stay always{" "}
							<span className="bg-gradient-to-br from-[#01F3FD] to-[#FF6DC1] text-transparent bg-clip-text">
								updated
							</span>
						</h2>
						<h3 className="text-[16px] text-[#E7E9F7]">
							Sign up for our monthly newsletter
						</h3>
						<div className="bg-white p-2 px-4 flex justify-between items-center mt-4 ">
							<input type="email" placeholder="user@email.com" className="bg-white outline-none text-black" />
							<img src={arrow} alt="" className="bg-white cursor-pointer" />
						</div>
					</div>
				</div>
				<form className="p-6 flex flex-col gap-3 ">
					<div className="flex justify-between w-[503px] gap-6">
						<input className="outline-none h-[53px] w-full bg-slate-950 px-3 py-2 text-[14px]" type="text" placeholder="First Name" />
						<input className="outline-none h-[53px] w-full bg-slate-950 px-3 py-2 text-[14px]" type="text" placeholder="Last Name" />
					</div>
					<input className="outline-none h-[53px] bg-slate-950 px-3 py-2 text-[14px]" type="email" placeholder="Email" />
					<input className="outline-none h-[53px] bg-slate-950 px-3 py-2 text-[14px]" type="url" placeholder="Your company's website" />
					<input className="outline-none h-[53px] bg-slate-950 px-3 py-2 text-[14px]"
						type="text"
						placeholder="Describe your company in 1 sentence"
					/>

					<select className="outline-none h-[53px] bg-slate-950 px-3 py-2 text-[14px]">
						<option value="">ARR Range</option>
						<option value="">1</option>
						<option value="">2</option>
						<option value="">3</option>
					</select>

					<button value='send' type="submit" class="mt-4 bg-gradient-to-br from-[#01F3FD] to-[#FF6DC1] text-white font-sm  p-[1px]">
						<span class="flex w-full bg-black text-slate-500  px-12 py-3">
							Get started
						</span>
					</button>
				</form>
				<img src={tint4} className="absolute left-[-57px] bottom-[-100px]" />
			</div>
		</>
	);
};

export default GetInTouch;
