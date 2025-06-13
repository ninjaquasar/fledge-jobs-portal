import "react-tooltip/dist/react-tooltip.css";

const CategoryCard = ({ category }) => {
	return (
		<div
			key={category.name}
			className="p-8 bg-slate-200 border border-slate-300 rounded-2xl flex flex-col items-center gap-y-5 hover:bg-primary/15 transition-colors hover:border-primary/25"
		>
			{/* Category icon box */}
			<div className="text-4xl font-semibold text-light bg-primary p-4 aspect-square rounded-xl flex justify-center cursor-default">
				<a>{category.name[0]}</a>
			</div>
			{/* Category content */}
			<div className="text-center space-y-3">
				<h4 className="text-2xl font-bold">{category.name}</h4>
				<p className="text-slate-600 font-medium">{category.description}</p>
			</div>
		</div>
	);
};

export default CategoryCard;
