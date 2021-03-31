const darkMode = () => {
  const btnDarkMode = document.querySelector('.dark-mode');
  const darkModeBox = document.querySelector('.dark-mode__box');
  const darkModeName = document.querySelector('.dark-mode__name');
  const wrapper = document.querySelector('.wrapper');
  btnDarkMode.addEventListener('click', (e) => {
    darkModeBox.classList.toggle('dark-mode__box--active');
    wrapper.classList.toggle('dark-theme');
    if (darkModeName.innerText === 'Dark Mode') {
      darkModeName.innerText = 'Light Mode';
    } else {
      darkModeName.innerText = 'Dark Mode';
    }
  });
};

const toggleSidebar = () => {
  const menuNavbar = document.querySelectorAll('.navbar__menu-icon')[0];
  const iconSearch = document.querySelectorAll('.navbar__menu-icon')[1];
  const sidebar = document.querySelector('.sidebar');
  const modalExit = document.querySelector('.modal-exit');
  const iconCloseSideBar = document.querySelector('.sidebar .icon-close');
  const sidebarItems = document.querySelectorAll('.sidebar__item');

  menuNavbar.addEventListener('click', () => {
    sidebar.classList.add('sidebar--show');
    modalExit.classList.remove('d-none');
  });
  iconSearch.addEventListener('click', () => {
    const search = document.querySelector('.search');
    search.classList.toggle('search--show-on-mobile');
  });
  const exitSidebar = () => {
    sidebar.classList.remove('sidebar--show');
    modalExit.classList.add('d-none');
  };
  sidebarItems.forEach((item) => {
    item.addEventListener('click', () => {
      sidebar.classList.remove('sidebar--show');
      modalExit.classList.add('d-none');
    });
  });
  iconCloseSideBar.addEventListener('click', exitSidebar);
  modalExit.addEventListener('click', exitSidebar);
};
export { darkMode, toggleSidebar };
