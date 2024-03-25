import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <h2 className={css.header}>Find contacts by name</h2>

      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

export default SearchBox;
