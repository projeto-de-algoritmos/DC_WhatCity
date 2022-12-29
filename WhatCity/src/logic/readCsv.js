function readFile() {
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
          data.push(obj);
        }
      })
    })

  return data;
}

export default readFile;
