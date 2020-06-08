import React from "react";
import { List } from "antd";

const NewsFeed = (props) => {
  return (
    <div className="newsfeed">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
          hideOnSinglePage: true,
        }}
        bordered={true}
        locale={{
          emptyText: "No Articles, search for article on your favorite topic!!",
        }}
        dataSource={props.newsArticles}
        renderItem={(item) => (
          <>
            <List.Item
              key={item.title}
              extra={<img width={272} alt="Article Art" src={item.image} />}
            >
              <List.Item.Meta
                title={
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="newsTitle"
                  >
                    {item.title}
                  </a>
                }
                description={
                  <>
                    <span>{`Source : `}</span>
                    <a
                      href={item.source["url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {`${item.source["name"]}`}
                    </a>
                  </>
                }
              />
              {item.description}
            </List.Item>
            <hr />
          </>
        )}
      />
    </div>
  );
};

export default NewsFeed;
