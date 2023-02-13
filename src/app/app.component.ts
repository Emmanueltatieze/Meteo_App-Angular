import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherServices: WeatherService) {}

  cityName: string = 'Limoges';
  weatherData?: WeatherData;
  ngOnInit(): void {
    this.GetWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.GetWeatherData(this.cityName);
    this.cityName = '';
  }

  private GetWeatherData(name: string) {
    this.weatherServices.getWeatherData(name).subscribe({
      next: (Response) => {
        this.weatherData = Response;
        console.log(Response);
      },
    });
  }
}
