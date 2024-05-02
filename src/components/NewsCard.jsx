import React from "react";

function NewsCard({ allNewsData, loading }) {
  return (
    <div>
    {loading ?
      <div className='flex justify-center '>
        <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
      </div>
      :
      <div className='flex flex-wrap px-4 lg:px-10 '>
        {allNewsData.map((item, index) => {
         
          return (
            <div key={index} className="p-2 md:w-1/4 w-full">
              <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-200">
                <img className='rounded-lg w-full h-full mb-2' src={item.urlToImage} alt="" />
                <h2 className='text-xl text-white font-bold'>{item.title}</h2>
                <h2 className='text-lg text-white mb-2'>Year : {item.content}</h2>
              </div>
            </div>
          )
        })}
      </div>
    }
  </div>
    
     )
}

export default NewsCard;
