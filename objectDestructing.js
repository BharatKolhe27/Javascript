const user = { id: 1, age: 22, city: "Indore" };
const { id, ...others } = user; // others = { age: 22, city: "Indore" }