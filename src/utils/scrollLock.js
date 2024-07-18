
export const disableScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.style.height = '100%';
};

export const enableScroll = () => {
  document.body.style.overflow = '';
  document.body.style.height = '';
  document.documentElement.style.overflow = '';
  document.documentElement.style.height = '';
};