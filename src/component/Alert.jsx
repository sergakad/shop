import { useEffect } from "react";

function Alert(props) {

  const {name} = props;  

  useEffect(
    () => {
      const timerID = setTimeout(props.closeAlert, 2000);

      return () => {
        clearTimeout(timerID);
      };
    },
    //eslint-disable-next-line
    [name]
  );

  return (
    <div id="toast-container">
      <div className="toast rounded">{name} добавлен в корзину</div>
    </div>
  );
}

export { Alert };
