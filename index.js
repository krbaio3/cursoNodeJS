const maxTime = 2000;

const oneWordToUpper = (value, callback) => {
  const time = Math.floor((Math.random() * maxTime) + 1);
  let error = null;
  let result = null;

  setTimeout(() => {
    const splited = value.split(' ');
    console.log(splited);
    if (splited.length > 1) {
      error = {
        message: 'More then one world'
      };
    } else {
      result = value.toUpperCase();
      error = null;
    }
    // if (!!error) {
    //   console.error(`error ${error.message}`);
    // } else {
    //   console.log(`the word in upper: ${result}, the elapsed time: ${time} ms`);
    // }
    callback(error, result, time);
  }, time);
};

const handleResults = (error, result, time) =>  {
  if (!!error) {
    console.error(`error ${error.message}`);
  } else {
    console.log(`the word in upper: ${result}, the elapsed time: ${time} ms`);
  }
}

const values = ['nasdan', 'jaimesalas', 'daniel sanchez', 'jaime salas'];

values.forEach((value) => oneWordToUpper(value, handleResults));
