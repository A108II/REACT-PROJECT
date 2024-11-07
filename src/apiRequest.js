const apiRequest = async (url, optionsObj, errMessage = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response) {
      throw Error('Could not handle the request, try again!');
    }
  } catch (err) {
    errMessage = err.message;
  }
  finally {
    return errMessage;
  }
}

export default apiRequest












































// const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
//   try {
//     const response = await fetch(url, optionsObj)
//     if(!response.ok) throw Error('Please reload the app');

//   } catch (err) {
//     errMsg = err.message;
//   }
//   finally {
//     return errMsg;
//   }
// }

// export default apiRequest;