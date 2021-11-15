const newUser = (name, location) => {
  return {
    name: name,
    location: location,
  };
};

// allows mutation
const mutableUser = newUser("Pedro", "Lisboa");
console.log(mutableUser); // { name: 'Pedro', location: 'Lisboa' }

mutableUser.location = "Lisboa";
mutableUser.name = "Miguel";
console.log(mutableUser); // { name: 'Miguel', location: 'Lisboa' }

// doesn't allow mutation
const immutableUser = Object.freeze(newUser("Luis", "Porto"));
console.log(immutableUser); // { name: 'Luis', location: 'Porto' }

immutableUser.name = "Jorge";
immutableUser.location = "Algarve";
console.log(immutableUser); // { name: 'Luis', location: 'Porto' }