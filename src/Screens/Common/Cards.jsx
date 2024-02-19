import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
export default function Cards() {
  const images = [
    'https://i.pinimg.com/564x/8f/ec/d1/8fecd191e720d539f4654754f7ebfa9f.jpg',
    'https://i.pinimg.com/564x/fb/4f/c9/fb4fc9035dac89d721a4df102d0f9638.jpg',
    'https://i.pinimg.com/564x/f9/7b/2c/f97b2cc6031afd6756652702c6fd8a4f.jpg',
    'https://i.pinimg.com/236x/15/2d/91/152d910c18c3373ba369aa5266f6f62b.jpg',
    'https://i.pinimg.com/736x/1f/14/47/1f14476e2d8c36f0c7d1e388e68fbde3.jpg',
  ];
  const products = [
    {
      id: 1,
      name: 'Solid brass cabinet',
      href: '#',
      imageSrc: " https://www.mobelhomestore.com/cdn/shop/files/Untitled_design_c4e9bc56-67e6-426b-af38-58bf94a49ef2.jpg?v=1670843886",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Nickel cabinet pull ',
      href: '#',
      imageSrc: "https://d2dwxeidp9b9gl.cloudfront.net/images/products/169200833856802.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Brass cabinet pull',
      href: '#',
      imageSrc: "https://static.asianpaints.com/content/dam/asian_paints/resources/aphomes-categorypage/furniture/ap-homes-usage-furniture-living-room-asian-paints.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Wooden bed',
      href: '#',
      imageSrc: "https://imgmedia.lbb.in/media/2022/05/62736afa42d07e2c4a83ea34_1651731194487.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }, {
      id: 5,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtEV_BTV53q_pwsbgsl79Nk1b7a1522t_6g&usqp=CAU",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }
    , {
      id: 6,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/52/66/40/52664088bb364f0b2ff731cdb88eedee.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }
    , {
      id: 7,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/a0/ed/b0/a0edb091eccb6084362613756cc06203.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }
    , {
      id: 8,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/94/0e/cb/940ecb862d684587726ef15db97b8e8b.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }

  ]
  return (
    <div className=' font-Raleway flex flex-col justify-center items-center'>
      <h3 className="text-left m-10 text-3xl	">
        Shop By Category
      </h3>
      <div className='flex justify-evenly w-[95%]'>
        {images.map((image, index) => (
          <img
            src={image}
            className="h-[100px] rounded-full w-[100px] mx-6 "
            alt="FURNITURE"
            title='FURNITURE'
          />

        ))}
      </div>
      <h3 className="text-left m-10 text-3xl	">
        Our Spotlight
      </h3>
      <div className='flex flex-row justify-between w-[85%] '>

        <Card
          shadow={false}
          className='w-[30%] h-[35rem]'
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/e3/1b/bc/e31bbcd2a4b103eea8c64fe05ea14f9c.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-Raleway leading-[1.5]"
            >
              Our fully furshined  dressing table with lights
            </Typography>
            <Typography variant="h5" className="mb-4 font-Raleway text-gray-400">
              Bedroom
            </Typography>
          </CardBody>
        </Card>
        <Card
          shadow={false}
          className='w-[30%] h-[35rem]'
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/e3/1b/bc/e31bbcd2a4b103eea8c64fe05ea14f9c.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-Raleway leading-[1.5]"
            >
              Our fully furshined  dressing table with lights
            </Typography>
            <Typography variant="h5" className="mb-4 font-Raleway text-gray-400">
              Bedroom
            </Typography>
          </CardBody>
        </Card>
        <Card
          shadow={false}
          className='w-[30%] h-[35rem]'
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/e3/1b/bc/e31bbcd2a4b103eea8c64fe05ea14f9c.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-Raleway leading-[1.5]"
            >
              Our fully furshined  dressing table with lights
            </Typography>
            <Typography variant="h5" className="mb-4 font-Raleway text-gray-400">
              Bedroom
            </Typography>
          </CardBody>
        </Card>
      </div>
      <h3 className="text-left m-10 text-3xl	">
        Best Sellers
      </h3>
      <div className="flex flex-wrap w-[88%] gap-5 justify-evenly items-start">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-150 overflow-hidden  rounded-md bg-gray-200 lg:aspect-none  group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-100 object-cover object-center lg:h-full lg:w-full"
              />

              <button className="bg-orange text-gray-700"> Shop Now</button>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a className=' text-2xl font-semibold text-gray-900 dark:text-white' href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-m font-medium text-black-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}