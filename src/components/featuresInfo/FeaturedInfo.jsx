import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import styled from 'styled-components';

function FeaturedInfo() {
    return (
        <Feature>
            <FeatureItem>
                <FeaturedTitle>Revanue</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeatureMoney>$4568</FeatureMoney>
                    <FeatureMoneyRate>
                        -10 <NegitiveFeaturedIcon />
                    </FeatureMoneyRate>
                </FeaturedMoneyContainer>
                <span className="featuredSub">Compare to Last Month</span>
            </FeatureItem>
            <FeatureItem>
                <FeaturedTitle>Sales</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeatureMoney>$4568</FeatureMoney>
                    <FeatureMoneyRate>
                        -10 <NegitiveFeaturedIcon />
                    </FeatureMoneyRate>
                </FeaturedMoneyContainer>
                <span className="featuredSub">Compare to Last Month</span>
            </FeatureItem>
            <FeatureItem>
                <FeaturedTitle>Cost</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeatureMoney>$4568</FeatureMoney>
                    <FeatureMoneyRate>
                        10 <FeaturedIcon />
                    </FeatureMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compare to Last Month</FeaturedSub>
            </FeatureItem>
        </Feature>
    );
}

export default FeaturedInfo;

const Feature = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`;
const FeatureItem = styled.div`
    flex: 1;
    margin: 20px;
    padding: 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 250ms;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.5);

    &:hover {
        transform: scale(1.05);
    }
`;
const FeaturedTitle = styled.span`
    font-size: 26px;
`;
const FeaturedMoneyContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const FeatureMoney = styled.span`
    font-size: 26px;
`;
const FeatureMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 26px;
`;
const FeaturedSub = styled.span`
    font-size: 14px;
    color: gray;
`;
const FeaturedIcon = styled(ArrowDownward)`
    color: green;
    font-size: 26px;
`;
const NegitiveFeaturedIcon = styled(ArrowUpward)`
    color: red;
    font-size: 26px;
`;
