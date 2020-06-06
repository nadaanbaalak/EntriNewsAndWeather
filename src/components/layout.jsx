import React, { Component } from "react";
import { Layout } from "antd";
import axios from "axios";
import Filters from "./filters";
import NewsFeed from "./newsfeed";
import Weather from "./weather";
import "./styles/filters.css";
import "./styles/newsfeed.css";
import "./styles/weather.css";
import "./styles/layout.css";

class PageLayout extends Component {
  state = {
    language: null,
    query: null,
    newsArticles: [],
    geolocation: true,
    weather: null,
  };

  getCurrentWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        await this.fetchWeatherInfo(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    } else {
      this.setState({
        geolocation: false,
      });
    }
  }

  componentDidMount() {
    this.getCurrentWeather();
  }

  async fetchWeatherInfo(lat, long) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d796f57c21e58e2e5d42b4b3684f7fcd`
      );
      this.setState({ weather: response });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  handleRefresh = () => {
    this.getCurrentWeather();
  };

  handleLanguageChange = () => {};

  render() {
    const { Content, Sider } = Layout;
    return (
      <Layout className="contentSize" style={{ height: "96vh" }}>
        <Sider breakpoint="lg" collapsedWidth="0" width="300px">
          <Filters />
        </Sider>
        <Content className="mainContent">
          <Weather
            onRefresh={this.handleRefresh}
            weatherData={this.state.weather}
            isGeolocationPresent={this.state.geolocation}
          />
          <NewsFeed />
        </Content>
      </Layout>
    );
  }
}

export default PageLayout;
//{ message: "Geolocation is not supported by this browser." }
