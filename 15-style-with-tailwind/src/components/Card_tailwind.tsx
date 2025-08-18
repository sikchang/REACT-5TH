interface Props{
  type: 'primary' | 'secondary' | 'tertiary';
  logoSrc: string;
  rate: string;
  title: string;
  company: string;
}

const typeBg = {
  primary: "bg-[#fdf4d5]",
  secondary: "bg-[#F9F7FE]",
  tertiary: "bg-[#F8FCEE]",
};

function Card({ type, logoSrc, rate, title, company }: Props) {
  return (
    <div className="p-2 m-16 bg-white rounded-lg max-w-3xs">
      {/* header */}
      <div className={`${typeBg[type]} rounded-lg p-3`}>

        <div className="flex justify-between">
          <p className="font-bold text-xs mb-3">{rate}</p>
          <img src="/bookmark.svg" alt="bookmark" />
        </div>

        {/* title */}
        <div className='flex items-center justify-between mb-10'>
          <h2 className="text-xl font-bold">{title}</h2>
          <img src="/arrow.svg" alt="arrow" />
        </div>

        <div className="text-center mt-4">
          <img src="/navigation.svg" alt="navigation" className="inline-block" />
        </div>
      </div>

      {/* footer */}
      <div className="flex flex-row mt-2">
        <img src={logoSrc} alt={company} className="flex items-center w-29px h-29px" />
        <p className="flex items-center pl-4 font-bold">{company}</p>
      </div>
    </div>
  );
}
export default Card
