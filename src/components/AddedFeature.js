import React from 'react';
import {deleteFeatures} from './action';
import {connect} from 'react-redux';
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>props.deleteFeatures(props.feature)} className="button">X</button>
      {props.feature.name}
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
export default connect(mapStateToProps,{deleteFeatures})(AddedFeature);
