import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector(state => state.counter.count);

  return (
    <header>
      <p className="counter">Count: {count}</p>
    </header>
  );
};

export default Header;
