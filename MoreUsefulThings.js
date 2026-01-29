const mySet = new Set([1, 1, 2, 3]); // {1, 2, 3}

const myMap = new Map();
myMap.set('id', 1);
myMap.set(true, 'is_active'); // Boolean key!



const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source); // target is now {a: 1, b: 2}



const user = {
    name: "Bharat",
    // address is missing
};

// Instead of crashing, it returns undefined
console.log(user?.address?.city);