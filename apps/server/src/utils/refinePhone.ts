const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
  englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export const toEnglishNumbers = function (phone: string) {
  for (let i = 0; i < 10; i++) {
    phone = phone.replace(persianNumbers[i], englishNumbers[i]);
    phone = phone.replace(arabicNumbers[i], englishNumbers[i]);
  }
  return phone;
};

export function fixPrefix(phone: string, countryCode: string): string {
  /**start with the +countryCode */
  const startCountryCodeWithPlus = `^\\+!${countryCode}[0-9]*`;

  const regexStartCountryCodeWithPlus = new RegExp(
    startCountryCodeWithPlus,
    "g",
  );

  /**start with the country code */
  const startWithJustCountryCode = `^${countryCode}[0-9]*`;

  const regexStartWithJustCountryCode = new RegExp(
    startWithJustCountryCode,
    "g",
  );

  /**start with the 00country code */
  const startWithCountryCodeWith00 = `^00?${countryCode}[0-9]*`;
  const regexStartWithCountryCodeWith00 = new RegExp(
    startWithCountryCodeWith00,
    "g",
  );

  /**start without country code 09185085861 */
  const startWithoutCountryCodeWith0 = `^(?!${countryCode})0[1-9]*`;
  const regexStartWithOutCountryCodeWith0 = new RegExp(
    startWithoutCountryCodeWith0,
    "g",
  );

  /**start without country code 9185085861 */
  const startWithoutCountryCode = `^(?!${countryCode})[1-9]*`;
  const regexStartWithOutCountryCode = new RegExp(startWithoutCountryCode, "g");

  /**start without country code 09185085861 */
  const startWithoutCountryCodeWith00 = `^(?!${countryCode})0[1-9]*`;
  const regexStartWithOutCountryCodeWith00 = new RegExp(
    startWithoutCountryCodeWith00,
    "g",
  );

  switch (true) {
    case regexStartWithJustCountryCode.test(phone): //)
      phone = phone;
      break;

    case regexStartCountryCodeWithPlus.test(phone): //+country code
      phone = phone.replace(`+${countryCode}`, countryCode);
      break;

    case regexStartWithCountryCodeWith00.test(phone): //00country code
      phone = phone.replace(`00${countryCode}`, countryCode);

      break;

    case regexStartWithOutCountryCodeWith0.test(phone): //0phoneNumber
      const phoneWithoutStartZero = phone.slice(1, phone.length - 1);
      phone = phone.replace(phone, `${countryCode}${phoneWithoutStartZero}`);
      break;

    case regexStartWithOutCountryCode.test(phone): //phoneNumber
      phone = phone.replace(phone, `${countryCode}${phone}`);

      break;

    case regexStartWithOutCountryCodeWith00.test(phone): //00phoneNumber
      const phoneWithoutStart2Zero = phone.slice(2, phone.length - 1);
      phone = phone.replace(phone, `${countryCode}${phoneWithoutStart2Zero}`);

      break;

    // kuwait phone validation
    // switch (true) {
    //   /**refine kuwait phone number */
    //   // ^(\+965\d{7})$
    //   case /^[569]\d{7}$/.test(phone): //normal
    //     phone = "965" + phone;
    //     break;
    //   case /^(\+)?[569]\d{7}$/.test(phone): //+
    //     phone = phone.replace("+", "965");
    //     break;
    //   case /^(0)?[569]\d{7}$/.test(phone): //0
    //     phone = phone.replace("0", "965");
    //     break;
    //   case /^(\+0)?[569]\d{7}$/.test(phone): //+0
    //     phone = phone.replace("+0", "965");
    //     break;
    //   case /^(00)?[569]\d{7}$/.test(phone): //+00
    //     phone = phone.replace("00", "965");
    //     break;
    //   case /^(\+00)?[569]\d{7}$/.test(phone): //+00
    //     phone = phone.replace("+00", "965");
    //     break;
    //   case /^(\+965)?[569]\d{7}$/.test(phone): //+965
    //     phone = phone.replace("+965", "965");
    //     break;
    // }
  }
  return phone;
}
export function refinePhone(phone: string, countryCode: string): string {
  const en = toEnglishNumbers(phone);
  return fixPrefix(en, countryCode);
}
