function Item(props) {
  return (
    <div className="card item">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={props.images}
          alt={props.name + "\t" + "Картинка че-то не подгрузилась"}
        />
      </div>
      <div className="card-content">
        {/*<p className="card-title activator grey-text text-darken-4">{props.name}</p>*/}
        <p className="card-title activator grey-text text-darken-4">
          {props.description}
        </p>
      </div>
      <div className="card-action">
        <span
          className="price left card-title activator grey-text text-darken-4"
          style={{ fontWeight: "bold" }}
        >
          {props.price} руб.
        </span>
        <button
          className="btncard right btn waves-effect waves-light"
          onClick={() => {
            props.addToBasket({
              id: props.id,
              name: props.name,
              price: props.price,
            });
          }}
        >
          Купить
        </button>
      </div>
    </div>
  );
}

export { Item };
