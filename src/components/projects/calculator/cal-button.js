

function CalButton({ value, onClick }) {
    let type, style;

    if (value === 0) {
        return (
            <button className="cal-button zero-button num-btn" onClick={() => onClick(value, 'num')}>
                {value}
            </button>
        );
    }

    switch (value) {
        case 'AC':
            type = 'clear';
            style = 'clear-btn';
            break;
        case 'DEL':
            type = 'delete';
            style = 'delete-btn';
            break;
        case '%':
            type = 'percent';
            style = 'percent-btn';
            break;
        case '/':
        case '*':
        case '-':
        case '+':
            type = 'operator';
            style = 'operator-btn';
            break;
        case '=':
            type = 'equal';
            style = 'equal-btn';
            break;
        case '.':
            type = 'decimal';
            style = 'decimal-btn';
            break;
        default:
            type = 'num';
            style = 'num-btn';
            break;
    }


  return (
    <button className={`cal-button ${style}`} onClick={() => onClick(value, type)}>
      {value}
    </button>
  );
}

export default CalButton;
