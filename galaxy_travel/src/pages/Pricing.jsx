import React from "react";
import HeroImg from "../components/heroImg/HeroImg";
import PricingCard from "../components/pricingCard/PricingCard";

const Pricing = () => {
    return (
        <div>
            <HeroImg heading="PRICING" text="Choose your trip" />
            <PricingCard />
        </div>
    );
};

export default Pricing;
