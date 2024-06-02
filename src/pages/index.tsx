import React from 'react';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <section className='bg-primaryColor w-full p-4 flex flex-col justify-center items-center text-secondaryColor text-4xl font-semibold'>
        <h1 className=''>Mission</h1>
        <p className='mt-2'>First paragraph of the mission.</p>
        <p className='mt-2'>Second paragraph of the mission.</p>
        <p className='mt-2'>Third paragraph of the mission.</p>
      </section>
      <section className='flex  items-center justify-center space-y-2'>
        <div>
        <img src='path_to_your_image.jpg' alt='Description of the image' className='w-full h-64 object-cover' />
        <figcaption className='text-center'>Caption for the image</figcaption>
        </div>

        <div>
        <h2 className='text-xl font-bold'>About</h2>
        <p>Paragraph about the topic.</p>
        </div>

      </section>
    </div>
  );
};

export default Home;