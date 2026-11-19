type WeatherRecommendationProps = {
	message: string;
};

export default function WeatherRecommendation({
	message,
}: WeatherRecommendationProps) {
	return <p className="weatherRecommendation">{message}</p>;
}
