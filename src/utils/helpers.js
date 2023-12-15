export function formatSeconds(seconds) {
  if (seconds < 0) {
    return "00:00";
  }
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;

  var formattedMinutes = ("0" + minutes).slice(-2);
  var formattedSeconds = ("0" + remainingSeconds).slice(-2);

  return formattedMinutes + ":" + formattedSeconds;
}

export function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export function processOrderErrors(errors) {
  if (!Array.isArray(errors) || errors.length === 0) {
    return "Creating an order is possible.";
  }

  const errorMessages = {
    MAINTENANCE_FROM: "Сеть приостановлена на техническое обслуживание",
    MAINTENANCE_TO: "Сеть приостановлена на техническое обслуживание",
    OFFLINE_FROM: "Монета недоступна",
    OFFLINE_TO: "Монета недоступна",
    RESERVE_FROM: "Недостаточно монет в резерве для обмена",
    RESERVE_TO: "Недостаточно монет в резерве для обмена",
    LIMIT_MIN: "Сумма меньше минимального лимита.",
    LIMIT_MAX: "Сумма больше максимального лимита.",
  };

  const errorMessageList = errors.map((error) => {
    const message = errorMessages[error];
    return message ? `${message}` : `Неизвестная ошибка: ${error}`;
  });

  return errorMessageList.join("\n");
}

// достаёт число из троки
export function extractAmountFromString(inputString) {
  // Ищем все числа в строке, включая целые и с плавающей точкой
  const matches = inputString.match(/(\d+(\.\d+)?)/);

  // Если нашли совпадение, возвращаем первое найденное число
  if (matches && matches.length > 0) {
      return matches[0];
  }

  // Если не найдено, возвращаем null или что-то по умолчанию
  return null;
}

export function addToOrders(obj) {
  // проверяем наличие массива orders в localStorage
  let orders = localStorage.getItem('orders');
  if (orders) {
    // парсим массив orders из localStorage
    orders = JSON.parse(orders);
    // проверяем наличие объекта с таким же id
    const index = orders.findIndex(order => order.id === obj.id);
    if (index !== -1) {
      // перезаписываем объект, если есть такой id
      orders[index] = obj;
    } else {
      // добавляем объект в массив
      orders.push(obj);
    }
  } else {
    // создаем новый массив с объектом
    orders = [obj];
  }
  // записываем обновленный массив в localStorage
  localStorage.setItem('orders', JSON.stringify(orders));
  // возвращаем новый массив
  return orders;
}

export function withdrawFromOrders(id) {
  // Получаем массив заказов из localStorage
  let orders = JSON.parse(localStorage.getItem('orders'));
  
  // Если массив существует
  if (Array.isArray(orders)) {
  // Проходимся по каждому объекту в массиве
  for (let i = 0; i < orders.length; i++){
  // Если находим объект с указанным id
  if (orders[i].id === id){
  // Возвращаем найденный объект
  return orders[i];
  }
  }
  }
  
  // Если ничего не найдено, возвращаем null
  return null;
  }

  export function handleClickCopy(text, setState) {
    navigator.clipboard.writeText(text)
      .then(() => {
        setState(true);
        setTimeout(() => {
          setState(false);
        }, 500);
      })
      .catch(() => {
          alert('Вам нужно дать браузеру разрешение на использование вашего буфера обмена!');
      })
  };

