const dictionaries = {
  default: {
    Northern: "شمالی",
    Southern: "جنوبی",
    Eastern: "شرقی",
    Western: "غربی",
    Resindental: "مسکونی",
    Villa: "ویلایی",
  },
};

export const translator = (key: string, dictionary?: string) =>
  dictionaries[dictionary ?? "default"][key] ?? key;
