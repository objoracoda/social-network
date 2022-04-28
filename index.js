const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelectorAll('#messages-notifications');
const messages = document.querySelector('.messages');
const message  = messages.querySelectorAll('.message');
const messagesSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


// notifications popup
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active');
        if(item.id != "notifications"){
            document.querySelector('.notification-popup').style.display = 'none';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

const searchMessage = () => {
    const val = messagesSearch.value.toLowercase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else {
            chat.style.display = 'none';
        }
    })
}

// search chat
messagesSearch.addEventListener('keyup', searchMessage);

// messages
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications-count').style.display = 'none';
})

// theme display customization
const openThemeModal = () => {
    console.log("click");
    themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);