const User = {
  name: "Tiago",
  location: "Lagos"
};

console.log(User);

// allows mutation
const mutableUser = User;
mutableUser.location = "Lisboa";
mutableUser.name = "Miguel";
console.log(mutableUser);

//immutable object
const newUser = (name, location) => {
  return {
    name: name,
    location: location,
  };
};

const immutableUser = Object.freeze(newUser("Luis", "Porto"));
console.log(immutableUser);
