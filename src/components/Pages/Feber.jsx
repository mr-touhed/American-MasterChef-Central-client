const Feber = ({faber}) => {
    const {name,details,img} = faber;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="text-center flex flex-col items-center">
            <img src={img} alt=""  className="w-10 h-10"/>
        <h2 className="card-title">{name}</h2>
        </div>
        <p>{details}</p>
        
      </div>
    </div>
  );
};

export default Feber;
