import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { returnPaginationRagne } from "../../utils/appUtils";
import i18n from "../../i18n";
interface TPaginate {
  page: number;
  totalPage: number;
  siblings: number;
  handleclick: (value: any) => void;
}
function Paginate({ page, totalPage, siblings, handleclick }: TPaginate) {
  const array = returnPaginationRagne( totalPage, siblings);
  const a = array?.find((items) => items);

  return (
    <div className="flex  justify-center">
      <ul className="flex flex-wrap gap-4 text-lg font-bold">
        <li className="cursor-pointer" onClick={() => handleclick("&lsaquo;")}>
          {i18n.language === "fa" ? (
            <KeyboardArrowRightIcon />
          ) : (
            <KeyboardArrowLeftIcon />
          )}
        </li>
        {array?.map((value, idx) => {
          if (value === page) {
            return (
              <li
                onClick={() => handleclick(value)}
                className="bg-secondery--color w-8 h-8 transition cursor-pointer text-black rounded-2xl flex items-center justify-center"
                key={idx}
              >
                <span>{value}</span>
              </li>
            );
          } else {
            return (
              <li
                className="cursor-pointer"
                onClick={() => handleclick(value)}
                key={idx}
              >
                <span>{value}</span>
              </li>
            );
          }
        })}
        {(a as number) < 500 ? (
          <li>
            <span>...</span>
          </li>
        ) : null}
        <li
          className="cursor-pointer  disabled:bg-gray-600"
          onClick={() => handleclick("&rsaquo;")}
        >
          {i18n.language === "fa" ? (
            <KeyboardArrowLeftIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
