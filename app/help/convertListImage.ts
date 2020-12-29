const convertListImage = (data: any[]) => {
  const max = data.length > 4 ? 4 : data.length;
  let images = [];
  const numImagesMore = data.length - 4;

  for (let i = 0; i < max; i++) {
    images.push(data[i]);
  }
  return {
    images: images,
    numImagesMore: numImagesMore,
  };
};
export default convertListImage;
