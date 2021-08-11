const verifyMail = (email, verifyToken) => {
  return {
    to: email,
    subject: 'Confirm your email',
    text: `<a href=http://localhost:3000/api/users/verify/${verifyToken}>Click to confirm your email</a>`,
  };
};

module.exports = verifyMail;
