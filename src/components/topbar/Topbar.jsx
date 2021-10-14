import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Topbar() {
    return (
        <TopbarContainer>
            <TopbarWrapper>
                <TopbarWrapperLeft>
                    <Link to="/">
                        <Logo>Web-Dev</Logo>
                    </Link>
                </TopbarWrapperLeft>
                <TopbarWrapperRight>
                    <TopbarIconsContainer>
                        <NotificationsNone fontSize="large" />
                        <TopIconBadge>3</TopIconBadge>
                    </TopbarIconsContainer>
                    <TopbarIconsContainer>
                        <Language fontSize="large" />
                        <TopIconBadge>3</TopIconBadge>
                    </TopbarIconsContainer>
                    <TopbarIconsContainer>
                        <Settings fontSize="large" />
                    </TopbarIconsContainer>
                    <TopAvatar src="/images/avatar.png" alt="User" />
                </TopbarWrapperRight>
            </TopbarWrapper>
        </TopbarContainer>
    );
}

export default Topbar;

const TopbarContainer = styled.div`
    width: 100%;
    height: 70px;
    background: rgb(152, 167, 170);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    border-bottom: 0.1px solid #457b9d;
`;

const TopbarWrapper = styled.div`
    padding: 0 50px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TopbarWrapperLeft = styled.div``;
const TopbarWrapperRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Logo = styled.span`
    font-size: 42px;
    font-weight: 900;
    text-transform: uppercase;
    color: #000;
`;
const TopbarIconsContainer = styled.div`
    position: relative;
    margin: 0 10px;
    cursor: pointer;
`;
const TopIconBadge = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    top: -7px;
    right: -7px;
    background: #457b9d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(246, 247, 248);
    font-size: 14px;
    font-weight: 600;
`;
const TopAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 30px;
`;
