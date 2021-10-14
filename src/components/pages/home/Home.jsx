import React from 'react';
import Chart from '../../charts/Chart';
import FeaturedInfo from '../../featuresInfo/FeaturedInfo';
import { userData } from '../../data/userData';
import LargeWidget from '../../widget/large/LargeWidget';
import SmallWidget from '../../widget/small/SmallWidget';
import styled from 'styled-components';

function Home() {
    return (
        <HomeContainer>
            <FeaturedInfo />
            <ChartContainer>
                <Chart
                    data={userData}
                    title="User Analytics"
                    dataKey="Active user"
                    grid
                />
            </ChartContainer>
            <WidgetContainer>
                <SmallWidget />
                <LargeWidget />
            </WidgetContainer>
        </HomeContainer>
    );
}

export default Home;

const HomeContainer = styled.div`
    flex: 4;
    background: rgba(151, 167, 170, 0.6);
`;
const ChartContainer = styled.div`
    margin: 10px 20px;
`;

const WidgetContainer = styled.div`
    margin: 20px;
    display: flex;
`;
