import { useEffect, useState } from "react";
import apiClient from "../services/api_client";
import JobCard from "../components/JobCard";

const Jobs = () => {
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		apiClient.get("/jobs/").then((res) => setJobs(res.data.data));
	}, []);
	return (
		<main className="pt-8">
			<h2 className="text-4xl font-bold text-center mb-12">Open Job Opportunities</h2>
			{/* Jobs List */}
			<div className="flex flex-col gap-y-4 px-60">
				{jobs.map((job) => (
					<JobCard
						key={`${job.category_name} - ${job.title} - ${job.location}`}
						data={job}
					/>
				))}
			</div>
		</main>
	);
};

export default Jobs;
