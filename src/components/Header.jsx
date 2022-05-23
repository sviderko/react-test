import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import langStore from "../store/lang.store";
import "../styles/Header.scss";

const Header = observer(() => {
    return (
        <div className="header">
            <div className="header__logo">{langStore.lang.appName}</div>
            <div className="header__menu">
                <Link className="header__link" to="/">
                    {langStore.lang.menu.home}
                </Link>
                <Link className="header__link" to="/test">
                    {langStore.lang.menu.test}
                </Link>
                <Link className="header__link" to="/login">
                    LOGIN
                </Link>
            </div>
        </div>
    );
});
export default Header;
