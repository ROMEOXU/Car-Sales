export function addFeatures(itemAdd) {
    return {
      type: "ADD",
      payload:itemAdd
    };
  };


  export function deleteFeatures (itemDelete) {
    return {
      type:"DELETE",
      payload:itemDelete
    }
  }
  