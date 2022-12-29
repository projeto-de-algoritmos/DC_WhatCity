function sortCity(a, b, key) {
  if (a[key] > b[key]) {
    return 1;
  } else if (b[key] > a[key]) {
    return -1;
  } else {
    return 1;
  }
}

function medianOfMedians(S, key) {
  const size = S.length;
  const tam = 5;
  const groups = [];
  const numGroups = Math.ceil(size/tam);
  for (let i = 0; i < numGroups; i++) {
    groups.push([]);
  }
  let groupIdx = 0;
  let count = 1;
  for (const obj of S) {
    if (count > 5) {
      groupIdx++;
      count = 1;
    }
    groups[groupIdx].push(obj);
    count++;
  }

  const mediaMArray = [];
  for (const group of groups) {
    group.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      } else if (b[key] > a[key]) {
        return -1;
      } else {
        return 1;
      }
    });
    const groupLength = group.length;
    mediaMArray.push(group[Math.ceil(groupLength/2)-1]);
  }

  const medianMlength = mediaMArray.length;
  if (medianMlength <= 5) {
    return mediaMArray[Math.ceil(medianMlength/2)-1];
  }
  return medianOfMedians(mediaMArray, key);
}

function partition(S, m, key) {
  let left = 0;
  let rigth = S.length - 1;
  let i = 0;

  while (i <= rigth) {
    if (S[i][key] == m[key]) {
      i++;
    }
    else if (S[i][key] < m[key]) {
      const aux = S[left];
      S[left] = S[i];
      S[i] = aux;
      left++;
      i++;
    }
    else {
      const aux = S[rigth];
      S[rigth] = S[i];
      S[i] = aux;
      rigth--;
    }
  }

  return left;
}

function kSmallest(S, k, key) {
  const m = medianOfMedians(S, key);
  const left = partition(S, m, key);

  if (left == k) {
    return m;
  }
  else if (left > k) {
    return kSmallest(S.slice(0, left), k, key);
  }
  else {
    return kSmallest(S.slice(left + 1, S.length), k - left - 1, key);
  }
}

export default kSmallest;