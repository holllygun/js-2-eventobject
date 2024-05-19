const dropdowns = document.querySelectorAll('.dropdown');
  
dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const items = dropdownList.querySelectorAll('.dropdown__item');

    // Добавить обработчик события для переключения видимости списка
    dropdownValue.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
    });

        // Добавить обработчик события для каждого элемента списка
    items.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedItemText = item.textContent.trim();
            dropdownValue.textContent = selectedItemText;
            dropdownList.classList.remove('dropdown__list_active');
        });
    });
});
