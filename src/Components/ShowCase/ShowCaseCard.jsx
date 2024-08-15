const ShowCaseCard = ({ product }) => {
  const { image, brand_name, category_name, price, date } = product || {};

  return (
    <div className="my-[30px]">
      <div className="p-6 rounded-md border-2 ">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            {brand_name}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {category_name}
          </h2>
        </div>
        <p className="dark:text-gray-800">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
    </div>
  );
};

export default ShowCaseCard;
