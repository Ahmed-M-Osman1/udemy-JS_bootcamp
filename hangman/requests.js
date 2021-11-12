const getPuzzle = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", function (e) {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
        callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
        callback( "An Error has taken place.",undefined)
    }
  });

  request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=2");
  request.send();
};

const getPuzzleSync = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=2", false);
    request.send();

    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        return data.puzzle
        
      } else if (request.readyState === 4) {
        throw new Error( "An Error has taken place.")
      }
  };
  