import "./ProductionItems.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductionItems(props) {
  const { thumbnail } = props;
  return (
    <div className="img-container">
      <img src={thumbnail.Url}></img>
    </div>
  );
}

export default ProductionItems;
