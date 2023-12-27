// App.js
import React from 'react';
import Card from './Card'; 
const App = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: 'https://thumbs.dreamstime.com/b/wheat-field-8367117.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph',
    },
    {
        title: 'Card 3',
        description: 'Description for Card 3',
        imageUrl: 'https://media.istockphoto.com/id/1130886271/photo/sunset-landscape-with-plain-and-forest.jpg?s=612x612&w=0&k=20&c=LX-rDXvoip76_GlG5f4CpREI3gRJl2u8CeQZzDnPkFA=',
      },
      {
        title: 'Card 4',
        description: 'Description for Card 4',
        imageUrl: 'https://thumbs.dreamstime.com/b/beauty-rosy-clouds-grass-sky-56020942.jpg',
      },
      {
        title: 'Card 5',
        description: 'Description for Card 4',
        imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww',
      },
      {
        title: 'Card 6',
        description: 'Description for Card 4',
        imageUrl: 'https://images.pexels.com/photos/15006072/pexels-photo-15006072/free-photo-of-view-of-pic-du-midi-d-ossau-mountain-in-france.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://thumbs.dreamstime.com/b/beauty-rosy-clouds-grass-sky-56020942.jpg',
      },
   
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
