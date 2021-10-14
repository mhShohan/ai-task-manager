import React from 'react';
import styled from 'styled-components';

export default function LargeWidget() {
    return (
        <LargeWidgetContainer>
            <LargeWidgetTitle>Latest Transitions</LargeWidgetTitle>
            <LargeWidgetTable>
                <LargeWidgetTr>
                    <LargeWidgetTh>Customer</LargeWidgetTh>
                    <LargeWidgetTh>Date</LargeWidgetTh>
                    <LargeWidgetTh>Amount</LargeWidgetTh>
                    <LargeWidgetTh>Status</LargeWidgetTh>
                </LargeWidgetTr>
                <LargeWidgetTr>
                    <LargeWidgetTdUser>
                        <LargeWidgetImage src="/images/avatar.png" alt="" />
                        <LargeWidgetName>Nasim Sheikh</LargeWidgetName>
                    </LargeWidgetTdUser>
                    <LargeWidgetTd>03 January,2020</LargeWidgetTd>
                    <LargeWidgetTd>$2309</LargeWidgetTd>
                    <LargeWidgetTd>
                        <LargeWidgetBtnApproved>
                            Approved
                        </LargeWidgetBtnApproved>
                    </LargeWidgetTd>
                </LargeWidgetTr>
                <LargeWidgetTr>
                    <LargeWidgetTdUser>
                        <LargeWidgetImage src="/images/avatar.png" alt="" />
                        <LargeWidgetName>Mehdi Hasan</LargeWidgetName>
                    </LargeWidgetTdUser>
                    <LargeWidgetTd>03 January,2020</LargeWidgetTd>
                    <LargeWidgetTd>$2309</LargeWidgetTd>
                    <LargeWidgetTd>
                        <LargeWidgetBtnDelcined>
                            Declined
                        </LargeWidgetBtnDelcined>
                    </LargeWidgetTd>
                </LargeWidgetTr>
                <LargeWidgetTr>
                    <LargeWidgetTdUser>
                        <LargeWidgetImage src="/images/avatar.png" alt="" />
                        <LargeWidgetName>Minul Hasan</LargeWidgetName>
                    </LargeWidgetTdUser>
                    <LargeWidgetTd>03 January,2020</LargeWidgetTd>
                    <LargeWidgetTd>$2309</LargeWidgetTd>
                    <LargeWidgetTd>
                        <LargeWidgetBtnPending>Pending</LargeWidgetBtnPending>
                    </LargeWidgetTd>
                </LargeWidgetTr>
                <LargeWidgetTr>
                    <LargeWidgetTdUser>
                        <LargeWidgetImage src="/images/avatar.png" alt="" />
                        <LargeWidgetName>Rashedul Islam</LargeWidgetName>
                    </LargeWidgetTdUser>
                    <LargeWidgetTd>03 January,2020</LargeWidgetTd>
                    <LargeWidgetTd>$2309</LargeWidgetTd>
                    <LargeWidgetTd>
                        <LargeWidgetBtnApproved>
                            Approved
                        </LargeWidgetBtnApproved>
                    </LargeWidgetTd>
                </LargeWidgetTr>
                <LargeWidgetTr>
                    <LargeWidgetTdUser>
                        <LargeWidgetImage src="/images/avatar.png" alt="" />
                        <LargeWidgetName>Mehdi Hasan Shohan</LargeWidgetName>
                    </LargeWidgetTdUser>
                    <LargeWidgetTd>03 January,2020</LargeWidgetTd>
                    <LargeWidgetTd>$2309</LargeWidgetTd>
                    <LargeWidgetTd>
                        <LargeWidgetBtnDelcined>
                            Declined
                        </LargeWidgetBtnDelcined>
                    </LargeWidgetTd>
                </LargeWidgetTr>
                <LargeWidgetTr>
                    <LargeWidgetTdUser>
                        <LargeWidgetImage src="/images/avatar.png" alt="" />
                        <LargeWidgetName>Shohan</LargeWidgetName>
                    </LargeWidgetTdUser>
                    <LargeWidgetTd>03 January,2020</LargeWidgetTd>
                    <LargeWidgetTd>$2309</LargeWidgetTd>
                    <LargeWidgetTd>
                        <LargeWidgetBtnPending>Pending</LargeWidgetBtnPending>
                    </LargeWidgetTd>
                </LargeWidgetTr>
            </LargeWidgetTable>
        </LargeWidgetContainer>
    );
}

const LargeWidgetContainer = styled.div`
    flex: 2;
    padding: 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 250ms;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.5);
`;
const LargeWidgetTitle = styled.h3`
    font-size: 26px;
    font-weight: 600;
`;
const LargeWidgetImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;
const LargeWidgetBtn = styled.button`
    width: 80px;
    height: 26px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 600;
    cursor: pointer;
`;
const LargeWidgetBtnApproved = styled(LargeWidgetBtn)`
    color: #113611;
    background: #25e23e9f;
`;
const LargeWidgetBtnPending = styled(LargeWidgetBtn)`
    background: #d3d700b7;
    color: #000;
`;
const LargeWidgetBtnDelcined = styled(LargeWidgetBtn)`
    background: #f566663f;
    color: red;
`;
const LargeWidgetTable = styled.table`
    width: 100%;
    border-spacing: 20px 10px;
`;
const LargeWidgetTr = styled.tr``;
const LargeWidgetTh = styled.th`
    text-align: left;
`;
const LargeWidgetTd = styled.td``;
const LargeWidgetTdUser = styled.td`
    display: flex;
    align-items: center;
`;
const LargeWidgetName = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
`;
