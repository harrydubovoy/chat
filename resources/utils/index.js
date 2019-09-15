import moment from 'moment';

const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit)
    }
  }
};

const isCurrentRoom = (roomId) => {
  return window.location.pathname.includes(roomId);
};

const fileData = (files) => {
  const imageFiles = Array.from(files);
  const formData = new FormData();
  formData.append('image', imageFiles[0]);
  return formData;
};

const formatedDate = (date) => {
  return moment(date).format('DD.MM HH:mm');
};

const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getTokent = () => {
  return localStorage.getItem("token");
};

export {
  throttle,
  isCurrentRoom,
  fileData,
  formatedDate,
  setToken,
  getTokent,
}