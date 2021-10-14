import React from 'react';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PersonAdd,
    AddToQueue,
    AttachMoney,
    BarChart,
    Mail,
    Feedback,
    Message,
    CardTravel,
    Report,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <Link to="/" className="link">
                            <SidebarListItem>
                                <LineStyle style={{ marginRight: '5px' }} />
                                Home
                            </SidebarListItem>
                        </Link>
                        <SidebarListItem>
                            <Timeline style={{ marginRight: '5px' }} />
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem>
                            <TrendingUp style={{ marginRight: '5px' }} />
                            Sales
                        </SidebarListItem>
                    </SidebarList>
                    <SidebarTitle>Quick Menu</SidebarTitle>
                    <SidebarList>
                        <Link to="/users" className="link">
                            <SidebarListItem>
                                <PersonAdd style={{ marginRight: '5px' }} />
                                User
                            </SidebarListItem>
                        </Link>
                        <Link to="/products" className="link">
                            <SidebarListItem>
                                <AddToQueue style={{ marginRight: '5px' }} />
                                Products
                            </SidebarListItem>
                        </Link>

                        <SidebarListItem>
                            <AttachMoney style={{ marginRight: '5px' }} />
                            Transitions
                        </SidebarListItem>
                        <SidebarListItem>
                            <BarChart style={{ marginRight: '5px' }} />
                            Report
                        </SidebarListItem>
                    </SidebarList>
                    <SidebarTitle>Notifications</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <Mail style={{ marginRight: '5px' }} />
                            Mail
                        </SidebarListItem>
                        <SidebarListItem>
                            <Feedback style={{ marginRight: '5px' }} />
                            Feedback
                        </SidebarListItem>
                        <SidebarListItem>
                            <Message style={{ marginRight: '5px' }} />
                            Messages
                        </SidebarListItem>
                    </SidebarList>
                    <SidebarTitle>Staff</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <CardTravel style={{ marginRight: '5px' }} />
                            Manage
                        </SidebarListItem>
                        <SidebarListItem>
                            <Report style={{ marginRight: '5px' }} />
                            Resport
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div`
    flex: 1;
    background: rgb(152, 167, 170);
    height: calc(100vh - 70px);
    border-right: 0.1px solid #457b9d;
    position: sticky;
    top: 70px;
`;
const SidebarWrapper = styled.div`
    padding: 10px 20px;
`;
const SidebarMenu = styled.div`
    margin-bottom: 20px;
`;
const SidebarTitle = styled.h3`
    font-size: 18px;
    padding-bottom: 10px;
`;
const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
`;

const SidebarListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 5px;
    transition: all 300ms;
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
        border: 1px solid #457b9d;
        background: rgb(146, 179, 185);
    }
    &:visited {
        border: 1px solid #457b9d;
        background: rgb(146, 179, 185);
    }
`;
