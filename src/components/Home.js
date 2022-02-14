import React from "react";
import styled from "styled-components";
import Sections from "./Sections";

function Home() {
  return (
    <cointainer>
      <Sections
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Sections
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Sections
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Sections
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Sections
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Sections
        title="Solar Roof"
        description="
      Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Sections
      title="Accessories"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="Shop Now"
        rightBtnText=""
      
      
      />
    </cointainer>
  );
}

export default Home;

const cointainer = styled.div`
  height: 100vh;
`;
