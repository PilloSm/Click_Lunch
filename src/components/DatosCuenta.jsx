const DatosCuenta = ({id_cuenta, usuarios, correo,saldo}) => {
  return (
    <>
      <div className="absolute w-[219px] top-[211px] left-[523px] font-poppins font-normal text-[#09090999] text-[16px] leading-[24px] tracking-[0.15px]">
        Numero de cuenta
      </div>
      <div className="absolute w-[219px] top-[211px] left-[523px] font-poppins font-normal text-[#09090999] text-[16px] leading-[24px] tracking-[0.15px]">
        Usuario
      </div>
      <div className="absolute w-[219px] top-[341px] left-[523px] font-poppins font-normal text-[#09090999] text-[16px] leading-[24px] tracking-[0.15px]">
        Correo
      </div>  
      <div className="absolute w-[450px] h-[48px] top-[242px] left-[495px] bg-white border border-[#797979]">
        <input
          name="cuenta"
          disabled
          placeholder={id_cuenta}
          className="absolute w-[438px] h-[35px] top-[5px] left-[5px] font-nunito font-normal text-black bg-[white] placeholder-black text-[24px] leading-normal tracking-normal border-none outline-none"
        />
      </div>
      <div className="absolute w-[450px] h-[48px] top-[242px] left-[495px] bg-white border border-[#797979]">
        <input
          name="usuario"
          disabled
          placeholder={usuarios}
          className="absolute w-[438px] h-[35px] top-[5px] left-[5px] font-nunito font-normal text-black bg-[white] placeholder-black text-[24px] leading-normal tracking-normal border-none outline-none"
        />
      </div>
      <div className="absolute w-[450px] h-[48px] top-[373px] left-[495px] bg-white border border-[#797979]">
        <input
          type="text"
          placeholder={correo}
          disabled
          name="correo"
          className="absolute w-[438px] h-[35px] top-[4px] left-[5px] font-nunito font-normal bg-[white] text-black placeholder-black text-[24px] leading-normal tracking-normal border-none outline-none"
        />
      </div>
      <div className="absolute w-[450px] h-[48px] top-[450px] left-[495px] bg-white border border-[#797979]">
        <input
          type="text"
          placeholder={saldo}
          disabled
          name="saldo"
          className="absolute w-[438px] h-[35px] top-[4px] left-[5px] font-nunito font-normal bg-[white] text-black placeholder-black text-[24px] leading-normal tracking-normal border-none outline-none"
        />
      </div>
      <table>
        
      </table>
    </>
  );
};

export default DatosCuenta;
