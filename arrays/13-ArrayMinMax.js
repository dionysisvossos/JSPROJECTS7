const ages = [20, 30 , 50 ,18 ,34]

function getMin(ages) {
    if (!ages) return

    let minVal = Math.min(...ages)
    let minPosition = ages.indexOf(minVal)

    return [minVal, minPosition]
}

function getMax(ages) {
    if (!ages) return

    let maxVal = Math.max(...ages)
    let maxPosition = ages.indexOf(maxVal)

    return [maxVal, maxPosition]
}

console.log(getMin(ages)) // [18, 3]
console.log(getMax(ages)) // [50, 2]