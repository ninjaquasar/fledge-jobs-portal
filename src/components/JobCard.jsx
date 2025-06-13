import { BuildingIcon, HandCoinsIcon, MapPinIcon, TagIcon } from "lucide-react";
import Button from "./Button";

const JobCard = ({ data: job }) => {
	const {
		title,
		description,
		company_name,
		category_name,
		location_type,
		pricing_type,
		location,
		date_posted,
		requirements,
	} = job;
	const backgroundColors = [
		"bg-blue-600",
		"bg-green-600",
		"bg-rose-600",
		"bg-yellow-600",
		"bg-purple-600",
		"bg-orange-600",
		"bg-cyan-600",
		"bg-slate-900",
	];
	const companyBackgroundColor = backgroundColors[Math.floor(Math.random() * 8)];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const date_posted_month = months[Number(date_posted.slice(5, 7) - 1)];
	const requirements_list = requirements.split(", ").slice(0, 4);
	return (
		<div className="p-6 bg-slate-200 border border-slate-300 rounded-2xl hover:bg-slate-300/75 transition-colors duration-100 flex items-center justify-between">
			<div className="space-y-3">
				<div className="flex gap-x-4">
					<div
						className={`text-light ${companyBackgroundColor} size-16 rounded-lg grid place-items-center cursor-default`}
						title={company_name}
					>
						<h2 className="text-4xl font-medium leading-none">{company_name[0]}</h2>
					</div>
					<div>
						<p className="text-sm font-medium text-neutral-600 mb-1">
							Posted on {date_posted.slice(8, 10)} {date_posted_month}{" "}
							{date_posted.slice(0, 4)}
						</p>
						<h5 className="text-xl font-semibold mb-2">{title}</h5>
						<div className="flex items-center gap-x-4 text-sm font-medium text-slate-700">
							<p
								className="flex items-center gap-x-1"
								title="Category"
							>
								<TagIcon
									size={16}
									className="stroke-blue-900"
								/>
								{category_name}
							</p>
							<p
								className="flex items-center gap-x-1"
								title="Job Type"
							>
								<MapPinIcon
									size={16}
									className="stroke-blue-900"
								/>
								{location_type}
							</p>
							<p
								className="flex items-center gap-x-1"
								title="Location"
							>
								<BuildingIcon
									size={16}
									className="stroke-blue-900"
								/>
								{location}
							</p>
							<p
								className="flex items-center gap-x-1"
								title="Pricing Type"
							>
								<HandCoinsIcon
									size={16}
									className="stroke-blue-900"
								/>
								{pricing_type}
							</p>
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<p className="max-w-3xl line-clamp-1">
						<span className="font-semibold">
							Description <span className="text-sm font-medium">(shorted)</span>:
						</span>{" "}
						{description}
					</p>
					<div className="flex items-center gap-x-2 text-sm">
						<span className="font-semibold text-[1rem]">
							Requirements{" "}
							<span className="text-sm font-medium">(shorted to 4)</span>:
						</span>
						{requirements_list.map((requirement) => (
							<span className="px-3 py-0.5 bg-slate-300 rounded-full">
								{requirement}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-y-3">
				<Button
					padx="px-4"
					pady="py-2"
					fontSize="text-lg"
					rounded="rounded-lg"
				>
					View Details
				</Button>
				<Button
					padx="px-4"
					pady="py-2"
					fontSize="text-lg"
					rounded="rounded-lg"
				>
					Apply Now
				</Button>
			</div>
		</div>
	);
};

export default JobCard;
