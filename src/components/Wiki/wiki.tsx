import React, { Component } from 'react';
import './wiki.css';
import RickAge from './ChartRisk/RiskAge';
import RiskCondition from './ChartRisk/RiskCondition';
import RiskDisease from './ChartRisk/RiskDisease';
import RiskPercent from './ChartRisk/RiskPercent';
import RiskBubble from './ChartRisk/RishBubble';
import backGroundCovid from '../image/backgroundCovidInfo.jpg';
import Corona from '../image/corona.jpg';
import CoronaRiskActivity from '../image/CoronaRiskActivity.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faChartBar, faBacteria, faHandsWash, faPeopleArrows, faHeadSideMask, faBoxTissue, faSprayCan, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import Collapsible from 'react-collapsible';
import RiskAge from './ChartRisk/RiskAge';
import Iframe from 'react-iframe';
interface IStates {
  readMore: any
}
class Wiki extends Component<any, IStates>{
  constructor(props: any) {
    super(props);
    this.state = {
      readMore: true
    }
  }
  ClickReadMore() {
    console.log(this.state.readMore)
  }
  renderTextCollapse(value: any) {
    if (value === true)
      return 'Read more';
    else return 'Collapse';
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="content-wiki">
          <div className="backgroundInfo">
            <div className="row">
              <img src={backGroundCovid} className="img-responsive" alt="Background" />
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 panel-box-info">
                <p className="info1">Coronavirus disease</p>
                <p className="info2">COVID-19 Information Center</p>
              </div>
            </div>
          </div>
          <div className="contentWiki">
            <div className="loi-dan">
              <p>In 2019, the Centers for Disease Control and Prevention (CDC) started monitoring the outbreak of a new coronavirus, SARS-CoV-2, which causes COVID-19. Authorities first identified the virus in Wuhan, China.</p>
              <p>Since then, the virus has spread to nearly every country, leading the World Health Organization (WHO) to declare a pandemic.</p>
              <p>The new coronavirus has been responsible for millions of infections globally, causing hundreds of thousands of deaths. The United States has seen the highest number of these deaths.</p>
            </div>
            <div className="What-Covid">
              <div className="border-what-covid">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 content-what-corona">

                  <h1><FontAwesomeIcon icon={faQuestionCircle} /> What is the Coronavirus?</h1>
                  <p>2019 Novel Coronavirus (2019-nCoV) is a virus (more specifically, a coronavirus) identified as the cause of an outbreak of respiratory illness first detected in Wuhan, China.</p>
                  <Collapsible trigger={this.renderTextCollapse(this.state.readMore)}
                    triggerStyle={{ color: "blue" }} easing="ease-in" triggerClassName="txt-read-more"
                    transitionTime={500} onOpen={() => this.setState({ readMore: !this.state.readMore })}
                    onClose={() => this.setState({ readMore: !this.state.readMore })}>
                    <p>Early on, many of the patients in the outbreak in Wuhan, China reportedly had some link to a large seafood and animal market, suggesting animal-to-person spread.</p>
                    <p>However, a growing number of patients reportedly have not had exposure to animal markets, indicating person-to-person spread is occurring.</p>
                    <p>The name coronavirus is derived from the Latin corona, meaning "crown" or "halo", which refers to the characteristic appearance reminiscent of a crown.</p>
                  </Collapsible>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 image-corona">
                  <img src={Corona} className="img-responsive" alt="The virus Corona" />
                  <i>These images are colorized and from electron microscropes</i>
                </div>
              </div>
            </div>



            <div className="group-chart">
              <div className="title-data-pack">
                <p>
                  <FontAwesomeIcon icon={faChartBar} /> COVID-19 #Coronavirus <span>Data Pack</span>
                </p>

              </div>
              <div className="group-chart-age">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 title-chart">
                  <div>
                    <h1>Those Aged 60+ are Most At Risk</h1>
                    <p>% of deceased (Italy, UK and South Korea)</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 img-responsive">
                  <RiskAge />
                </div>
              </div>

              <div className="group-chart-condition">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 title-chart position-absolute">
                  <h1>#Covid-19 Pathologies and Death rates</h1>
                  <p>% of deceased with <span>serious ailments</span></p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 img-responsive">
                  <RiskCondition />
                </div>
              </div>

              <div className="group-chart-percent">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 title-chart position-absolute">
                  <h1>Multiple Condition Increase Risk</h1>
                  <p>Serious condition present in those who have died</p>
                  <p className="name-condition-sick"><FontAwesomeIcon icon={faBacteria} /> Active Cancer, Atrial fibrillation, Chronic Obstructive Pulmonary Disease (COPD) Dementia, Diabetes, Heart Disease
                  , Hypertension, Liver disease (chronic), Renal failure (chronic), Stroke</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 img-responsive">
                  <RiskPercent />
                </div>
              </div>

              <div className="group-chart-disease">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 title-chart position-absolute">
                  <h1>Average Disease Deaths per Day Worldwide</h1>
                  <p><span>updated 7th Jul 2020</span></p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 img-responsive">
                  <RiskDisease />
                </div>
              </div>
            </div>
            <div className="row preventions">

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="contents-prevent text-center">

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center mg-15">
                    <div className="washing">
                      <p className="col-12 icon-prevention"><FontAwesomeIcon icon={faHandsWash} size="5x" /></p>
                      <p className="col-12 content-prevention">Wash your hands often</p>
                      <p className="col-12 detail-prevention">Wash your hands often with soap and water for at least 20 seconds especially
                      after you have been in a public place, or after blowing your nose, coughing, or sneezing.</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center mg-15">
                    <div className="washing">
                      <p className="col-12 icon-prevention"><FontAwesomeIcon icon={faPeopleArrows} size="5x" /></p>
                      <p className="col-12 content-prevention">Avoid close contact</p>
                      <p className="col-12 detail-prevention">Put 6 feet of distance between yourself and people who don’t live in your household.</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center mg-15">
                    <div className="washing">
                      <p className="col-12 icon-prevention"><FontAwesomeIcon icon={faHeadSideMask} size="5x" /></p>
                      <p className="col-12 content-prevention">Wear the mask</p>
                      <p className="col-12 detail-prevention">Everyone should wear a cloth face cover in public settings and when around people who don’t live in your household.</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center mg-15">
                    <div className="washing">
                      <p className="col-12 icon-prevention"><FontAwesomeIcon icon={faBoxTissue} size="5x" /></p>
                      <p className="col-12 content-prevention">Cover coughs and sneezes</p>
                      <p className="col-12 detail-prevention">Always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow and do not spit.</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center mg-15">
                    <div className="washing">
                      <p className="col-12 icon-prevention"><FontAwesomeIcon icon={faSprayCan} size="5x" /></p>
                      <p className="col-12 content-prevention">Clean and disinfect</p>
                      <p className="col-12 detail-prevention">Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center mg-15">
                    <div className="washing">
                      <p className="col-12 icon-prevention"><FontAwesomeIcon icon={faHandHoldingMedical} size="5x" /></p>
                      <p className="col-12 content-prevention">Monitor Your Health Daily</p>
                      <p className="col-12 detail-prevention">Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of COVID-19. <br />Take your temperature if symptoms develop.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 iframe">
                <div className="risk-activity">
                  <Iframe url="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fprepare%2Fprevention.html"
                    id="myIFrame"
                    className="myIFrame"
                    loading ="eager"
                    display="inline"
                    position="relative"
                    scrolling ="yes"
                    allow="fullscreen" 
                    />
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    );
  }
}
export default Wiki;
