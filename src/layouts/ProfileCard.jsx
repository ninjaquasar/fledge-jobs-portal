import Button from "../components/Button";
import useAuthContext from "../hooks/useAuthContext";
import Coin from "../assets/coin.png";

const ProfileCard = () => {
	const { user } = useAuthContext();
	return (
		<section className="max-w-2xl mx-auto p-8 bg-light rounded-4xl drop-shadow-[0_0_1.5rem_#bbb]">
			<div className="w-fit mx-auto flex items-center gap-x-6 mb-4">
				<img
					src="https://cdn-icons-png.flaticon.com/128/9187/9187604.png"
					alt="User Picture"
					className="size-20 rounded-full object-cover object-center"
				/>
				<h2 className="text-4xl font-bold tracking-wide">
					{user?.first_name} {user?.last_name[0]}.
				</h2>
			</div>
			<p className="text-slate-600 flex justify-end items-center gap-x-2 mb-8 text-sm">
				<img
					src={Coin}
					className="size-3"
				/>
				means 1000 FledgeCoins needed to edit
			</p>
			<div className="w-4/5 2xl:w-3/4 mx-auto space-y-4">
				<label className="flex flex-col gap-y-2">
					<span className="pl-2 text-slate-700 text-xl font-medium">First Name</span>
					<input
						type="text"
						defaultValue={user?.first_name}
						className="px-4 py-2 text-lg text-slate-700 border border-slate-300 focus:bg-slate-200 focus:outline-none focus:border-primary/40 rounded-full caret-primary"
						disabled
					/>
				</label>
				<label className="flex flex-col gap-y-2">
					<span className="pl-2 text-slate-700 text-xl font-medium">Last Name</span>
					<input
						type="text"
						defaultValue={user?.last_name}
						className="px-4 py-2 text-lg text-slate-700 border border-slate-300 focus:bg-slate-200 focus:outline-none focus:border-primary/40 rounded-full caret-primary"
						disabled
					/>
				</label>
				<label className="flex flex-col gap-y-2">
					<span className="flex items-center gap-x-3 pl-2 text-slate-700 text-xl font-medium">
						Title
						<img
							src={Coin}
							className="size-3"
						/>
					</span>
					<input
						type="text"
						defaultValue="User of FledgeJobs"
						className="px-4 py-2 text-lg text-slate-500 border border-slate-300 rounded-full"
						disabled
					/>
				</label>
				<label className="flex flex-col gap-y-2">
					<span className="flex items-center gap-x-3 pl-2 text-slate-700 text-xl font-medium">
						Biography
						<img
							src={Coin}
							className="size-3"
						/>
					</span>
					<textarea
						rows="7"
						defaultValue="An User of FledgeJobs"
						className="resize-none px-4 py-2 text-lg text-slate-500 border border-slate-300 rounded-2xl"
						disabled
					></textarea>
				</label>
				<label className="flex flex-col gap-y-2">
					<span className="pl-2 text-slate-700 text-xl font-medium">Email</span>
					<input
						type="email"
						defaultValue={user?.email}
						className="px-4 py-2 text-lg text-slate-700 border border-slate-300 focus:bg-slate-200 focus:outline-none focus:border-primary/40 rounded-full caret-primary"
						disabled
					/>
				</label>
				<label className="flex flex-col gap-y-2">
					<span className="pl-2 text-slate-700 text-xl font-medium">
						Phone Number
					</span>
					<input
						type="tel"
						defaultValue={user?.phone_number}
						className="px-4 py-2 text-lg text-slate-700 border border-slate-300 focus:bg-slate-200 focus:outline-none focus:border-primary/40 rounded-full caret-primary"
						disabled
					/>
				</label>
				<label className="flex flex-col gap-y-2">
					<span className="flex items-center gap-x-3 pl-2 text-slate-700 text-xl font-medium">
						Address
						<img
							src={Coin}
							className="size-3"
						/>
					</span>
					<input
						type="tel"
						defaultValue="Earth"
						className="px-4 py-2 text-lg text-slate-500 border border-slate-300 rounded-full"
						disabled
					/>
				</label>
			</div>
			<div className="text-center mt-10">
				<Button
					padx="px-6"
					pady="py-3"
					fontSize="text-2xl"
					rounded="rounded-xl"
				>
					Edit Profile
				</Button>
			</div>
		</section>
	);
};

export default ProfileCard;
