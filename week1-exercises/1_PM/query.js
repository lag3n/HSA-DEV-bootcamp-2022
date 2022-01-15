const assert = require('assert')

const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.

/**
 * This works too!
 * 
 * const usersByPet = pet => {
  let users = database.users;
  let res = [];
  for (let i = 0; i < users.length; i++)
  {
    if (users[i].favPet === pet)
    {
      res.push(users[i]);
    }
  }
  return res;
}
 */

const usersByPet = pet => {
  let res = [];
  database.users.forEach((elt) => {
    if (elt.favPet === pet)
    {
      res.push(elt);
    }
  });
  return res;
}

console.log(usersByPet('dog'))
console.log(usersByPet('cat'))
assert(usersByPet('dog').length === 3)
assert(usersByPet('cat').length === 3)


// Implement the function collegeLookup to return the name and color of a user's college.

/**
 * This works too!
 * 
 * const collegeLookup = user => {
  let users = database.users;
  let colleges = database.college;
  for (let i = 0; i < users.length; i++)
  {
    if (users[i].firstName === user)
    {
      for (let j = 0; j < colleges.length; j++)
      {
        if (users[i].collegeId === colleges[j].id)
        {
          return [colleges[j].name, colleges[j].color];
        }
      }
      break;
    }
  }
}
 */

const collegeLookup = user => {
  let res = [];
  database.users.forEach(elt => {
    if (elt.firstName === user)
    {
      database.college.forEach(col => {
        if (elt.collegeId === col.id)
        {
          res = [col.name, col.color];
        }
      });
    }
  });
  return res;
}

console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.

/**
 * This works too!
 * 
 * const oppositesAttract = (function() {
  let users = database.users;
  let friends = database.friends;
  let res = [];
  let user1, user2;
  for (let i = 0; i < friends.length; i++)
  {
    for (let j = 0; j < users.length; j++)
    {
      if (users[j].id === friends[i].id1)
      {
        user1 = users[j];
      } 
      else if (users[j].id === friends[i].id2)
      {
        user2 = users[j];
      }
    }
    if (user1.favPet !== user2.favPet)
    {
      res.push(friends[i]);
    }
  }
  return res;
})();
 */

const oppositesAttract = (function() {
  let res = [];
  let user1, user2;
  database.friends.forEach(f => {
    database.users.forEach(elt => {
      if (elt.id === f.id1)
      {
        user1 = elt;
      } 
      else if (elt.id === f.id2)
      {
        user2 = elt;
      }
    });
    if (user1.favPet !== user2.favPet)
    {
      res.push(f);
    }
  });
  return res;
})();

console.log(oppositesAttract)
assert(oppositesAttract.length === 5)

// define local as a list of users who live in the same state as they go to school.
const local = (function() {
  let users = database.users;
  let colleges = database.college;
  let res = [];
  for (let i = 0; i < colleges.length; i++)
  {
    for (let j = 0; j < users.length; j++)
    {
      if (users[j].collegeId === colleges[i].id && users[j].state === colleges[i].state)
      {
        res.push(users[j]);
      } 
    }
  }
  return res;
})();

console.log(local)
assert(local.length === 4);

// define collegeFriends as a list of friend objects that go to the same college

/**
 * This works too!
 * 
 * const collegeFriends = (function() {
  let users = database.users;
  let friends = database.friends;
  let res = [];
  let user1, user2;
  for (let i = 0; i < friends.length; i++)
  {
    for (let j = 0; j < users.length; j++)
    {
      if (users[j].id === friends[i].id1)
      {
        user1 = users[j];
      } 
      else if (users[j].id === friends[i].id2)
      {
        user2 = users[j];
      }
    }
    if (user1.collegeId === user2.collegeId)
    {
      res.push(friends[i]);
    }
  }
  return res;
})();
 */

const collegeFriends = (function() {
  let res = [];
  let user1, user2;
  database.friends.forEach(f => {
    database.users.forEach(elt => {
      if (elt.id === f.id1)
      {
        user1 = elt;
      }
      else if (elt.id === f.id2)
      {
        user2 = elt;
      }
    });
    if (user1.collegeId === user2.collegeId)
    {
      res.push(f);
    }
  });
  return res;
})();

console.log(collegeFriends)
assert(collegeFriends.length === 2)