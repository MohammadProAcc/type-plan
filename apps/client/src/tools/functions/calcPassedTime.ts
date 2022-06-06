export const calcPassedTime = (date: Date) => {

  const result = {
    value: 1,
    unit: '',
  };

  const past = date.getTime();
  const now = new Date().getTime(); 
  const diff = ((now - past)/1000)

  if (diff > 60 * 60 * 24 * 30 * 12) {
    result.unit = 'سال';
    result.value = +(diff/31104000).toFixed(0);
  } else if (diff > 60 * 60 * 24 * 30) {
    result.unit = 'ماه';
    result.value = +(diff/2592000).toFixed(0);
  } else if (diff > 60 * 60 * 24) {
    result.unit = 'روز';
    result.value = +(diff/86400).toFixed(0);
  } else if (diff > 60 * 60) {
    result.unit = 'ساعت';
    result.value = +(diff/3600).toFixed(0);
  } else if (diff > 60) {
    result.unit = 'دقیقه';
    result.value = +(diff/60).toFixed(0);
  } else if (diff<60) {
    result.unit = 'ثانیه';
    result.value = +(diff).toFixed(0);
  }

  return `${result.value} ${result.unit} پیش`;
};
