import React from 'react';
import { Visibility } from '@material-ui/icons';
import styled from 'styled-components';

export default function SmallWidget() {
    return (
        <SmallWidgetContainer>
            <SmallWidgetTitle>New Joined Users</SmallWidgetTitle>
            <SmallWidgetList>
                <SmallWidgetListItem>
                    <SmallWidgetUserImage src="/images/avatar.png" alt="" />
                    <SmallWidgetUser>
                        <SmallWidgetUsername>
                            Mehdi Hasan Shohan
                        </SmallWidgetUsername>
                        <SmallWidgetJobTitle>
                            Junior Softwere Engineer
                        </SmallWidgetJobTitle>
                    </SmallWidgetUser>
                    <SmallWidgetBtn>
                        <Visibility />
                    </SmallWidgetBtn>
                </SmallWidgetListItem>
                <SmallWidgetListItem>
                    <SmallWidgetUserImage src="/images/avatar.png" alt="" />
                    <SmallWidgetUser>
                        <SmallWidgetUsername>
                            Mehdi Hasan Shohan
                        </SmallWidgetUsername>
                        <SmallWidgetJobTitle>
                            Junior Softwere Engineer
                        </SmallWidgetJobTitle>
                    </SmallWidgetUser>
                    <SmallWidgetBtn>
                        <Visibility />
                    </SmallWidgetBtn>
                </SmallWidgetListItem>
                <SmallWidgetListItem>
                    <SmallWidgetUserImage src="/images/avatar.png" alt="" />
                    <SmallWidgetUser>
                        <SmallWidgetUsername>
                            Mehdi Hasan Shohan
                        </SmallWidgetUsername>
                        <SmallWidgetJobTitle>
                            Junior Softwere Engineer
                        </SmallWidgetJobTitle>
                    </SmallWidgetUser>
                    <SmallWidgetBtn>
                        <Visibility />
                    </SmallWidgetBtn>
                </SmallWidgetListItem>
                <SmallWidgetListItem>
                    <SmallWidgetUserImage src="/images/avatar.png" alt="" />
                    <SmallWidgetUser>
                        <SmallWidgetUsername>
                            Mehdi Hasan Shohan
                        </SmallWidgetUsername>
                        <SmallWidgetJobTitle>
                            Junior Softwere Engineer
                        </SmallWidgetJobTitle>
                    </SmallWidgetUser>
                    <SmallWidgetBtn>
                        <Visibility />
                    </SmallWidgetBtn>
                </SmallWidgetListItem>
                <SmallWidgetListItem>
                    <SmallWidgetUserImage src="/images/avatar.png" alt="" />
                    <SmallWidgetUser>
                        <SmallWidgetUsername>
                            Mehdi Hasan Shohan
                        </SmallWidgetUsername>
                        <SmallWidgetJobTitle>
                            Junior Softwere Engineer
                        </SmallWidgetJobTitle>
                    </SmallWidgetUser>
                    <SmallWidgetBtn>
                        <Visibility />
                    </SmallWidgetBtn>
                </SmallWidgetListItem>
                <SmallWidgetListItem>
                    <SmallWidgetUserImage src="/images/avatar.png" alt="" />
                    <SmallWidgetUser>
                        <SmallWidgetUsername>
                            Mehdi Hasan Shohan
                        </SmallWidgetUsername>
                        <SmallWidgetJobTitle>
                            Junior Softwere Engineer
                        </SmallWidgetJobTitle>
                    </SmallWidgetUser>
                    <SmallWidgetBtn>
                        <Visibility />
                    </SmallWidgetBtn>
                </SmallWidgetListItem>
            </SmallWidgetList>
        </SmallWidgetContainer>
    );
}

const SmallWidgetContainer = styled.div`
    flex: 1;
    padding: 20px;
    margin-right: 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 250ms;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.5);
`;
const SmallWidgetTitle = styled.h3`
    font-size: 26px;
    font-weight: 600;
`;
const SmallWidgetUserImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
`;
const SmallWidgetList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
const SmallWidgetListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 5px;
    border-radius: 4px;
    transition: all 250ms;

    &:hover {
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.4);
    }
`;
const SmallWidgetUser = styled.div`
    display: flex;
    flex-direction: column;
`;
const SmallWidgetUsername = styled.span`
    font-weight: 600;
`;
const SmallWidgetJobTitle = styled.span`
    font-weight: 300;
`;
const SmallWidgetBtn = styled.button`
    border: 1px solid gray;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: transparent;
    transition: all 250ms;
    cursor: pointer;

    &:hover {
        border: 1px solid rgb(0, 0, 0);
        color: #000;
        background: rgba(149, 156, 157, 0.5);
    }
`;
