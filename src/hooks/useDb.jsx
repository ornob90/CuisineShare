import { useContext } from "react";
import DbContext from "../context/DbContext";

const useDb = () => {
  const value = useContext(DbContext);
  return value;
};

export default useDb;
