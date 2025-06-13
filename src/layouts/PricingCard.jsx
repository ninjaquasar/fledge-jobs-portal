import { DollarSignIcon, FeatherIcon } from "lucide-react";
import Button from "../components/Button";

const PricingCard = ({ data: plan }) => {
	const { title, price, features, buyButton } = plan;
	return (
		<div className="w-xs p-6 bg-gradient-to-br from-slate-100 to-slate-300 border border-primary/40 rounded-3xl">
			<h4 className="text-2xl font-semibold mb-4">{title}</h4>
			<h2 className="text-4xl font-bold text-slate-700 flex items-center mb-8">
				<DollarSignIcon
					size={32}
					className="stroke-slate-900"
				/>{" "}
				{price}
			</h2>
			<ul className="space-y-2 text-lg mb-10">
				{features.map((feature) => (
					<li
						key={feature}
						className="flex items-center gap-x-2"
					>
						<FeatherIcon size={20} />
						{feature}
					</li>
				))}
			</ul>
			{buyButton ? (
				<Button
					pady="py-3"
					fontSize="text-lg"
					rounded="rounded-lg"
					customClasses="w-full uppercase"
				>
					Buy Now
				</Button>
			) : (
				<Button
					pady="py-3"
					fontSize="text-lg"
					rounded="rounded-lg"
					customClasses="w-full uppercase !bg-blue-500 hover:!from-blue-500 hover:!to-blue-600"
				>
					Already Using
				</Button>
			)}
		</div>
	);
};

export default PricingCard;
