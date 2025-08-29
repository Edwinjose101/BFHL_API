export default function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;

    const fullName = "edwin_jose";
    const dob = "20102004";
    const email = "edwinjose2022@vitbhopal.ac.in";
    const roll_number = "22BCY10047";
    let even_numbers = [], odd_numbers = [], alphabets = [], special_characters = [];
    let sum = 0, concatString = "";

    data.forEach(item => {
      const itemStr = item.toString();
      if (/^-?\d+$/.test(itemStr)) {
        const num = parseInt(itemStr, 10);
        if (num % 2 === 0) even_numbers.push(itemStr);
        else odd_numbers.push(itemStr);
        sum += num;
      } else if (/^[A-Za-z]+$/.test(itemStr)) {
        alphabets.push(itemStr.toUpperCase());
        concatString += itemStr;
      } else {
        special_characters.push(itemStr);
      }
    });

    const reversed = concatString.split('').reverse().map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('');

    res.status(200).json({
      is_success: true,
      user_id: `${fullName}_${dob}`,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string: reversed
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
