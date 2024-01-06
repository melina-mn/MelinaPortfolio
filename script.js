function setActivePage(page) {
  const menuItems = document.querySelectorAll('.nav-container li a');
  
  // Remove 'active' class from all menu items
  menuItems.forEach(item => {
    item.classList.remove('active');
  });
  
  // Add 'active' class to the clicked menu item
  const activeMenuItem = document.querySelector(`li a[href='#'][onclick*='${page}']`);
  activeMenuItem.classList.add('active');
}