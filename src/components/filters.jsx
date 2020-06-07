import React, { Component } from "react";
import { Divider, Button, Select, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

class Filters extends Component {
  state = {
    languages: [
      { id: 1, name: "Bengali", symbol: "bn" },
      { id: 2, name: "Bihari", symbol: "bh" },
      { id: 3, name: "Gujarati", symbol: "gu" },
      { id: 4, name: "Hindi", symbol: "hi" },
      { id: 5, name: "Kannada", symbol: "kn" },
      { id: 6, name: "Malayam", symbol: "ml" },
      { id: 7, name: "Marathi", symbol: "mr" },
      { id: 8, name: "Punjabi", symbol: "pa" },
      { id: 9, name: "Tamil", symbol: "ta" },
      { id: 10, name: "Telugu", symbol: "te" },
      { id: 11, name: "Urdu", symbol: "ur" },
      { id: 12, name: "English", symbol: "en" },
      { id: 13, name: "Japanese", symbol: "ja" },
      { id: 14, name: "Korean", symbol: "ko" },
      { id: 15, name: "Swedish", symbol: "sv" },
      { id: 16, name: "French", symbol: "fr" },
      { id: 17, name: "Italian", symbol: "it" },
    ],
    countries: [
      { id: 1, name: "US", symbol: "us" },
      { id: 2, name: "India", symbol: "in" },
      { id: 3, name: "Australia", symbol: "au" },
      { id: 4, name: "China", symbol: "cn" },
      { id: 5, name: "UK", symbol: "uk" },
      { id: 6, name: "Canada", symbol: "ca" },
      { id: 7, name: "South Korea", symbol: "kr" },
      { id: 8, name: "France", symbol: "fr" },
      { id: 9, name: "Italy", symbol: "it" },
    ],
  };

  render() {
    const { Option } = Select;
    const { languages, countries } = this.state;
    return (
      <div>
        <div className="SearchBox">
          <Divider>
            <b className="filterName">Query</b>
          </Divider>
          <Input
            placeholder="Search"
            style={{ width: 200 }}
            onChange={(e) => this.props.onQueryChange(e)}
          />
        </div>
        <div className="SearchLanguage">
          <Divider>
            <b className="filterName">Language</b>
          </Divider>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Language"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={(e) => this.props.onLanguageChange(e)}
          >
            {languages.map((language) => (
              <Option key={language.id} value={language.symbol}>
                {language.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="SearchCountry">
          <Divider>
            <b className="filterName">Country</b>
          </Divider>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Country"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={(e) => this.props.onCountryChange(e)}
          >
            {countries.map((country) => (
              <Option key={country.id} value={country.symbol}>
                {country.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="SearchButton">
          <Button
            type="primary"
            shape="round"
            icon={<SearchOutlined />}
            size="default"
            onClick={() => this.props.onSearch()}
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default Filters;
