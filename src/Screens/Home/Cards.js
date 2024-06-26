import { Button } from '@material-tailwind/react';
import React from 'react';
import { TERipple } from 'tw-elements-react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
export default function Cards() {
  const navigate = useNavigate();
  const handleOpen = (e) => {
    e.preventDefault()
    navigate("/Products")
  };
  const images = [
    'https://i.pinimg.com/564x/8f/ec/d1/8fecd191e720d539f4654754f7ebfa9f.jpg',
    'https://i.pinimg.com/564x/fb/4f/c9/fb4fc9035dac89d721a4df102d0f9638.jpg',
    'https://i.pinimg.com/564x/f9/7b/2c/f97b2cc6031afd6756652702c6fd8a4f.jpg',
    'https://i.pinimg.com/236x/15/2d/91/152d910c18c3373ba369aa5266f6f62b.jpg',
    'https://i.pinimg.com/736x/1f/14/47/1f14476e2d8c36f0c7d1e388e68fbde3.jpg',
  ];
  return (
    <div>
      <h3 className="text-left m-10 font-sans text-5xl	">
        Shop By Category
      </h3>
      <div className='flex flex-row'>
        {images.map((image, index) => (

          <img onClick={handleOpen}
            src={image}
            className="h-60 rounded-lg w-60 m-6 "
            alt="FURNITURE"
            title='FURNITURE'
          />

        ))}
        <h2> cabinet</h2>
      </div>
      <Typography
        variant="h1"
        color="black"
        className="mb-6  m-10 font-medium leading-[1.5]"
      > Our Spotlight </Typography>
      <div className='flex flex-row'>

        <Card
          shadow={false}
          className="relative grid h-[40rem] w-70  m-10 max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/e3/1b/bc/e31bbcd2a4b103eea8c64fe05ea14f9c.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-[#df633a]-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Our fully furshined  dressing table with lights
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Bedroom
            </Typography>
          </CardBody>
        </Card>
        <Card
          shadow={false}
          className="relative grid h-[40rem] w-70  m-10 max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/12/cf/8c/12cf8c592289dbe297affdf5947c3849.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-[#df633a]-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Our Lavish decorated Living Room with comfort
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Living Room
            </Typography>
          </CardBody>
        </Card>
        <Card
          shadow={false}
          className="relative grid h-[40rem] w-70  m-10 max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/66/dc/90/66dc903c6a8daa37f8514185bdd7e844.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-[#df633a]-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Feeling Fresh Entrance with  good plants decore
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Entrance
            </Typography>
          </CardBody>
        </Card>

      </div>
    </div>
  );
}
