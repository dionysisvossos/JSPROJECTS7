const obj = {id: 1, firstname: "Alice"}

// Add properties

// Modify the object
obj.lastname = "W."
console.log(obj)

// Immutable - fresh copy
const addToObj = (obj, field, value) =>({...obj, [field]: value})
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy)

// Update the object

// Modifies / Updates the object
obj.firstname = "Dennis"
console.log(obj)

// immutable - fresh copy
const updateObj = (obj, field,newVal) => ({...obj, [field]: newVal})
const updatedObj = updateObj(obj, "firstname", "Dennis")
console.log(updatedObj)

// Delete a property of an object

// Immutable delete
const deleteIdFromObj = (obj, field) => {
    const {[field]: _, ...objToReturn} = obj
    return objToReturn
}
const objFromDelete = deleteIdFromObj(obj, "id")
console.log(objFromDelete)