const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

const generateBtn = document.getElementById("gen-btn");
const passwords = document.querySelectorAll(".password");

function generatePassword(length = 20) {
  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

function generatePasswords() {
  passwords.forEach((passwordElement) => {
    passwordElement.textContent = generatePassword();
  });
}

generateBtn.addEventListener("click", generatePasswords);

// Click a password to copy it
passwords.forEach((passwordElement) => {
  passwordElement.addEventListener("click", async () => {
    await navigator.clipboard.writeText(passwordElement.textContent);

    const originalText = passwordElement.textContent;
    passwordElement.textContent = "Copied!";

    setTimeout(() => {
      passwordElement.textContent = originalText;
    }, 1000);
  });
});