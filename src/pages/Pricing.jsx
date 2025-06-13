import PricingCard from "../layouts/PricingCard";

const Pricing = () => {
	const plans = [
		{
			title: "Starter",
			price: 0,
			features: ["Basic Job Listings", "Basic Recruitment Tools", "No Payment History"],
			buyButton: false,
		},
		{
			title: "Premium",
			price: 9,
			features: [
				"Featured Job Listings",
				"Advanced Recruitment Tools",
				"Track Payment History",
			],
			buyButton: true,
		},
	];
	return (
		<main className="pt-8">
			<h2 className="text-4xl font-bold text-center mb-12">
				<span className="text-primary">Upgrade</span> Plan
			</h2>
			{/* Pricing Packages */}
			<div className="flex justify-center gap-8 px-60">
				{plans.map((plan) => (
					<PricingCard
						key={plan.title}
						data={plan}
					/>
				))}
			</div>
		</main>
	);
};

export default Pricing;
