export const getGenres = (genres) => {
  let genreTags = "";

  for (let i in genres) {
    genreTags += `${genres[i].name}, `
  }
  return genreTags.replace(/,\s*$/, "");
}
 