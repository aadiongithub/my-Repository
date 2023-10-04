const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '094e7fc57bmsh8324d09960063d6p1fca8ejsnc0c315751b2c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function fetchdata(){
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
	temp = response.temp
	feels_like = response.feels_like
	humidity = response.humidity
	min_temp = response.min_temp
	max_temp = response.max_temp
	wind_degrees = response.wind_degrees
	wind_speed = response.wind_speed
} catch (error) {
	console.error(error);
}
}
fetchdata();
