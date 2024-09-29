import { useEffect } from "react";

function Alert(props) {

  

  useEffect(
    () => {
      const timerID = setTimeout(props.closeAlert, 2000);

      return () => {
        clearTimeout(timerID);
      };
    },
    //eslint-disable-next-line
    [props.name]
  );

  return (
    <div id="toast-container">
      <div className="toast rounded">{props.name} добавлен в корзину</div>
    </div>
  );
}

export { Alert };
