const SaldoInfo = ({ cuenta, saldo }) => {
  return (
    <>
      <div className="absolute w-[431px] top-[80px] left-[504px] font-nunito font-normal text-black text-[64px] text-center leading-normal tracking-normal">
        saldo
      </div>
      <div className="absolute w-[325px] top-[207px] left-[557px] font-nunito font-normal text-[#d9d9d9] text-[36px] leading-normal tracking-normal">
        {cuenta}
      </div>
      <img
        className="absolute w-[109px] h-[109px] top-[282px] left-[577px]"
        src="img/agregar-saldo/icono-moneda.svg"
        alt="Icono Moneda"
      />
      <div className="absolute w-[102px] top-[317px] left-[720px] font-arial font-bold text-[#d9d9d9] text-[32px] leading-normal tracking-normal whitespace-nowrap">
        {saldo}
      </div>
    </>
  );
};

export default SaldoInfo;
