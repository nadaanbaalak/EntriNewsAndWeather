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
    language: "en",
    query: "",
    country: "in",
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

  fetchWeatherInfo = async (lat, long) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d796f57c21e58e2e5d42b4b3684f7fcd`
      );
      this.setState({ weather: response });
    } catch (err) {
      console.log(err);
    }
  };

  handleRefresh = () => {
    this.getCurrentWeather();
  };

  handleQueryChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleLanguageChange = (e) => {
    this.setState({ language: e });
  };

  handleCountryChange = (e) => {
    this.setState({ country: e });
  };

  fetchNewsArticles = async () => {
    const { query, language, country } = this.state;
    try {
      const response = await axios.get(
        `https://gnews.io/api/v3/search?q=${query}&lang=${language}&country=${country}&token=07febe05279fd33dcccd2d611dd27a64`
      );
      const { data } = { ...response };
      const { articles } = { ...data };
      console.log(articles, response);
      this.setState({ newsArticles: articles });
    } catch (err) {
      console.log(err);
    }
  };

  handleSearch = () => {
    this.fetchNewsArticles();
    console.log("Search Handler");
  };

  render() {
    const { Content, Sider } = Layout;
    return (
      <Layout className="contentSize" style={{ height: "96vh" }}>
        <Sider breakpoint="lg" collapsedWidth="0" width="300px">
          <Filters
            onQueryChange={this.handleQueryChange}
            onLanguageChange={this.handleLanguageChange}
            onSearch={this.handleSearch}
            onCountryChange={this.handleCountryChange}
          />
        </Sider>
        <Content className="mainContent">
          <Weather
            onRefresh={this.handleRefresh}
            weatherData={this.state.weather}
            isGeolocationPresent={this.state.geolocation}
          />
          <NewsFeed newsArticles={this.state.newsArticles} />
        </Content>
      </Layout>
    );
  }
}

export default PageLayout;
//{ message: "Geolocation is not supported by this browser." }
//https://gnews.io/api/v3/search?q=example&token=07febe05279fd33dcccd2d611dd27a64
//
