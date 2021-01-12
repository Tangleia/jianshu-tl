import React, {Component} from 'react';
//import { CSSTransition } from 'react-transition-group';
import {
    Addition,
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button
} from "./style";

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <img className="img-icon" alt="" src="img/a.png"/>
                    </NavItem>
                    <NavSearch/>
                </Nav>
                <Addition>
                    <Button className="wri">
                        <img className="img-icon" alt="" src="img/bi.png"/>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;