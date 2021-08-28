import "./Container.css";
const Container = ({ title, children }) => {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};
export default Container;
