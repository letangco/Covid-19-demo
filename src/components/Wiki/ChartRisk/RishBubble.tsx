import React, { Component } from 'react';
import Chart from 'react-google-charts';
class RiskBubble extends Component {
  render() {
    return (
      <div className="container">
        <Chart
  width={'100%'}
  height={'600px'}
  chartType="BubbleChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['ID', 'INCREASING RISK', 'RANK RISK','NOTE'],
    ['tennis', 1, 1,''],
    ['takeout food', 1, 3,''],
    ['bring in mail / groceries without precautions', 2.73, 6.78,''],
    ['friend uses your bathroom', 2.1, 1.5,''],
    ['camping', 2.3, 2,'' ],
    ['golf', 2, 3.5,''],
    ['petrol/gas station', 2, 3.96 ,''],
    ['see your doctor', 2.7, 1.5,''],
    ['vacation home with another family', 2.8, 7,''],
    ['beach',2.3,4.6,''],
    ['outdoor dining',2.5,3,''],
    ['walk in busy downtown',2.5,5.6,''],
    ['grocery shopping',2.4,4.2,''],
    ['library, museum',2.7,3,''],
    ['vacation overnight',2.3,1.4,''],
    

    ['visit a mall', 3.5,1,''],
    ['use a public restroom', 3.5,2.1,''],
    ['small outdoor picnic', 3.5,3.2,''],
    ['small backyard barbecue', 3.4,4.3,''],
    ['stay at a hotel', 3.5,5.4,''],
    ['public pool',4,3,''],
    ['small dinner party(indoors)',4,4.6,''],
    ['young kid playdates', 4.4,2.1,''],
    ['work in a shared office',4.4,3.2,''],
    ['get a haircut', 4.6, 4.4,''],
    ['play ground', 5,2.2, ''],
    ['cinema/movie theatre', 5.1,3.5,''],
    ['casino',5.1,4.5,''],
    ['send kids to school camp, or daycare',5.1,5.7,''],
    ['eat at a restaurant', 5.5,1.5,''],
    ['ride the subway/bus', 5.5,2.5,''],
    ['exercise at a gym', 5.6,3.5,''],
    ['bowling', 5.6,4.5,''],
    ['visit an elder in their home', 5.5,6.5,''],
    ['basketball', 5.8,5.8,''],
    ['airplane', 5.8, 7.5,''],


    ['buffet',8,1.5,''],
    ['amusement park', 7.3,2.2,''],
    ['church', 8,3,''],
    ['go out with someone',7.3,4,''],
    ['sport stadium', 8.6,4.5,''],
    ['indoor bar', 9,5,''],
    ['stop routinely wearing a face mask', 8,5.5,''],
    ['indoor party', 8.6, 6,''],
    ['hug or shake hands', 7.5,7,''],
    ['attend a wedding or funeral', 7.5, 7.5,''],
    ['see a concert or play', 7.3, 7.5,''],
    ['nightclub', 8.7, 8.7,'']
  ]}
  options={{
    title:
      'Correlation between INCREASING RISK, fertility rate ' +
      'and population of some world countries (2010)',
    hAxis: { title: 'INCREASING RISK' },
    vAxis: { title: 'RANK RISK' },
    
    bubble: {
      textStyle: {
        fontSize: 12,
        fontName: 'Times-Roman',
        color: 'green',
        bold: true,
        italic: true,
        auraColor: 'none',
      },
    },
  }}
  rootProps={{ 'data-testid': '3' }}
/>
      </div>
    );
  }
}
export default RiskBubble;
