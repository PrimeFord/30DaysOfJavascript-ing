const catsAPI = "https://api.thecatapi.com/v1/breeds";

//1. Print out all the cat names in to catNames variable.
const fetchData = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    // console.log(cats);
    let cat = JSON.parse(cats);
    for (const c of cat) {
      let catName = c.name;
      console.log(catName);
    }
  } catch (err) {
    console.error(err);
  }
};
fetchData();
