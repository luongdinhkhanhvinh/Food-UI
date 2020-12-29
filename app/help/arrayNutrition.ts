const arrayNutrition = (data: any[]) => {
  let nutritions = [];
  for (let i = 0; i < data.length; i++) {
    nutritions.push({
      name: data[i].name,
      value: data[i].value,
      id: data[i].id,
    });
    if (data[i].details) {
      for (let j = 0; j < data[i].details.length; j++) {
        nutritions.push({
          name: data[i].details[j].name,
          value: data[i].details[j].value,
          isDetail: data[i].details[j].isDetail,
          id: data[i].details[j].id,
        });
      }
    }
  }
  console.log('nutritions', nutritions);
  return nutritions;
};

export default arrayNutrition;
