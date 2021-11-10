const User = {
  name: "Tiago",
  location: "Lagos"
};

const newUser = (name, location) => {
  return {
    name: name,
    location: location,
  };
};

console.log(User);

// allows mutation
const mutableUser = newUser("Pedro", "Lisboa");
console.log(mutableUser);

mutableUser.location = "Lisboa";
mutableUser.name = "Miguel";
console.log(mutableUser);

// doesn't allow mutation
const immutableUser = Object.freeze(newUser("Luis", "Porto"));
console.log(immutableUser);

immutableUser.name = "Jorge";
immutableUser.location = "Algarve";
console.log(immutableUser);