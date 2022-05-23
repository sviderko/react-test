import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TestPage from "./pages/TestPage";
import langStore from "./store/lang.store";
import "./styles/App.scss";

export const App = observer(() => {
    const switchLang = (lang) => {
        localStorage.setItem("lang", lang);
        langStore.switchLang(lang);
    };

    useEffect(() => {
        langStore.switchLang(localStorage.getItem("lang"));
    }, []);

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="test" element={<TestPage />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
            <div style={{ position: "fixed", bottom: 10, right: "49%" }}>
                <button onClick={() => switchLang("ru")}>Русский</button>
                <button onClick={() => switchLang("eng")}>English</button>
            </div>
        </div>
    );
});

export default App;
