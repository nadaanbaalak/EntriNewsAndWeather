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
      { id: 13, name: "Afrikaans", symbol: "af" },
    ],
  };

  render() {
    const { Option } = Select;
    const { languages } = this.state;
    return (
      <div>
        <div className="SearchBox">
          <Divider>
            <b className="filterName">Query</b>
          </Divider>
          <Input placeholder="Search" style={{ width: 200 }} />
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
          >
            {languages.map((language) => (
              <Option key={language.id} value={language.symbol}>
                {language.name}
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
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default Filters;
