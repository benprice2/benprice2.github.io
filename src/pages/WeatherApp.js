import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather_App from '../components/WeatherApp/weather_app';

const WeatherApp = () => {
    return(
        <div className="WeatherApp">
            <Weather_App />
        </div>

    )
}
export default WeatherApp()