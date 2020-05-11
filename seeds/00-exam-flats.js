exports.seed = (knex) => {
  return knex('flats').insert([
    {
      title: 'Flat 1',
      price: 80000,
      floorArea: 40,
      country: 'Hungary',
      zip: 6720,
      city: 'Szeged',
      street: 'Gogol'
    },
    {
      title: 'Flat 2',
      price: 150000,
      floorArea: 55,
      country: 'Hungary',
      zip: 1132,
      city: 'Budapest',
      street: 'Visegradi'
    },
    {
      title: 'Flat 3',
      price: 300000,
      floorArea: 75,
      country: 'Hungary',
      zip: 6726,
      city: 'Szeged',
      street: 'Hargitai'
    }
  ]);
};
