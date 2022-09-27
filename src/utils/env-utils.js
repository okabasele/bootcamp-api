function authImgFlip() {
  const USERNAME = process.env.REACT_APP_IMGFLIP_USERNAME;
  const PASSWORD = process.env.REACT_APP_IMGFLIP_PASSWORD;
  return { username: USERNAME, password: PASSWORD };
}

export default authImgFlip;