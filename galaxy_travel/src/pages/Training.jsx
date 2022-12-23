import React from "react";
import HeroImg from "../components/heroImg/HeroImg";
import TrainingContent from "../components/training/TrainingContent";

const Training = () => {
    return (
        <div>
            <HeroImg
                heading="TRAINING"
                text="Pre-flight and in-flight training"
            />
            <TrainingContent />
        </div>
    );
};

export default Training;
