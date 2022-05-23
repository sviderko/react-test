import { observer } from "mobx-react-lite";
import React from "react";
import counter from "../store/counter";
import langStore from "../store/lang.store";
import "../styles/TestPage.scss";

const TestPage = observer(() => {
    return (
        <div
            className="test"
            style={{ display: "flex", flexDirection: "column" }}
        >
            <div className="home">{langStore.lang.titles.testTitle}</div>
            <div className="count">{counter.count}</div>
            <button style={{ padding: "1rem" }} onClick={() => counter.inc()}>
                {langStore.lang.buttons.incBtn}
            </button>
            <button style={{ padding: "1rem" }} onClick={() => counter.dec()}>
                {langStore.lang.buttons.decBtn}
            </button>
        </div>
    );
});

export default TestPage;
