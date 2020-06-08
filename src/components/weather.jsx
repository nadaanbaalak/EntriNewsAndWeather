import React from "react";
import { Button, Tooltip, Divider } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

const Weather = (props) => {
  const { isGeolocationPresent: geoloc } = props;
  const { data, status } = { ...props.weatherData };
  const { name: CityName, main, sys } = { ...data };
  const { temp, temp_max, temp_min } = { ...main };
  const { country } = { ...sys };

  const weatherData = (status) => {
    if (status === 200)
      return (
        <div className="weatherData">
          <p className="prop_value">{`${(temp - 273.15).toFixed(1)}° C`}</p>
          <p className="spacing">
            <span className="prop_name">{`Place : `}</span>
            <span className="prop_value">{`${CityName}, ${country}`}</span>
          </p>
          <p className="spacing">
            <span className="prop_name">{`Max/Min : `}</span>
            <span className="prop_value">
              {`${(temp_min - 273.15).toFixed(1)}° C / ${(
                temp_max - 273.15
              ).toFixed(1)}° C`}
            </span>
          </p>
        </div>
      );
    else
      return <p className="data">Currently unable to fetch Weather Info!!</p>;
  };

  return (
    <div className="weatherWidget">
      <div>
        <Divider orientation="left" plain>
          <h1>
            Weather{" "}
            <span>
              <Tooltip title="Refresh">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<ReloadOutlined />}
                  size="default"
                  onClick={() => props.onRefresh()}
                />
              </Tooltip>
            </span>
          </h1>
        </Divider>
      </div>
      <div className="weatherData">
        {geoloc ? (
          weatherData(status)
        ) : (
          <p>Geolocation is not supported by this browser </p>
        )}
      </div>
    </div>
  );
};

export default Weather;
