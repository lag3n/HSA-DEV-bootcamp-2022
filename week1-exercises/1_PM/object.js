const assert = require('assert')

/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any fealsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: Get the truthiness of a value by using a double bang (!!),
 *    or the untruthiness using a single bang (!)
 */

/**
 * This works too!
 * 
 * --------------------------------------------------
 * 
 * const hasFalsyValue = obj => {
    const values = Object.values(obj);
    let bool = false;
    for (let i = 0; i < values.length; i++)
    {
      if (typeof values[i] == 'object')
      {
        bool = hasFalsyValue(values[i]);
      } 
      else if (values[i] == false)
      {
        bool = true;
      }
    }
    return bool;
  };
 */

const hasFalsyValue = obj => 
  {
    const values = Object.values(obj);
    let bool = false;
    values.forEach
    ((val) => 
    {
        if (typeof val == 'object')
        {
            bool = hasFalsyValue(val);
        }
        else if (val == false)
        {
            bool = true;
        }
    }
    )
   return bool;
    };


  const falsyObj = {
    hi: "I am falsy somewhere...",
    "i'm an number": 23,
    "i'm a boolean": true,
    "i'm an object": {
      aint: 'nuthin to look at here...',
      keeplooking: {
        oops: 0
      }
    }
  };
  
  const truthyObj = {
    truthy: true,
    stillTruthy: -1,
    yup: "this is truthy",
    anotherOne: {
      anotherTruthy: ";)"
    }
  };
  

assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(truthyObj) === false);
  