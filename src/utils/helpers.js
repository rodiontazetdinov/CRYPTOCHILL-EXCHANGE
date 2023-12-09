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
    return message ? `${error}: ${message}` : `Неизвестная ошибка: ${error}`;
  });

  return errorMessageList.join("\n");
}
