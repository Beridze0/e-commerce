
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("quantities");
      if (serializedState === null) {
        return undefined;
      }
      return { quantity: { quantities: JSON.parse(serializedState) } }; // Load quantities from localStorage
    } catch (err) {
        console.log(err);
        return undefined;
    }
  };
  
  export const saveState = (quantities) => {
    try {
      const serializedState = JSON.stringify(quantities);
      localStorage.setItem("quantities", serializedState);
    } catch (err) {
      console.error("Could not save state", err);
    }
  };
  