import React from "react";
import { Row, Col} from 'antd';
import '../../style/base.scss'
import '../../style/home.scss'

const BannerStatistics = ()=>{
    return(
        
        <div className='statistic container'>
            <Row className="statistic__group" gutter={[16,16]}>
                <Col className= 'statistic__group--boder statistic__group--hover' xs={{ span: 12}} lg={{ span: 12}}>
                    <img src='Images/banner/banner-1.jpg'/>
                </Col>
                <Col className= 'statistic__group--hover' xs={{ span: 12}} lg={{ span: 12}}>
                    <img src='Images/banner/banner-2.jpg'/>
                </Col>
            </Row>
        </div>
    );
}

export default BannerStatistics;