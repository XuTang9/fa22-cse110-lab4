let statistics ={
    redCars:21,
    bluecars:45,
    greenCars:12,
    raceCars:5,
    blackCars:40,
    rareCars:2
};
for (const key in statistics){
    console.log('$(key):${statistics[key]}');
}