type WeatherRecommendationProps = {
	message: string;
};

export default function WeatherRecommendation({
	message,
}: WeatherRecommendationProps) {
	return (
		<section>
			<h2>Weather Recommendation</h2>

			<p>{message}</p>
		</section>
	);
}
