import React, { Component } from 'react';
import './TeaCard.module.css';
import Overview from '../data/overview';

class App extends Component {
  gramsTsp(_object) {
    return <span>{_object[0]} g ({_object[1]} tsp) </span>
  }
  addCommasToArray(_object) {
    if (_object.constructor.name === "Array") {
      if (_object.length === 2) {
        return _object.join(' and ')
      } else {
      return _object.join(', ')
    }
    } else {
      return _object
    }
  }
  addSpacesToArray(_object) {
    if (_object.constructor.name === "Array") {
      return _object.join(' ')
    } else {
      return _object
    }
  }
  handleSeconds(time) {
    return <p>{Math.floor(time/60)} minutes {time%60 !== 0 ? <span>and {time%60} seconds</span> : <span></span>}</p>
    
  }
  steepingTimes(_object) {
    if (_object.constructor.name === "Array") {
      return _object.map((x,i) => <span>Steep {i+1}: {this.handleSeconds(x)} </span>)
    } else {
      return _object
    }
  }
  render() {
    return (
      <div className="App">
        {Overview.serving.teas.map((x, i) => <section className="teaCard">
          <div className="topContainer">
            <div className="nameContainer">
              <h1 className="english">{x.name.english}</h1>
              <span className="description">{x.overview.description}</span>
              <p className="langTitle">Chinese:</p>
              <p className="langLg">{x.name.chinese}
                <span className="langSm"> ({x.name.pinyin})</span>
              </p>
              <p className="langTitle">Japanese: </p>
              <p className="langLg">{x.name.japanese}
                <span className="langSm"> ({x.name.romanji})</span>
              </p>
            </div>
            <div className="overviewContainer">
              <div className="imageContainer">
                  <p className="teaStyle">{this.addSpacesToArray(x.overview.teaStyle)} Tea</p>
                  <img className="image" src={x.overview.image[0]} alt={x.overview.image[1]} />
              </div>
            </div>
            <div className="brewingContainer">
              <p className="withEquipment">Using a {this.addCommasToArray(x.brewing.withEquipment)}. </p>
              <p className="brewingTempF">{x.brewing.brewingTempF[0]} °F to {x.brewing.brewingTempF[1]} °F water. </p>
              <p>
                <span className="waterMl">Pour {x.brewing.waterMl} ml of </span>
                <span className="servingSizeGramsTsp">{this.gramsTsp(x.brewing.servingSizeGramsTsp)} of dry leaf. </span>
              </p>
              <p className="numberOfBrews">Steep {x.brewing.numberOfBrews} times. </p>
              <p className="brewingTimesSeconds">{this.steepingTimes(x.brewing.brewingTimesSeconds)}</p>
            </div>
          </div>
          <div className="historyContainer">
            <div className="datesContainer">
              <p className="firstDate">firstDate: {x.overview.firstDate}</p>
              <p className="firstLocation">firstLocation: {x.overview.firstLocation}</p>
              <p className="dates">dates: {x.overview.dates}</p>
            </div>
            <div className="factsContainer">
              <p className="facts">facts: {x.overview.facts}</p>
            </div>
          </div>
        </section>
        )}
      </div>
    );
  }
}

export default App;