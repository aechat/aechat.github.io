const getPlural = (number: number, one: string, two: string, five: string) => {
  let n = Math.abs(number);

  n %= 100;

  if (n >= 5 && n <= 20) {
    return five;
  }

  n %= 10;

  if (n === 1) {
    return one;
  }

  return n >= 2 && n <= 4 ? two : five;
};

export const formatRelativeTime = (date: Date): string => {
  const now = new Date();

  const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffSeconds < 60) {
    return "только что";
  }

  const minutes = Math.floor(diffSeconds / 60);

  if (minutes < 60) {
    return `${minutes} ${getPlural(minutes, "минуту", "минуты", "минут")} назад`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} ${getPlural(hours, "час", "часа", "часов")} назад`;
  }

  const days = Math.floor(hours / 24);

  if (days === 1) {
    return "вчера";
  }

  if (days < 7) {
    return `${days} ${getPlural(days, "день", "дня", "дней")} назад`;
  }

  const weeks = Math.floor(days / 7);

  if (weeks < 4) {
    return `${weeks} ${getPlural(weeks, "неделю", "недели", "недель")} назад`;
  }

  const months = Math.floor(days / 30);

  if (months < 12) {
    return `${months} ${getPlural(months, "месяц", "месяца", "месяцев")} назад`;
  }

  const years = Math.floor(days / 365);

  return `${years} ${getPlural(years, "год", "года", "лет")} назад`;
};
