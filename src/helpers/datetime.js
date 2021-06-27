export const dateTime = (date) => {
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const dateIntl = new Intl.DateTimeFormat("es-ES", options).format(date);
  return dateIntl;
};

export const dateTimeAmPm = (date) => {
  const options = { month: "2-digit", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true };
  const dateIntl = new Intl.DateTimeFormat("es-ES", options).format(date);
  return dateIntl;
};

export const dateTimeNowAmPm = () => {
  const date = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const dateIntl = new Intl.DateTimeFormat("es-ES", options).format(date);
  return dateIntl;
};

export const dateTimeShort = (date) => {
  const newDate = new Date(date);
  const options = { month: "short", day: "numeric", year: "numeric" };
  const dateIntl = new Intl.DateTimeFormat("es-ES", options).format(newDate);
  return dateIntl;
};



// {
// weekday: 'narrow' | 'short' | 'long',
// era: 'narrow' | 'short' | 'long',
// year: 'numeric' | '2-digit',
// month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
// day: 'numeric' | '2-digit',
// hour: 'numeric' | '2-digit',
// minute: 'numeric' | '2-digit',
// second: 'numeric' | '2-digit',
// timeZoneName: 'short' | 'long',

// Time zone to express it in
// timeZone: 'Asia/Shanghai',
// Force 12-hour or 24-hour
// hour12: true | false,

// Rarely-used options
// hourCycle: 'h11' | 'h12' | 'h23' | 'h24',
// formatMatcher: 'basic' | 'best fit'
// }


export const dateTimeLong = (date) => {
  const newDate = new Date(date);
  const options = {
    month: "short", day: "numeric", year: "numeric", hour: 'numeric',
    minute: 'numeric', hour12: true
  };
  const dateIntl = new Intl.DateTimeFormat("es-ES", options).format(newDate);
  return dateIntl;
};