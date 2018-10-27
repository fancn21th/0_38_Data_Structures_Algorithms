const qsort = unsortedArray => {
  if (unsortedArray.length < 2) {
    return unsortedArray
  }
  const baseline = unsortedArray[0]
  const small = []
  const large = []
  for (let i = 1; i < unsortedArray.length; i++) {
    if (unsortedArray[i] < baseline) {
      small.push(unsortedArray[i])
    } else {
      large.push(unsortedArray[i])
    }
  }
  return [].concat(
    qsort(small),
    baseline,
    qsort(large)
  )
}

export default qsort
