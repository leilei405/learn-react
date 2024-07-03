// 1.手动实现
function deepClone(obj, clonedMap = new WeakMap()) {
  if (clonedMap.has(obj)) {
    return clonedMap.get(obj);
  }

  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  clonedMap.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], clonedMap);
    }
  }

  return clone;
}

// 2. lodash 中cloneDeep方法