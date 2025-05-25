import CountUp from "react-countup";

const Stats = () => {
	const statsData = [
		{
			statText: "Candidates got hired",
			end: 190,
		},
		{
			statText: "Open job opportunities",
			end: 50,
		},
		{
			statText: "Happy clients",
			end: 220,
		},
		{
			statText: "Candidates got hired",
			end: 10,
		},
	];
	return (
		<section className="my-24 md:px-20 lg:px-32 2xl:px-60 grid lg:grid-cols-4">
			{statsData.map((stat) => (
				<div className="flex flex-col items-center gap-y-2">
					<h2 className="text-4xl font-bold">
						<CountUp
							start={0}
							end={stat.end}
							duration={10}
							suffix="+"
							scrollSpyDelay={150}
							enableScrollSpy={true}
							scrollSpyOnce={true}
						/>
					</h2>
					<p className="text-lg text-slate-700 font-medium">{stat.statText}</p>
				</div>
			))}
		</section>
	);
};

export default Stats;
