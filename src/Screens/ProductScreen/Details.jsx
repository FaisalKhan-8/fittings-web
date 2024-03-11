import React, { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { GetProduct } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';

const Details = () => {
  let id = useLocation()
  id = id.pathname.split("/").pop();
  const dispatch = useDispatch()
  const role = useSelector(state => state.Reducers.role)
  const cart = useSelector(state => state.Reducers.cart)
  console.log(cart);
  const [data, setData] = React.useState(null)
  const [currentSize, setCurrentSize] = React.useState(0)
  const [currentFinish, setCurrentFinish] = React.useState(0)
  const [currentImage, setCurrentImage] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [mainImage, setMainImage] = useState(null);

  React.useEffect(() => {
    dispatch(GetProduct(id, role, setData, setLoading))
    setMainImage(data?.product_images[currentFinish]?.images[0].image)
    setCount(data?.size_chart[currentSize]?.price_map[0]?.minimum_order_quantity)
  }, [])
  const TABLE_HEAD = ["Product details", "", "", ""];
  const handleSidebarImageClick = (image) => {
    setMainImage(image.image);
  };
  if (loading) {
    return (
      <div className='h-screen w-screen'>
        <Oval
          visible={true}
          height="40"
          width="40"
          color="#000"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />

      </div>
    )
  }
  else {
    return (
      <div className='mt-[180px] font-Raleway transition-all'>
        <div className="flex justify-evenly items-start ">
          <div className="w-20 h-50 m-5">
            {
              loading ?
                null :
                data?.product_images[currentFinish]?.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image.image}
                    alt={`prod_img ${index + 1}`}
                    onClick={() => {
                      handleSidebarImageClick(image)
                      setCurrentImage(index)
                    }}
                    className={`w-50 mb-5 bg-[#df633a]  cursor-pointer ${mainImage === image.image ? "border-2 border-gray-200" : ""
                      }`}
                  />
                ))}
          </div>
          <div className="w-[40%]">
            <img src={data?.product_images[currentFinish]?.images[currentImage].image} alt="Product" className="w-100 m-5" />
          </div>

          <div className="w-[40%] space-y-5 mt-5 ">
            <h2 className="text-3xl text-[#df633a]  mb-4">{data?.product_name}</h2>
            <div className="">
              <p className="text-black text-xl mb-2">Price:</p>
              <p
                className="text-left font-Raleway  text-2xl w-full text-[#df633a]">
                ₹{Math.round(parseInt(data?.size_chart[currentSize]?.price_map[0]?.price_with_gst) - parseInt(data?.size_chart[currentSize]?.price_map[0]?.price_with_gst) * (parseInt(data?.size_chart[currentSize]?.price_map[0]?.gst_percent) / 100))} without GST
              </p>
              <p
                className="text-left font-Raleway  text-base w-full">
                ₹{data?.size_chart[currentSize]?.price_map[0]?.price_with_gst} with GST
              </p>
            </div>
            <p className="text-gray-700 mb-2">
              Description: {data?.description}
            </p>
            <div className='flex space-x-2'>
              {data?.product_images?.map((des, index) => (
                <button
                  key={index}
                  onClick={(e) => { setCurrentFinish(index) }}
                  className={`box-border border-gray-200 border-2 ${currentFinish === index ? "bg-[#df633a] text-white" : " bg-white  text-black"}  px-4 py-1 `}>
                  <p className='text-center'>{des?.finish?.title}</p>
                </button>
              ))}
            </div>
            <div className='flex space-x-2'>
              {data?.size_chart?.map((des, index) => {
                if (data?.product_images[currentFinish]?.finish?.id === des?.finish) {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSize(index)
                      }}
                      className={`box-border border-gray-200 border-2 ${currentSize === index ? "bg-[#df633a] text-white" : " bg-white  text-black"}  px-4 py-1 `}>
                      <p>{des?.size}</p>
                    </button>
                  )
                }
              })
              }
            </div>

            <div className=' space-x-3 flex text-sm'>
              <button
              className='bg-[#df633a] h-[20px] w-[20px] text-white rounded-full flex justify-center items-center'
              >
                -
              </button>
              <p
              className='font-bold'
              >
                {count}
              </p>
              <button
              onClick={()=>{
                setCount(count+data?.size_chart[currentSize]?.price_map[0]?.minimum_order_quantity)
              }}
              className='bg-[#df633a] h-[20px] w-[20px] text-white rounded-full flex justify-center items-center'
              >
                +
              </button>
            </div>

            <div className=' space-x-3'>
              <button
                className=" font-Raleway justify-center  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm leading-6 text-white shadow-sm "
              >
                Buy Now
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: data?.id,
                      name: data?.product_name,
                      price: data?.size_chart[currentSize],
                      finish: data?.product_images[currentFinish]
                    }
                  })
                }}
                className=" font-Raleway justify-center  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm "
              >
                Add to Cart
              </button>
            </div>

            <Card className="h-full w-full shadow-none font-Raleway ">
              <table className="w-full min-w-max  border-2 table-auto text-left mb-5">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal font-Raleway leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.product_details?.map(({ name, value, date }, index) => (
                    <tr key={name} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-Raleway"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-Raleway"
                        >
                          {value}
                        </Typography>
                      </td>
                      <td className="p-2">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-Raleway"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className="p-4"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;