'use client'
import React, { useState } from 'react';

export const AlimentoCrear = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div className="absolute w-[589px] h-[373px] top-[163px] left-[425px] bg-[#f3f6f6] rounded-[40px] shadow-md">
        <button>
          <input className="absolute w-[400px] h-[72px] top-[151px] left-[100px]" type="file" id="archivo" name="archivo" accept=".png, .jpg, .jpeg"></input>
        </button>
      </div>

      <div className="absolute top-[250px] left-[1050px] width-[300px] hight-[100px] space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleRadioChange}
            className="form-radio text-blue-500"
          />
          <span className="text-gray-700">Pan</span>
        </label>
        <br />
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleRadioChange}
            className="form-radio text-blue-500"
          />
          <span className="text-gray-700">Lechuga</span>
        </label>
        <br />
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleRadioChange}
            className="form-radio text-blue-500"
          />
          <span className="text-gray-700">Jitomate</span>
        </label>
        <br />
        <button
          className="absolute width-[300px] bg-[#25a18ee6] text-white px-4 py-2 rounded-md">
          Crear nuevo ingrediente
        </button>
      </div>

      

      <input
        type="text"
        className="border-t-0 border-l-0 border-r-0 absolute w-[476px] top-[50px] left-[489px] font-nunito font-medium text-black text-[58px] text-center leading-normal tracking-normal whitespace-nowrap border-transparent outline-none"
        placeholder="Nuevo alimento"
      />

        <input type="text" className="border-t-0 border-l-0 border-r-0 absolute w-[476px] top-[50px] left-[489px] font-nunito font-medium text-black text-[58px] text-center leading-normal tracking-normal whitespace-nowrap border-transparent outline-none" placeholder="Nuevo alimento" />
        <div className="absolute w-[148px] top-[737px] left-[138px] font-nunito font-medium text-black text-[48px] text-center leading-normal tracking-normal">Precio:</div>
        <div className="absolute w-[1122px] h-[126px] top-[565px] left-[92px]">
          <div className="absolute w-[358px] top-[6px] left-0 font-nunito font-medium text-black text-[48px] text-center leading-normal tracking-normal">Descripción:</div>
          <textarea className="absolute w-[789px] h-[126px] top-0 left-[333px] bg-white rounded-[20px] border border-black resize-none font-nunito pl-2 pr-2 pt-1 text-[24px]"></textarea>
        </div>
        <div className="absolute w-[175px] h-[80px] top-[737px] left-[309px]">
          <div className="absolute w-[175px] top-0 left-0 font-nunito font-bold text-black text-[48px] leading-normal tracking-normal">$</div>
          <input type="number" className="w-[49px] top-[16px] left-[39px] absolute h-[40px] border-t-0 border-l-0 border-r-0 text-[30px] text-center" src="img/crear-alimento/line-4.png" />
          <img className="top-[14px] left-[97px] absolute w-[44px] h-[42px]" src="img/crear-alimento/bxs-edit-alt-2.png" alt="Edit" />
        </div>

        <img className="top-[89px] left-[984px] absolute w-[44px] h-[42px]" src="img/crear-alimento/bxs-edit-alt-3.png" alt="Edit Alt" />
        <img className="w-[480px] top-[126px] left-[484px] absolute h-[2px]" src="img/crear-alimento/line-5.png" alt="Line" />
        <img className="top-[572px] left-[1234px] absolute w-[44px] h-[42px]" src="img/crear-alimento/bxs-edit-alt-3.png" alt="Edit Alt" />
    </>
  )
}

export default AlimentoCrear