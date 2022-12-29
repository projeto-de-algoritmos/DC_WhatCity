function sortCity(a, b) {
  if (a.population > b.population) {
    return 1;
  } else if (b.population > a.population) {
    return -1;
  } else {
    return 1;
  }
}

function medianOfMedians(S) {
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
    group.sort(sortCity);
    const groupLength = group.length;
    mediaMArray.push(group[Math.ceil(groupLength/2)-1]);
  }

  const medianMlength = mediaMArray.length;
  if (medianMlength <= 5) {
    return mediaMArray[Math.ceil(medianMlength/2)-1];
  }

  medianOfMedians(mediaMArray);
}

function partition(S, m) {
  let left = 0;
  let rigth = S.length - 1;
  let i = 0;

  while (i <= rigth) {
    if (S[i].population == m.population) {
      i++;
    }
    else if (S[i].population < m.population) {
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

function kSmallest(S, k) {
  const m = medianOfMedians(S);
  const left = partition(S, m);

  if (left == k) {
    return m;
  }
  else if (left > k) {
    return kSmallest(S.slice(0, left), k);
  }
  else {
    return kSmallest(S.slice(left + 1, S.length), k - left - 1);
  }
}

export default kSmallest;