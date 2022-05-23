import { observer } from "mobx-react-lite";
import React from "react";
import langStore from "../store/lang.store";
import "../styles/HomePage.scss";

const HomePage = observer(() => {
    return <div className="home">{langStore.lang.titles.homeTitle}</div>;
});

export default HomePage;
