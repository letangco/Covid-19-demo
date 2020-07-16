import React, { Component } from "react";
import Select from 'react-select';
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from '@material-ui/core/Switch';
import {
  faLungsVirus,
  faFlagCheckered,
  faHeartbeat,
  faRestroom,
  faToilet,
  faLungs,
  faStethoscope,
  faAllergies,
  faMapMarkedAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";

// import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

interface iProps {
  data: any;
  isSubmit: any;
}
interface IState {
  groupAge: any;
  groupSex: any;
  nameAge: any;
  nameSex: any;
  Cardiovascular: any;
  Diabetes: any;
  Respiratory: any;
  Hypertension: any;
  Cancer: any;
  data: any;
  isSubmit: any;
  CountryOption: any;
  // Flag: any;
}
class FormCalculatorRate extends Component<iProps, IState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      groupAge: "groupAge1",
      groupSex: "Male",
      Cardiovascular: true,
      Diabetes: true,
      Respiratory: true,
      Hypertension: true,
      Cancer: true,
      nameAge: [
        "groupAge1",
        "groupAge2",
        "groupAge3",
        "groupAge4",
        "groupAge5",
        "groupAge6",
      ],
      nameSex: ["Male", "Female"],
      data: [],
      isSubmit: false,
      CountryOption: "AF",
      // Flag: 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/af.svg'
    };
  }
  onHandleSubmit = (event: any) => {
    event.preventDefault();
    this.props.isSubmit(this.state.isSubmit);
    
  };
  // Bắt sự kiện khi Click thì gửi toàn bộ dữ liệu State về thằng cha calculatorRate
  onClick = () => {
    this.setState({ isSubmit: true });
    var {
      groupAge,
      groupSex,
      Cardiovascular,
      Diabetes,
      Respiratory,
      Hypertension,
      Cancer,
      CountryOption
    } = this.state;

    var data = [];
    data.push(
      groupAge,
      groupSex,
      Cardiovascular,
      Diabetes,
      Respiratory,
      Hypertension,
      Cancer,
      CountryOption
    );
    // console.log(data);
    this.props.data(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  handleChange = (event: any) => {
    // console.log(event.target.value)
    // this.setState({ CountryOption: event.target.value })
    this.setState({ CountryOption: event.value })
  }
  handleChangeSwitchCardiovascular(value:any){
    this.setState({
      Cardiovascular: !value,
    })
  }
  handleChangeSwitchDiabetes(value:any ){
    this.setState({
      Diabetes:!value
    })
  }
  handleChangeSwitchRespiratory(value:any)
  {
    this.setState({
      Respiratory:!value
    })
  }
  handleChangeSwitchHypertension(value:any){
    this.setState({
      Hypertension:!value
    })
  }
  handleChangeSwitchCancer(value:any ){
    this.setState({
      Cancer:!value
    })
  }
  onHandleClickAge = (event: any) => {
    this.setState({
      groupAge: event.target.name,
    });
  };
  onHandleClickSex = (event: any) => {
    this.setState({
      groupSex: event.target.name,
    });
  };
  renderClassCheckCondition(value:any)
  {
    if(value ===true){
      return "checkCondition"
    }
    else return "unCheckCondition"
  }
  renderClassUnCheckCondition(value:any){
    if(value ===false){
      return "checkCondition"
    }
    else return "unCheckCondition"
  }
  render() {
    function renderFlagImage(flag: any) {
      var temp: any = 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/' + flag.toLocaleLowerCase() + '.svg';
      return <img src={temp} alt="Flag" width="50px" />
    }

    // Du lieu Country lable-value
    const Countries = [
      {
        "label": 'Afghanistan',
        "value": "AF"
      },
      {
        "label": "Albania",
        "value": "AL"
      },
      {
        "label": "Algeria",
        "value": "DZ"
      },
      {
        "label": "Andorra",
        "value": "AD"
      },
      {
        "label": "Angola",
        "value": "AO"
      },
      {
        "label": "Antigua and Barbuda",
        "value": "AG"
      },
      {
        "label": "Argentina",
        "value": "AR"
      },
      {
        "label": "Armenia",
        "value": "AM"
      },
      {
        "label": "Australia",
        "value": "AU"
      },
      {
        "label": "Austria",
        "value": "AT"
      },
      {
        "label": "Azerbaijan",
        "value": "AZ"
      },
      {
        "label": "Bahamas",
        "value": "BS"
      },
      {
        "label": "Bahrain",
        "value": "BH"
      },
      {
        "label": "Bangladesh",
        "value": "BD"
      },
      {
        "label": "Barbados",
        "value": "BB"
      },
      {
        "label": "Belarus",
        "value": "BY"
      },
      {
        "label": "Belgium",
        "value": "BE"
      },
      {
        "label": "Belize",
        "value": "BZ"
      },
      {
        "label": "Benin",
        "value": "BJ"
      },
      {
        "label": "Bhutan",
        "value": "BT"
      },
      {
        "label": "Bolivia",
        "value": "BO"
      },
      {
        "label": "Bosnia and Herzegovina",
        "value": "BA"
      },
      {
        "label": "Botswana",
        "value": "BW"
      },
      {
        "label": "Brazil",
        "value": "BR"
      },
      {
        "label": "Brunei Darussalam",
        "value": "BN"
      },
      {
        "label": "Bulgaria",
        "value": "BG"
      },
      {
        "label": "Burkina Faso",
        "value": "BF"
      },
      {
        "label": "Burundi",
        "value": "BI"
      },
      {
        "label": "Cambodia",
        "value": "KH"
      },
      {
        "label": "Cameroon",
        "value": "CM"
      },
      {
        "label": "Canada",
        "value": "CA"
      },
      {
        "label": "Cape Verde",
        "value": "CV"
      },
      {
        "label": "Central African Republic",
        "value": "CF"
      },
      {
        "label": "Chad",
        "value": "TD"
      },
      {
        "label": "Chile",
        "value": "CL"
      },
      {
        "label": "China",
        "value": "CN"
      },
      {
        "label": "Colombia",
        "value": "CO"
      },
      {
        "label": "Comoros",
        "value": "KM"
      },
      {
        "label": "Congo (Brazzaville)",
        "value": "CG"
      },
      {
        "label": "Congo (Kinshasa)",
        "value": "CD"
      },
      {
        "label": "Costa Rica",
        "value": "CR"
      },
      {
        "label": "Croatia",
        "value": "HR"
      },
      {
        "label": "Cuba",
        "value": "CU"
      },
      {
        "label": "Cyprus",
        "value": "CY"
      },
      {
        "label": "Czech Republic",
        "value": "CZ"
      },
      {
        "label": "Côte d'Ivoire",
        "value": "CI"
      },
      {
        "label": "Denmark",
        "value": "DK"
      },
      {
        "label": "Djibouti",
        "value": "DJ"
      },
      {
        "label": "Dominica",
        "value": "DM"
      },
      {
        "label": "Dominican Republic",
        "value": "DO"
      },
      {
        "label": "Ecuador",
        "value": "EC"
      },
      {
        "label": "Egypt",
        "value": "EG"
      },
      {
        "label": "El Salvador",
        "value": "SV"
      },
      {
        "label": "Equatorial Guinea",
        "value": "GQ"
      },
      {
        "label": "Eritrea",
        "value": "ER"
      },
      {
        "label": "Estonia",
        "value": "EE"
      },
      {
        "label": "Ethiopia",
        "value": "ET"
      },
      {
        "label": "Fiji",
        "value": "FJ"
      },
      {
        "label": "Finland",
        "value": "FI"
      },
      {
        "label": "France",
        "value": "FR"
      },
      {
        "label": "Gabon",
        "value": "GA"
      },
      {
        "label": "Gambia",
        "value": "GM"
      },
      {
        "label": "Georgia",
        "value": "GE"
      },
      {
        "label": "Germany",
        "value": "DE"
      },
      {
        "label": "Ghana",
        "value": "GH"
      },
      {
        "label": "Greece",
        "value": "GR"
      },
      {
        "label": "Grenada",
        "value": "GD"
      },
      {
        "label": "Guatemala",
        "value": "GT"
      },
      {
        "label": "Guinea",
        "value": "GN"
      },
      {
        "label": "Guinea-Bissau",
        "value": "GW"
      },
      {
        "label": "Guyana",
        "value": "GY"
      },
      {
        "label": "Haiti",
        "value": "HT"
      },
      {
        "label": "Holy See (Vatican City State)",
        "value": "VA"
      },
      {
        "label": "Honduras",
        "value": "HN"
      },
      {
        "label": "Hungary",
        "value": "HU"
      },
      {
        "label": "Iceland",
        "value": "IS"
      },
      {
        "label": "India",
        "value": "IN"
      },
      {
        "label": "Indonesia",
        "value": "ID"
      },
      {
        "label": "Iran, Islamic Republic of",
        "value": "IR"
      },
      {
        "label": "Iraq",
        "value": "IQ"
      },
      {
        "label": "Ireland",
        "value": "IE"
      },
      {
        "label": "Israel",
        "value": "IL"
      },
      {
        "label": "Italy",
        "value": "IT"
      },
      {
        "label": "Jamaica",
        "value": "JM"
      },
      {
        "label": "Japan",
        "value": "JP"
      },
      {
        "label": "Jordan",
        "value": "JO"
      },
      {
        "label": "Kazakhstan",
        "value": "KZ"
      },
      {
        "label": "Kenya",
        "value": "KE"
      },
      {
        "label": "Korea (South)",
        "value": "KR"
      },
      {
        "label": "Kuwait",
        "value": "KW"
      },
      {
        "label": "Kyrgyzstan",
        "value": "KG"
      },
      {
        "label": "Lao PDR",
        "value": "LA"
      },
      {
        "label": "Latvia",
        "value": "LV"
      },
      {
        "label": "Lebanon",
        "value": "LB"
      },
      {
        "label": "Lesotho",
        "value": "LS"
      },
      {
        "label": "Liberia",
        "value": "LR"
      },
      {
        "label": "Libya",
        "value": "LY"
      },
      {
        "label": "Liechtenstein",
        "value": "LI"
      },
      {
        "label": "Lithuania",
        "value": "LT"
      },
      {
        "label": "Luxembourg",
        "value": "LU"
      },
      {
        "label": "Macedonia, Republic of",
        "value": "MK"
      },
      {
        "label": "Madagascar",
        "value": "MG"
      },
      {
        "label": "Malawi",
        "value": "MW"
      },
      {
        "label": "Malaysia",
        "value": "MY"
      },
      {
        "label": "Maldives",
        "value": "MV"
      },
      {
        "label": "Mali",
        "value": "ML"
      },
      {
        "label": "Malta",
        "value": "MT"
      },
      {
        "label": "Mauritania",
        "value": "MR"
      },
      {
        "label": "Mauritius",
        "value": "MU"
      },
      {
        "label": "Mexico",
        "value": "MX"
      },
      {
        "label": "Moldova",
        "value": "MD"
      },
      {
        "label": "Monaco",
        "value": "MC"
      },
      {
        "label": "Mongolia",
        "value": "MN"
      },
      {
        "label": "Montenegro",
        "value": "ME"
      },
      {
        "label": "Morocco",
        "value": "MA"
      },
      {
        "label": "Mozambique",
        "value": "MZ"
      },
      {
        "label": "Myanmar",
        "value": "MM"
      },
      {
        "label": "Namibia",
        "value": "NA"
      },
      {
        "label": "Nepal",
        "value": "NP"
      },
      {
        "label": "Netherlands",
        "value": "NL"
      },
      {
        "label": "New Zealand",
        "value": "NZ"
      },
      {
        "label": "Nicaragua",
        "value": "NI"
      },
      {
        "label": "Niger",
        "value": "NE"
      },
      {
        "label": "Nigeria",
        "value": "NG"
      },
      {
        "label": "Norway",
        "value": "NO"
      },
      {
        "label": "Oman",
        "value": "OM"
      },
      {
        "label": "Pakistan",
        "value": "PK"
      },
      {
        "label": "Palestinian Territory",
        "value": "PS"
      },
      {
        "label": "Panama",
        "value": "PA"
      },
      {
        "label": "Papua New Guinea",
        "value": "PG"
      },
      {
        "label": "Paraguay",
        "value": "PY"
      },
      {
        "label": "Peru",
        "value": "PE"
      },
      {
        "label": "Philippines",
        "value": "PH"
      },
      {
        "label": "Poland",
        "value": "PL"
      },
      {
        "label": "Portugal",
        "value": "PT"
      },
      {
        "label": "Qatar",
        "value": "QA"
      },
      {
        "label": "Republic of Kosovo",
        "value": "XK"
      },
      {
        "label": "Romania",
        "value": "RO"
      },
      {
        "label": "Russian Federation",
        "value": "RU"
      },
      {
        "label": "Rwanda",
        "value": "RW"
      },
      {
        "label": "Saint Kitts and Nevis",
        "value": "KN"
      },
      {
        "label": "Saint Lucia",
        "value": "LC"
      },
      {
        "label": "Saint Vincent and Grenadines",
        "value": "VC"
      },
      {
        "label": "San Marino",
        "value": "SM"
      },
      {
        "label": "Sao Tome and Principe",
        "value": "ST"
      },
      {
        "label": "Saudi Arabia",
        "value": "SA"
      },
      {
        "label": "Senegal",
        "value": "SN"
      },
      {
        "label": "Serbia",
        "value": "RS"
      },
      {
        "label": "Seychelles",
        "value": "SC"
      },
      {
        "label": "Sierra Leone",
        "value": "SL"
      },
      {
        "label": "Singapore",
        "value": "SG"
      },
      {
        "label": "Slovakia",
        "value": "SK"
      },
      {
        "label": "Slovenia",
        "value": "SI"
      },
      {
        "label": "Somalia",
        "value": "SO"
      },
      {
        "label": "South Africa",
        "value": "ZA"
      },
      {
        "label": "South Sudan",
        "value": "SS"
      },
      {
        "label": "Spain",
        "value": "ES"
      },
      {
        "label": "Sri Lanka",
        "value": "LK"
      },
      {
        "label": "Sudan",
        "value": "SD"
      },
      {
        "label": "Suriname",
        "value": "SR"
      },
      {
        "label": "Swaziland",
        "value": "SZ"
      },
      {
        "label": "Sweden",
        "value": "SE"
      },
      {
        "label": "Switzerland",
        "value": "CH"
      },
      {
        "label": "Syrian Arab Republic (Syria)",
        "value": "SY"
      },
      {
        "label": "Taiwan, Republic of China",
        "value": "TW"
      },
      {
        "label": "Tajikistan",
        "value": "TJ"
      },
      {
        "label": "Tanzania, United Republic of",
        "value": "TZ"
      },
      {
        "label": "Thailand",
        "value": "TH"
      },
      {
        "label": "Timor-Leste",
        "value": "TL"
      },
      {
        "label": "Togo",
        "value": "TG"
      },
      {
        "label": "Trinidad and Tobago",
        "value": "TT"
      },
      {
        "label": "Tunisia",
        "value": "TN"
      },
      {
        "label": "Turkey",
        "value": "TR"
      },
      {
        "label": "Uganda",
        "value": "UG"
      },
      {
        "label": "Ukraine",
        "value": "UA"
      },
      {
        "label": "United Arab Emirates",
        "value": "AE"
      },
      {
        "label": "United Kingdom",
        "value": "GB"
      },
      {
        "label": "United States of America",
        "value": "US"
      },
      {
        "label": "Uruguay",
        "value": "UY"
      },
      {
        "label": "Uzbekistan",
        "value": "UZ"
      },
      {
        "label": "Venezuela (Bolivarian Republic)",
        "value": "VE"
      },
      {
        "label": "Viet Nam",
        "value": "VN"
      },
      {
        "label": "Western Sahara",
        "value": "EH"
      },
      {
        "label": "Yemen",
        "value": "YE"
      },
      {
        "label": "Zambia",
        "value": "ZM"
      },
      {
        "label": "Zimbabwe",
        "value": "ZW"
      }
    ];
    var elmGroupAge: any = this.state.nameAge.map((item: any, index: any) => {
      var name: any = "groupAge";
      var lblTenGroup = [
        "0 - 17",
        "18 - 44",
        "45 - 64",
        "65 - 74",
        "75 - 100",
        "100+",
      ];
      return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 group-input" key={index}>
          <input
            className={
              this.state.groupAge === item
                ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                : "list-group-item list-group-item-action itemNew"
            }
            type="button"
            value={lblTenGroup[index]}
            name={name.concat((index + 1).toString())}
            onClick={this.onHandleClickAge}
            id={index}
          />
        </div>
      );
    });

    var elmGroupSex: any = this.state.nameSex.map((item: any, index: any) => {
      var lblTenSex: any = ["Male", "Female"];
      return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 group-input" key={index}>
          <input
            className={
              this.state.groupSex === item
                ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                : "list-group-item list-group-item-action itemNew"
            }
            type="button"
            value={lblTenSex[index]}
            name={lblTenSex[index]}
            onClick={this.onHandleClickSex}
          />
        </div>
      );
    });

    var elmGroupCardiovascular :any = (
      <div className="switch-condition">
        <span className={this.renderClassUnCheckCondition(this.state.Cardiovascular)}>No</span> <Switch
              checked={this.state.Cardiovascular}
              onChange={() => this.handleChangeSwitchCardiovascular(this.state.Cardiovascular)}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            /> <span className={this.renderClassCheckCondition(this.state.Cardiovascular)}>Yes</span>
      </div>
    )

    var elmGroupDiabetes: any = (
      
      <div className="switch-condition">
        <span className={this.renderClassUnCheckCondition(this.state.Diabetes)}>No</span> <Switch
              checked={this.state.Diabetes}
              onChange={() => this.handleChangeSwitchDiabetes(this.state.Diabetes)}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <span className={this.renderClassCheckCondition(this.state.Diabetes)}>Yes</span>
      </div>
    )

    var elmGroupRespiratory: any = (
      <div className="switch-condition">
        <span className={this.renderClassUnCheckCondition(this.state.Respiratory)}>No</span> <Switch
              checked={this.state.Respiratory}
              onChange={() => this.handleChangeSwitchRespiratory(this.state.Respiratory)}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />  
            <span className={this.renderClassCheckCondition(this.state.Respiratory)}>Yes</span>
      </div>
    )

    var elmGroupHypertension: any = (
      <div className="switch-condition">
         <span className={this.renderClassUnCheckCondition(this.state.Hypertension)}>No</span> <Switch
              checked={this.state.Hypertension}
              onChange={() => this.handleChangeSwitchHypertension(this.state.Hypertension)}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <span className={this.renderClassCheckCondition(this.state.Hypertension)}>Yes</span>
      </div>
    )

    var elmGroupCancer: any =(
      <div className="switch-condition">
        <span className={this.renderClassUnCheckCondition(this.state.Cancer)}>No</span> <Switch
              checked={this.state.Cancer}
              onChange={() => this.handleChangeSwitchCancer(this.state.Cancer)}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            /> 
            <span className={this.renderClassCheckCondition(this.state.Cancer)}>Yes</span>
      </div>
    )

    function formatOptionLabel() {
      return Countries.map((item: any) => {
        var temp: any = 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/' + item.value.toLocaleLowerCase() + '.svg';

        return <div>
          <img src={temp} alt="Flag" width="50px" />
        </div>
      })
    }

    return (
      <div className="container">
        <div className="row form-parent">
          <form onSubmit={this.onHandleSubmit}>
            <div className="page">

              <div className="title-form">
                <p className="p-title">
                  <FontAwesomeIcon icon={faLungsVirus} /> COVID-19 Prognostic Tool
                </p>
                <p className="p-note">
                  <FontAwesomeIcon icon={faFlagCheckered} size="2x" /> Please answer all questions. The results will be computed once all questions are answered.
                </p>
              </div>

              <div className="col-12 group-survey country">
                <div>
                  <div className="col-12 lbl-tile-group">
                    <p><FontAwesomeIcon icon={faMapMarkedAlt} size="2x" /> Where are you from?</p>
                  </div>
                  <div className="content-survey-group">
                    {/* <select onChange={this.handleChange} value={this.state.CountryOption}>
                      {Countries.map(item => (
                        <option key={item.value} value={item.value}>
                            {renderFlagImage(item.value)}
                            {item.label}
                        </option>
                      ))}
                    </select> */}
                    {/* <FormControl className="SelectBoxCountry col-12">
                      <>
                        <InputLabel id="demo-simple-select-label">Choose your country...</InputLabel>
                        
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={this.state.CountryOption}
                          onChange={this.handleChange}
                        >
                          {Countries.map((item, index) => (
                            <MenuItem value={item.value} key={index} className="select-choose-country">
                              <img src={renderFlag(item.value)} alt="Flag" width="55px" height="40px"/>&nbsp; {item.label}
                            </MenuItem>
                          ))}

                        </Select>
                      </>
                    </FormControl> */}

                    <Select
                      className="select-country" 
                      defaultValue={Countries[0]}
                      options={Countries}
                      onChange={this.handleChange}
                    // formatOptionLabel={formatOptionLabel}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="col-12 lbl-tile-group">
                    <p className="age"><FontAwesomeIcon icon={faUserFriends} size="2x"/> Group Age?</p>
                  </div>
                  <div className="content-survey-group">
                    {elmGroupAge}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="col-12 lbl-tile-group">
                    <p className="sex"><FontAwesomeIcon icon={faRestroom} size="2x" /> Group Sex?</p>
                  </div>
                  <div className="content-survey-group">
                    {elmGroupSex}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="col-12 lbl-tile-group">
                    <p className="Cardiovascular"><FontAwesomeIcon icon={faHeartbeat} size="2x" /> Cardiovascular Disease?</p>
                  </div>
                  <div className="content-survey-group">
                    {elmGroupCardiovascular}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="col-12 lbl-tile-group">
                    <p><FontAwesomeIcon icon={faToilet} size="2x" /> Diabetes?</p>
                  </div>
                  <div className="content-survey-group">
                    {elmGroupDiabetes}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="col-12 lbl-tile-group">
                    <p><FontAwesomeIcon icon={faLungs} size="2x" /> Chronic Respiratory Disease?</p>
                  </div>
                  <div className="content-survey-group">
                    {elmGroupRespiratory}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="col-12 lbl-tile-group">
                    <p><FontAwesomeIcon icon={faStethoscope} size="2x" /> Hypertension?</p>
                  </div>
                  <div className="content-survey-group">
                    {elmGroupHypertension}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="col-12 lbl-tile-group">
                    <p><FontAwesomeIcon icon={faAllergies} size="2x" /> Cancer?</p>
                  </div>
                  <div className="content-survey-group">
                    {elmGroupCancer}
                  </div>
                </div>
              </div>

              <div className="box-btn-check">
                <button
                  type="submit"
                  className="btn btn-primary btn-check-cal"
                  onClick={this.onClick}
                >
                  Check
                    </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormCalculatorRate;
