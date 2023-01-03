async function readFile() {
  let header = []
  const data = []
  fetch('./worldcities.csv')
    .then(response => response.text())
    .then(buffer => {
      buffer.split('\r\n').forEach((line, index) => {
        if (index == 0) {
          header = line.split(',').map(el => el.slice(1, -1))
        }
        else {
          let lineData = line.split(',')
          const obj = {}
          lineData.forEach((el, index) => {
            obj[header[index]] = el.slice(1, -1);
          })
          if (!["", null, undefined, "0"].includes(obj.population) && !isNaN(obj.population)) {
            obj.population = Number(obj.population);
            data.push(obj);
          }
        }
      })
    })

  return data;
}

export default readFile;
