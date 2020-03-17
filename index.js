// IIFE - Immediately Invokable Function Execution
(function(window) {
  // constants
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const CHARS = {
    letters,
    upper: letters.toUpperCase(),
    numbers: "1234567890",
    special: "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  };

  // randomly generated number
  function getRandom(charList) {
    let index = Math.floor(Math.random() * charList.length);
    return charList[index];
  }

  // length - number
  function generatePassword(
    length,
    includeLower,
    includeUpper,
    includeNumbers,
    includeSpecial
  ) {
    let password = "";
    let needLower = includeLower;
    let needUpper = includeUpper;
    let needNumbers = includeNumbers;
    let needSpecial = includeSpecial;

    // execute length times
    for (let i = 0; i <= length - 1; i++) {
      let charType;

      // crude reset
      if (!needLower && !needUpper && !needNumbers && !needSpecial) {
        needLower = includeLower;
        needUpper = includeUpper;
        needNumbers = includeNumbers;
        needSpecial = includeSpecial;
      }

      if (needSpecial) {
        charType = "special";
        needSpecial = false;
      } else if (needNumbers) {
        charType = "numbers";
        needNumbers = false;
      } else if (needUpper) {
        charType = "upper";
        needUpper = false;
      } else if (needLower) {
        charType = "letters";
        needLower = false;
      }

      password += getRandom(CHARS[charType]);
    }

    return password;
  }

  window.document
    .getElementById("generate-password")
    .addEventListener("click", () => {
      const length = parseInt(
        window.prompt("What length from 8 to 128 inclusive?")
      );
      if (typeof length !== "number") {
        return window.alert("That is not a number.");
      }

      if (length < 8 || length > 128) {
        return window.alert(
          "Password must be between 8 and 128 characters inclusive."
        );
      }

      const includeLower = window.confirm(
        "Include lowercase letters? Click OK for Yes."
      );
      const includeUpper = window.confirm(
        "Include uppercase letters? Click OK for Yes."
      );
      const includeNumbers = window.confirm(
        "Include numbers? Click OK for Yes."
      );
      const includeSpecial = window.confirm(
        "Include special? Click OK for Yes."
      );

      if (!includeLower && !includeUpper && !includeLower && !includeSpecial) {
        return window.alert("Must choose at least 1 character type.");
      }

      const password = generatePassword(
        length,
        includeLower,
        includeUpper,
        includeNumbers,
        includeSpecial
      );

      window.alert(password);
    });
})(window);
