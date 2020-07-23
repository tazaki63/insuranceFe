import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  WeatherData:any;
  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    let data=JSON.parse('{"coord":{"lon":-122.09,"lat":37.39},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":280.44,"pressure":1017,"humidity":61,"temp_min":279.15,"temp_max":281.15},"visibility":12874,"wind":{"speed":8.2,"deg":340,"gust":11.3},"clouds":{"all":1},"dt":1519061700,"sys":{"type":1,"id":392,"message":0.0027,"country":"US","sunrise":1519051894,"sunset":1519091585},"id":0,"name":"Mountain View","cod":200}');
    this.setWeatherData(data);
  }

  setWeatherData(data){
    this.WeatherData=data;
    this.WeatherData.temp_celcius=(this.WeatherData.main.temp-273.15).toFixed(0);
    this.WeatherData.temp_feels_like=(this.WeatherData.main.feels_like-273.15).toFixed(0);
  }

}
