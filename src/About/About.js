import React from "react";
import { Layout, Typography, Card, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Meta } = Card;

const About = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px", backgroundColor: "#282c34" }}>
        <div className="site-layout-content">
          <Typography>
            <Title style={{ color: "white" }}>О нас</Title>
            <Paragraph style={{ color: "white" }}>
              Привет! Меня зовут DreadLord, и я единственный разработчик и
              владелец этого cайта. Создав его, я попытался реализовать место,
              где люди могут найти самые новые и лучшие электронные устройства.
            </Paragraph>
            <Paragraph style={{ color: "white" }}>
              Не стесняйcя обращаться ко мне с любыми вопросами или
              предложениями. Благодарю за то, что выбрал мой магазин для
              своих покупок. Желаю отличного дня и увлекательных
              технологических открытий!
            </Paragraph>
            <Title style={{ color: "white", marginTop: "0" }} level={2}>
              Наша команда
            </Title>
            <Card
              style={{ marginTop: 0, width: 280, display: "inline-block" }}
              cover={
                <img
                  alt="logo"
                  src="https://assamsenpaisociety.com/wp-content/uploads/elementor/thumbs/Will-Sung-Jin-woo-return-in-the-Solo-Leveling-sequel_-What-will-it-be-about-q4ixvda15c17qqjptc61vn50s2j0g6kmh93lh8fj1s.jpg"
                />
              }
            >
              <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="DreadLord"
                description="Создатель сайта"
              />
            </Card>
          </Typography>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#282c34",
          color: "white",
        }}
      >
        ©2023 Created by DreadLord
      </Footer>
    </Layout>
  );
};

export default About;
