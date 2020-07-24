import React from 'react';
import {connect} from 'react-redux';
import {addFeatures} from './action';
const AdditionalFeature = props => {
  console.log('here is additional',props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=>props.addFeatures(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state =>{
  return {
    additionalPrice:state.additionalPrice,
    car:state.car,
    additionalFeatures:state.additionalFeatures
  }
}
export default connect(
  mapStateToProps,
  { addFeatures }
)(AdditionalFeature);

