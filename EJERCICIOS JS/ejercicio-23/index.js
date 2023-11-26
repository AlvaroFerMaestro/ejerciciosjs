const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  console.log("Esta pelicula dura menos de 100 minutos: ");  
  for (const time of movies) {
      if (time.durationInMinutes < 100) {
          console.log(time.durationInMinutes );
      }else(console.log("Esta pelicula no es menos de 100 "))
  }

  console.log("Esta pelicula es mediana");
  for (const time of movies) {
      if (time.durationInMinutes < 100 || time.durationInMinutes < 200) {
          console.log(time.durationInMinutes);
      }
  }

  console.log("Esta pelicula es grande");
  for (const time of movies) {
      if (time.durationInMinutes > 200) {
          console.log(time.durationInMinutes);
      }
  }