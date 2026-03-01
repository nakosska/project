// Данные для прототипа
/*let tasks = [
    {
        id: 1,
        title: 'Выполнить замеры в квартире',
        project: 'ЖК "Восход"',
        projectId: 1,
        deadline: '2025-03-05',
        priority: 'high',
        status: 'todo',
        description: 'Замерить все помещения, проверить соответствие плану',
        assignee: 'Иван Петров',
        assigneeId: 'prorab',
        createdAt: '2025-02-28'
    },
    {
        id: 2,
        title: 'Завезти материалы на объект',
        project: 'Коттедж "Берег"',
        projectId: 2,
        deadline: '2025-03-03',
        priority: 'high',
        status: 'inprogress',
        description: 'Цемент, песок, арматура',
        assignee: 'Иван Петров',
        assigneeId: 'prorab',
        createdAt: '2025-02-27'
    },
    {
        id: 3,
        title: 'Сдать акт выполненных работ',
        project: 'Ремонт офиса',
        projectId: 3,
        deadline: '2025-03-07',
        priority: 'medium',
        status: 'todo',
        description: 'Подготовить и подписать акт у заказчика',
        assignee: 'Петр Сидоров',
        assigneeId: 'prorab2',
        createdAt: '2025-02-26'
    },
    {
        id: 4,
        title: 'Проверить качество стяжки',
        project: 'ЖК "Восход"',
        projectId: 1,
        deadline: '2025-03-04',
        priority: 'medium',
        status: 'review',
        description: 'Сделать фото, замерить уровнем',
        assignee: 'Иван Петров',
        assigneeId: 'prorab',
        createdAt: '2025-02-25'
    },
    {
        id: 5,
        title: 'Обновить чертежи',
        project: 'Коттедж "Берег"',
        projectId: 2,
        deadline: '2025-03-06',
        priority: 'low',
        status: 'todo',
        description: 'Внести правки по итогам замера',
        assignee: 'Андрей Иванов',
        assigneeId: 'prorab3',
        createdAt: '2025-02-24'
    },
    {
        id: 6,
        title: 'Согласовать смету с заказчиком',
        project: 'ТЦ "Солнечный"',
        projectId: 4,
        deadline: '2025-03-10',
        priority: 'high',
        status: 'todo',
        description: 'Встреча с заказчиком для утверждения сметы',
        assignee: 'Анна Смирнова',
        assigneeId: 'manager',
        createdAt: '2025-02-23'
    },
    {
        id: 7,
        title: 'Закупить сантехнику',
        project: 'Коттедж "Берег"',
        projectId: 2,
        deadline: '2025-03-08',
        priority: 'medium',
        status: 'done',
        description: 'Раковины, унитазы, смесители',
        assignee: 'Петр Сидоров',
        assigneeId: 'prorab2',
        createdAt: '2025-02-22'
    }
];

// Проекты
let projects = [
    {
        id: 1,
        name: 'ЖК "Восход"',
        address: 'ул. Ленина, 15',
        client: 'ООО "СтройИнвест"',
        status: 'active',
        progress: 75,
        tasks: 12,
        tasksCompleted: 9,
        workers: 3,
        deadline: '2025-04-30',
        budget: 1500000,
        spent: 1125000,
        startDate: '2025-01-15',
        description: 'Строительство жилого комплекса с подземной парковкой',
        manager: 'Анна Смирнова',
        createdBy: 'manager',
        createdAt: '2025-01-10'
    },
    {
        id: 2,
        name: 'Коттедж "Берег"',
        address: 'ул. Береговая, 7',
        client: 'Иванов А.А.',
        status: 'active',
        progress: 30,
        tasks: 8,
        tasksCompleted: 2,
        workers: 2,
        deadline: '2025-05-15',
        budget: 850000,
        spent: 255000,
        startDate: '2025-02-01',
        description: 'Частный коттедж с баней и беседкой',
        manager: 'Анна Смирнова',
        createdBy: 'manager',
        createdAt: '2025-01-15'
    },
    {
        id: 3,
        name: 'Ремонт офиса',
        address: 'БЦ "Плаза", 3 этаж',
        client: 'ООО "ТехноСервис"',
        status: 'pause',
        progress: 60,
        tasks: 15,
        tasksCompleted: 9,
        workers: 4,
        deadline: '2025-05-10',
        budget: 2100000,
        spent: 1260000,
        startDate: '2025-01-20',
        description: 'Капитальный ремонт офисного помещения',
        manager: 'Анна Смирнова',
        createdBy: 'manager',
        createdAt: '2025-01-18'
    },
    {
        id: 4,
        name: 'ТЦ "Солнечный"',
        address: 'пр. Мира, 25',
        client: 'ООО "ТоргПлюс"',
        status: 'planning',
        progress: 10,
        tasks: 20,
        tasksCompleted: 2,
        workers: 5,
        deadline: '2025-06-30',
        budget: 3500000,
        spent: 350000,
        startDate: '2025-03-01',
        description: 'Торговый центр с фуд-кортом',
        manager: 'Анна Смирнова',
        createdBy: 'manager',
        createdAt: '2025-02-20'
    }
];

// Сотрудники
const employees = [
    { id: 'prorab', name: 'Иван Петров', role: 'Прораб', avatar: '👨‍🔧', tasks: 3, project: 'ЖК "Восход"', phone: '+7 (999) 123-45-67', email: 'ivan.p@example.com', efficiency: 95 },
    { id: 'prorab2', name: 'Петр Сидоров', role: 'Прораб', avatar: '👨‍🔧', tasks: 2, project: 'Коттедж "Берег"', phone: '+7 (999) 234-56-78', email: 'petr.s@example.com', efficiency: 88 },
    { id: 'prorab3', name: 'Андрей Иванов', role: 'Прораб', avatar: '👨‍🔧', tasks: 1, project: 'Ремонт офиса', phone: '+7 (999) 345-67-89', email: 'andrey.i@example.com', efficiency: 92 },
    { id: 'prorab4', name: 'Дмитрий Козлов', role: 'Прораб', avatar: '👨‍🔧', tasks: 2, project: 'ТЦ "Солнечный"', phone: '+7 (999) 456-78-90', email: 'dmitry.k@example.com', efficiency: 78 },
    { id: 'manager', name: 'Анна Смирнова', role: 'Менеджер проектов', avatar: '👩‍💼', tasks: 5, project: 'Все проекты', phone: '+7 (999) 567-89-01', email: 'anna.s@example.com', efficiency: 100 },
    { id: 'director', name: 'Алексей Морозов', role: 'Директор', avatar: '👨‍💼', tasks: 0, project: 'Управление', phone: '+7 (999) 678-90-12', email: 'alexey.m@example.com', efficiency: 100 },
    { id: 'buh', name: 'Елена Соколова', role: 'Бухгалтер', avatar: '👩‍💼', tasks: 0, project: 'Финансы', phone: '+7 (999) 789-01-23', email: 'elena.s@example.com', efficiency: 100 },
    { id: 'engineer', name: 'Сергей Новиков', role: 'Инженер', avatar: '👨‍🔧', tasks: 2, project: 'Все проекты', phone: '+7 (999) 890-12-34', email: 'sergey.n@example.com', efficiency: 85 }
];

// Акты
let acts = [
    { id: 1, number: 'АКТ-2025-001', date: '01.03.2025', project: 'ЖК "Восход"', projectId: 1, sum: 450000, status: 'paid', type: 'Акт выполненных работ' },
    { id: 2, number: 'АКТ-2025-002', date: '28.02.2025', project: 'Коттедж "Берег"', projectId: 2, sum: 280000, status: 'waiting', type: 'Акт приема-передачи' },
    { id: 3, number: 'АКТ-2025-003', date: '25.02.2025', project: 'Ремонт офиса', projectId: 3, sum: 730000, status: 'paid', type: 'Акт выполненных работ' },
    { id: 4, number: 'АКТ-2025-004', date: '01.03.2025', project: 'ЖК "Восход"', projectId: 1, sum: 190000, status: 'waiting', type: 'Акт на материалы' },
    { id: 5, number: 'АКТ-2025-005', date: '02.03.2025', project: 'ТЦ "Солнечный"', projectId: 4, sum: 520000, status: 'paid', type: 'Акт выполненных работ' }
];

// Документы
let documents = [
    { 
        id: 1, 
        name: 'План_квартиры_этап2.pdf', 
        project: 'ЖК "Восход"', 
        version: '2.0', 
        size: '2.5 МБ', 
        date: '02.04.2024', 
        type: 'pdf', 
        author: 'Иван Петров',
        content: 'dummy-pdf-content-1',
        versions: [
            { version: '2.0', date: '02.04.2024', size: '2.5 МБ', author: 'Иван Петров', comment: 'Обновлены размеры' },
            { version: '1.2', date: '28.03.2024', size: '2.4 МБ', author: 'Петр Сидоров', comment: 'Исправлены ошибки' },
            { version: '1.1', date: '20.03.2024', size: '2.3 МБ', author: 'Иван Петров', comment: 'Добавлены примечания' },
            { version: '1.0', date: '15.03.2024', size: '2.2 МБ', author: 'Алексей Иванов', comment: 'Первая версия' }
        ]
    },
    { 
        id: 2, 
        name: 'Смета_ЖК_Восход.xlsx', 
        project: 'ЖК "Восход"', 
        version: '1.3', 
        size: '1.1 МБ', 
        date: '01.04.2024', 
        type: 'excel', 
        author: 'Анна Смирнова',
        content: 'dummy-excel-content-2',
        versions: [
            { version: '1.3', date: '01.04.2024', size: '1.1 МБ', author: 'Анна Смирнова', comment: 'Обновлены цены' },
            { version: '1.2', date: '25.03.2024', size: '1.0 МБ', author: 'Анна Смирнова', comment: 'Добавлены материалы' },
            { version: '1.1', date: '20.03.2024', size: '0.9 МБ', author: 'Иван Петров', comment: 'Правки' },
            { version: '1.0', date: '15.03.2024', size: '0.8 МБ', author: 'Анна Смирнова', comment: 'Первая версия' }
        ]
    },
    { 
        id: 3, 
        name: 'Фото_объекта_1.jpg', 
        project: 'Коттедж "Берег"', 
        version: '1.0', 
        size: '3.2 МБ', 
        date: '30.03.2024', 
        type: 'image', 
        author: 'Петр Сидоров',
        content: 'dummy-image-content-3',
        versions: [
            { version: '1.0', date: '30.03.2024', size: '3.2 МБ', author: 'Петр Сидоров', comment: 'Оригинал' }
        ]
    },
    { 
        id: 4, 
        name: 'Договор_подряда.pdf', 
        project: 'Ремонт офиса', 
        version: '1.2', 
        size: '4.8 МБ', 
        date: '28.03.2024', 
        type: 'pdf', 
        author: 'Анна Смирнова',
        content: 'dummy-pdf-content-4',
        versions: [
            { version: '1.2', date: '28.03.2024', size: '4.8 МБ', author: 'Анна Смирнова', comment: 'Подписан' },
            { version: '1.1', date: '25.03.2024', size: '4.7 МБ', author: 'Анна Смирнова', comment: 'Правки юриста' },
            { version: '1.0', date: '20.03.2024', size: '4.5 МБ', author: 'Анна Смирнова', comment: 'Черновик' }
        ]
    },
    { 
        id: 5, 
        name: 'Чертежи_фасада.dwg', 
        project: 'ТЦ "Солнечный"', 
        version: '1.1', 
        size: '8.3 МБ', 
        date: '25.03.2024', 
        type: 'dwg', 
        author: 'Сергей Новиков',
        content: 'dummy-dwg-content-5',
        versions: [
            { version: '1.1', date: '25.03.2024', size: '8.3 МБ', author: 'Сергей Новиков', comment: 'Исправления' },
            { version: '1.0', date: '20.03.2024', size: '8.0 МБ', author: 'Сергей Новиков', comment: 'Первая версия' }
        ]
    },
    { 
        id: 6, 
        name: 'Акт_скрытых_работ.pdf', 
        project: 'Коттедж "Берег"', 
        version: '1.0', 
        size: '1.7 МБ', 
        date: '26.03.2024', 
        type: 'pdf', 
        author: 'Петр Сидоров',
        content: 'dummy-pdf-content-6',
        versions: [
            { version: '1.0', date: '26.03.2024', size: '1.7 МБ', author: 'Петр Сидоров', comment: 'Оригинал' }
        ]
    }
];

// Текущая роль
let currentRole = 'prorab';

// Данные пользователей для разных ролей
const userProfiles = {
    prorab: { name: 'Иван Петров', role: 'Прораб', avatar: '', icon: 'fa-hard-hat' },
    manager: { name: 'Анна Смирнова', role: 'Менеджер проектов', avatar: '', icon: 'fa-user-tie' },
    director: { name: 'Алексей Морозов', role: 'Директор', avatar: '', icon: 'fa-crown' },
    buh: { name: 'Елена Соколова', role: 'Бухгалтер', avatar: '', icon: 'fa-calculator' }
};

// Меню для разных ролей
const roleMenus = {
    prorab: [
        { icon: 'fa-home', text: 'Дашборд', page: 'dashboard' },
        { icon: 'fa-tasks', text: 'Мои задачи', page: 'tasks', badge: tasks.filter(t => t.assignee === 'Иван Петров' && t.status !== 'done').length },
        { icon: 'fa-folder', text: 'Проекты', page: 'projects' },
        { icon: 'fa-file-alt', text: 'Документы', page: 'documents' },
        { icon: 'fa-clock', text: 'Учет времени', page: 'timesheet' }
    ],
    manager: [
        { icon: 'fa-home', text: 'Дашборд', page: 'dashboard' },
        { icon: 'fa-tasks', text: 'Все задачи', page: 'tasks', badge: tasks.filter(t => t.status !== 'done').length },
        { icon: 'fa-folder', text: 'Проекты', page: 'projects' },
        { icon: 'fa-plus-circle', text: '+ Новый проект', page: 'new-project' },
        { icon: 'fa-users', text: 'Команда', page: 'team' },
        { icon: 'fa-file-alt', text: 'Документы', page: 'documents' },
        { icon: 'fa-chart-bar', text: 'Отчеты', page: 'reports' },
        { icon: 'fa-chart-line', text: 'Аналитика', page: 'analytics' }
    ],
    director: [
        { icon: 'fa-home', text: 'Дашборд', page: 'dashboard' },
        { icon: 'fa-chart-pie', text: 'KPI', page: 'kpi' },
        { icon: 'fa-folder', text: 'Проекты', page: 'projects' },
        { icon: 'fa-users', text: 'Сотрудники', page: 'team' },
        { icon: 'fa-chart-line', text: 'Аналитика', page: 'analytics' },
        { icon: 'fa-file-invoice', text: 'Финансы', page: 'finance' },
        { icon: 'fa-chart-bar', text: 'Отчеты', page: 'reports' }
    ],
    buh: [
        { icon: 'fa-home', text: 'Дашборд', page: 'dashboard' },
        { icon: 'fa-file-invoice', text: 'Акты', page: 'acts' },
        { icon: 'fa-folder', text: 'Проекты', page: 'projects' },
        { icon: 'fa-chart-bar', text: 'Отчеты', page: 'reports' },
        { icon: 'fa-calculator', text: 'Финансы', page: 'finance' }
    ]
};

// Функция для обновления всех UI компонентов при изменении данных
function refreshAllUI() {
    // Обновляем меню (бейджи)
    updateMenuBadges();
    
    // Обновляем текущую страницу в зависимости от роли
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        const pageId = activePage.id.replace('-page', '');
        if (pageId === 'dashboard') {
            loadDashboardContent();
        } else {
            // Пересоздаем страницу
            const content = document.querySelector('.content');
            const oldPage = document.getElementById(pageId + '-page');
            if (oldPage) {
                oldPage.remove();
            }
            createDynamicPage(pageId);
            document.getElementById(pageId + '-page').classList.add('active');
        }
    }
    
    // Обновляем статистику на дашборде если он активен
    if (document.getElementById('dashboard-page')?.classList.contains('active')) {
        updateStatsForRole();
    }
}

function updateMenuBadges() {
    const menu = document.querySelector('.nav-menu');
    if (!menu) return;
    
    if (currentRole === 'prorab') {
        const taskCount = tasks.filter(t => t.assignee === 'Иван Петров' && t.status !== 'done').length;
        const taskMenuItem = menu.querySelector('[data-page="tasks"] .badge');
        if (taskMenuItem) {
            taskMenuItem.textContent = taskCount;
        }
    } else if (currentRole === 'manager') {
        const taskCount = tasks.filter(t => t.status !== 'done').length;
        const taskMenuItem = menu.querySelector('[data-page="tasks"] .badge');
        if (taskMenuItem) {
            taskMenuItem.textContent = taskCount;
        }
    }
}

// Переключение роли
document.getElementById('role-select')?.addEventListener('change', function(e) {
    currentRole = e.target.value;
    updateUIForRole();
    showNotification(`Роль изменена на ${userProfiles[currentRole].role}`, 'success');
});

function updateUIForRole() {
    // Обновляем меню
    const menu = document.querySelector('.nav-menu');
    const user = userProfiles[currentRole];
    const menuItems = roleMenus[currentRole];
    
    // Обновляем бейджи для задач
    if (currentRole === 'prorab') {
        const taskCount = tasks.filter(t => t.assignee === 'Иван Петров' && t.status !== 'done').length;
        menuItems[1].badge = taskCount;
    } else if (currentRole === 'manager') {
        menuItems[1].badge = tasks.filter(t => t.status !== 'done').length;
    }
    
    menu.innerHTML = menuItems.map(item => `
        <a href="#" class="nav-item ${item.page === 'dashboard' ? 'active' : ''}" data-page="${item.page}">
            <i class="fas ${item.icon}"></i>
            <span>${item.text}</span>
            ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
        </a>
    `).join('');
    
    // Обновляем информацию о пользователе
    document.getElementById('user-info').innerHTML = `
        <i class="fas ${user.icon}"></i>
        <div>
            <div class="user-name">${user.name}</div>
            <div class="user-role">${user.role}</div>
        </div>
    `;
    
    // Переключаем страницу на дашборд
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('dashboard-page').classList.add('active');
    document.getElementById('page-title').textContent = 'Дашборд';
    
    // Переинициализируем навигацию
    initNavigation();
    
    // Загружаем контент дашборда для роли
    loadDashboardContent();
}

function loadDashboardContent() {
    const dashboardPage = document.getElementById('dashboard-page');
    
    // Очищаем дашборд, оставляя только stats-grid
    dashboardPage.innerHTML = '<div class="stats-grid" id="stats-grid"></div>';
    
    // Загружаем статистику
    updateStatsForRole();
    
    // Добавляем специфичный для роли контент
    const statsGrid = document.getElementById('stats-grid');
    
    switch(currentRole) {
        case 'manager':
            statsGrid.insertAdjacentHTML('afterend', `
                <div style="margin-top: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3>Текущие проекты</h3>
                        <button class="btn-primary" onclick="createNewProject()">
                            <i class="fas fa-plus"></i> Новый проект
                        </button>
                    </div>
                    <div class="projects-grid" id="dashboard-projects">
                        ${renderProjectsForDashboard()}
                    </div>
                    
                    <h3 style="margin-top: 30px; margin-bottom: 20px;">Доска задач (перетаскивайте карточки)</h3>
                    <div class="kanban-board" id="kanban-board">
                        <div class="kanban-column" ondrop="drop(event)" ondragover="allowDrop(event)" data-status="todo">
                            <div class="kanban-header todo">
                                <span class="kanban-title">К выполнению</span>
                                <span class="kanban-count" id="todo-count">${tasks.filter(t => t.status === 'todo').length}</span>
                            </div>
                            <div class="kanban-cards" id="kanban-todo">
                                ${tasks.filter(t => t.status === 'todo').map(task => `
                                    <div class="kanban-card" draggable="true" ondragstart="drag(event)" data-task-id="${task.id}" data-status="${task.status}">
                                        <div class="kanban-card-title">${task.title}</div>
                                        <div class="kanban-card-meta">
                                            <span><i class="fas fa-user"></i> ${task.assignee}</span>
                                            <span><i class="fas fa-calendar"></i> ${task.deadline}</span>
                                        </div>
                                        <div class="kanban-card-project">${task.project}</div>
                                        <span class="task-priority priority-${task.priority}">
                                            ${task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                                        </span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="kanban-column" ondrop="drop(event)" ondragover="allowDrop(event)" data-status="inprogress">
                            <div class="kanban-header inprogress">
                                <span class="kanban-title">В работе</span>
                                <span class="kanban-count" id="inprogress-count">${tasks.filter(t => t.status === 'inprogress').length}</span>
                            </div>
                            <div class="kanban-cards" id="kanban-inprogress">
                                ${tasks.filter(t => t.status === 'inprogress').map(task => `
                                    <div class="kanban-card" draggable="true" ondragstart="drag(event)" data-task-id="${task.id}" data-status="${task.status}">
                                        <div class="kanban-card-title">${task.title}</div>
                                        <div class="kanban-card-meta">
                                            <span><i class="fas fa-user"></i> ${task.assignee}</span>
                                            <span><i class="fas fa-calendar"></i> ${task.deadline}</span>
                                        </div>
                                        <div class="kanban-card-project">${task.project}</div>
                                        <span class="task-priority priority-${task.priority}">
                                            ${task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                                        </span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="kanban-column" ondrop="drop(event)" ondragover="allowDrop(event)" data-status="review">
                            <div class="kanban-header review">
                                <span class="kanban-title">На проверке</span>
                                <span class="kanban-count" id="review-count">${tasks.filter(t => t.status === 'review').length}</span>
                            </div>
                            <div class="kanban-cards" id="kanban-review">
                                ${tasks.filter(t => t.status === 'review').map(task => `
                                    <div class="kanban-card" draggable="true" ondragstart="drag(event)" data-task-id="${task.id}" data-status="${task.status}">
                                        <div class="kanban-card-title">${task.title}</div>
                                        <div class="kanban-card-meta">
                                            <span><i class="fas fa-user"></i> ${task.assignee}</span>
                                            <span><i class="fas fa-calendar"></i> ${task.deadline}</span>
                                        </div>
                                        <div class="kanban-card-project">${task.project}</div>
                                        <span class="task-priority priority-${task.priority}">
                                            ${task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                                        </span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="kanban-column" ondrop="drop(event)" ondragover="allowDrop(event)" data-status="done">
                            <div class="kanban-header done">
                                <span class="kanban-title">Выполнено</span>
                                <span class="kanban-count" id="done-count">${tasks.filter(t => t.status === 'done').length}</span>
                            </div>
                            <div class="kanban-cards" id="kanban-done">
                                ${tasks.filter(t => t.status === 'done').map(task => `
                                    <div class="kanban-card" draggable="true" ondragstart="drag(event)" data-task-id="${task.id}" data-status="${task.status}">
                                        <div class="kanban-card-title">${task.title}</div>
                                        <div class="kanban-card-meta">
                                            <span><i class="fas fa-user"></i> ${task.assignee}</span>
                                            <span><i class="fas fa-calendar"></i> ${task.deadline}</span>
                                        </div>
                                        <div class="kanban-card-project">${task.project}</div>
                                        <span class="task-priority priority-${task.priority}">
                                            ${task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                                        </span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `);
            break;
            
        case 'director':
            const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
            const paidSum = acts.filter(a => a.status === 'paid').reduce((sum, a) => sum + a.sum, 0);
            
            statsGrid.insertAdjacentHTML('afterend', `
                <div class="kpi-grid" style="margin-top: 30px;">
                    <div class="kpi-card">
                        <div class="kpi-value">${projects.length}</div>
                        <div class="kpi-label">Всего проектов</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-value">${projects.filter(p => p.status === 'active').length}</div>
                        <div class="kpi-label">Активных</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-value">${(totalBudget / 1000000).toFixed(1)} млн ₽</div>
                        <div class="kpi-label">Общий бюджет</div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;">
                    <div class="card">
                        <h3>Последние проекты</h3>
                        ${projects.slice(0, 3).map(p => `
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                                <div>
                                    <div style="font-weight: 500;">${p.name}</div>
                                    <div style="font-size: 12px; color: #6b7280;">Бюджет: ${p.budget.toLocaleString()} ₽</div>
                                </div>
                                <span class="project-status status-${p.status}">${p.status === 'active' ? 'Активен' : p.status === 'pause' ? 'На паузе' : 'Планирование'}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="card">
                        <h3>Финансовые показатели</h3>
                        <div style="margin: 15px 0;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>Оплачено по актам</span>
                                <span style="font-weight: 600;">${(paidSum / 1000000).toFixed(1)} млн ₽</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>Ожидает оплаты</span>
                                <span style="font-weight: 600; color: #f97316;">${((totalBudget - paidSum) / 1000000).toFixed(1)} млн ₽</span>
                            </div>
                        </div>
                        <button class="btn-primary" style="width: 100%;" onclick="generateReport('finance')">
                            <i class="fas fa-chart-line"></i> Полный отчет
                        </button>
                    </div>
                </div>
                
                <div class="card" style="margin-top: 30px;">
                    <h3>Загрузка сотрудников</h3>
                    ${employees.filter(e => e.role === 'Прораб').map(emp => `
                        <div style="margin: 15px 0;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>${emp.name}</span>
                                <span>${emp.efficiency}%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${emp.efficiency}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `);
            break;
            
        case 'buh':
            const totalActs = acts.reduce((sum, a) => sum + a.sum, 0);
            const paidActs = acts.filter(a => a.status === 'paid').reduce((sum, a) => sum + a.sum, 0);
            
            statsGrid.insertAdjacentHTML('afterend', `
                <div style="margin-top: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3>Последние акты</h3>
                        <button class="btn-primary" onclick="generateReport('finance')">
                            <i class="fas fa-file-pdf"></i> Финансовый отчет
                        </button>
                    </div>
                    
                    <div class="finance-grid">
                        ${acts.map(act => `
                            <div class="act-card">
                                <div class="act-header">
                                    <span class="act-number">${act.number}</span>
                                    <span class="act-date">${act.date}</span>
                                </div>
                                <div class="act-project">${act.project}</div>
                                <div class="act-type">${act.type}</div>
                                <div class="act-sum">${act.sum.toLocaleString()} ₽</div>
                                <div class="act-footer">
                                    <span class="act-status ${act.status}">
                                        ${act.status === 'paid' ? 'Оплачено' : 'Ожидание'}
                                    </span>
                                    <div>
                                        <button class="btn-icon" onclick="markAsPaid(${act.id})" title="Отметить как оплачено"><i class="fas fa-check-circle"></i></button>
                                        <button class="btn-icon" onclick="downloadAct(${act.id})" title="Скачать"><i class="fas fa-download"></i></button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `);
            break;
            
        case 'prorab':
            const myTasks = tasks.filter(t => t.assignee === 'Иван Петров' && t.status !== 'done');
            const myProjects = projects.filter(p => 
                tasks.some(t => t.assignee === 'Иван Петров' && t.project === p.name)
            );
            
            statsGrid.insertAdjacentHTML('afterend', `
                <div style="margin-top: 30px;">
                    <h3>Мои текущие задачи (${myTasks.length})</h3>
                    <div class="tasks-list" style="margin-top: 15px;">
                        ${myTasks.map(task => `
                            <div class="task-item">
                                <div class="task-checkbox" onclick="completeTask(${task.id})"></div>
                                <div class="task-content">
                                    <div class="task-title">${task.title}</div>
                                    <div class="task-meta">
                                        <span class="task-project">${task.project}</span>
                                        <span class="task-deadline ${isOverdue(task.deadline) ? 'overdue' : ''}">
                                            <i class="fas fa-calendar"></i> ${formatDate(task.deadline)}
                                        </span>
                                        <span class="task-priority priority-${task.priority}">
                                            ${task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <button class="btn-icon" onclick="startTask(${task.id})" title="Начать работу"><i class="fas fa-play"></i></button>
                                    <button class="btn-icon" onclick="viewTaskDetails(${task.id})" title="Подробнее"><i class="fas fa-eye"></i></button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <h3 style="margin-top: 30px;">Проекты, в которых я участвую</h3>
                    <div class="projects-grid" style="margin-top: 15px;">
                        ${myProjects.map(project => `
                            <div class="project-card">
                                <div class="project-header">
                                    <h4>${project.name}</h4>
                                    <span class="project-status status-${project.status}">
                                        ${project.status === 'active' ? 'Активен' : project.status === 'pause' ? 'На паузе' : 'Планирование'}
                                    </span>
                                </div>
                                <p class="project-address"><i class="fas fa-map-marker-alt"></i> ${project.address}</p>
                                <p class="project-client"><i class="fas fa-user"></i> ${project.client}</p>
                                <div class="project-progress">
                                    <div class="progress-info">
                                        <span>Прогресс</span>
                                        <span>${project.progress}%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: ${project.progress}%"></div>
                                    </div>
                                </div>
                                <div class="project-meta">
                                    <span><i class="fas fa-tasks"></i> ${tasks.filter(t => t.project === project.name && t.assignee === 'Иван Петров').length} моих задач</span>
                                    <span><i class="fas fa-ruble-sign"></i> ${(project.budget / 1000000).toFixed(1)} млн ₽</span>
                                </div>
                                <div style="margin-top: 15px;">
                                    <button class="btn-primary" style="width: 100%;" onclick="viewProjectDetails(${project.id})">
                                        <i class="fas fa-folder-open"></i> Подробнее
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `);
            break;
    }
}

function renderProjectsForDashboard() {
    return projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h4>${project.name}</h4>
                <span class="project-status status-${project.status}">
                    ${project.status === 'active' ? 'Активен' : project.status === 'pause' ? 'На паузе' : 'Планирование'}
                </span>
            </div>
            <p class="project-address"><i class="fas fa-map-marker-alt"></i> ${project.address}</p>
            <p class="project-client"><i class="fas fa-user"></i> ${project.client}</p>
            <div class="project-progress">
                <div class="progress-info">
                    <span>Прогресс</span>
                    <span>${project.progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${project.progress}%"></div>
                </div>
            </div>
            <div class="project-meta">
                <span><i class="fas fa-tasks"></i> ${project.tasksCompleted}/${project.tasks} задач</span>
                <span><i class="fas fa-users"></i> ${project.workers} чел</span>
                <span><i class="fas fa-ruble-sign"></i> ${(project.budget / 1000000).toFixed(1)} млн</span>
            </div>
            <div class="project-footer">
                <span class="project-date">до ${formatDate(project.deadline)}</span>
                <div>
                    ${currentRole === 'manager' ? `<button class="btn-icon" onclick="editProject(${project.id})" title="Редактировать"><i class="fas fa-edit"></i></button>` : ''}
                    <button class="btn-icon" onclick="viewProjectDetails(${project.id})" title="Подробнее"><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateStatsForRole() {
    const statsGrid = document.getElementById('stats-grid');
    
    switch(currentRole) {
        case 'prorab':
            statsGrid.innerHTML = `
                <div class="stat-card">
                    <i class="fas fa-tasks stat-icon blue"></i>
                    <div>
                        <div class="stat-value">${tasks.filter(t => t.assignee === 'Иван Петров' && t.status !== 'done').length}</div>
                        <div class="stat-label">Мои задачи</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-clock stat-icon orange"></i>
                    <div>
                        <div class="stat-value">${tasks.filter(t => t.assignee === 'Иван Петров' && isOverdue(t.deadline) && t.status !== 'done').length}</div>
                        <div class="stat-label">Просрочено</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-check-circle stat-icon green"></i>
                    <div>
                        <div class="stat-value">${tasks.filter(t => t.assignee === 'Иван Петров' && t.status === 'done').length}</div>
                        <div class="stat-label">Выполнено</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-folder stat-icon purple"></i>
                    <div>
                        <div class="stat-value">${projects.filter(p => tasks.some(t => t.assignee === 'Иван Петров' && t.project === p.name)).length}</div>
                        <div class="stat-label">Мои проекты</div>
                    </div>
                </div>
            `;
            break;
            
        case 'manager':
            statsGrid.innerHTML = `
                <div class="stat-card">
                    <i class="fas fa-tasks stat-icon blue"></i>
                    <div>
                        <div class="stat-value">${tasks.length}</div>
                        <div class="stat-label">Всего задач</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-clock stat-icon orange"></i>
                    <div>
                        <div class="stat-value">${tasks.filter(t => isOverdue(t.deadline) && t.status !== 'done').length}</div>
                        <div class="stat-label">Просрочено</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-folder stat-icon green"></i>
                    <div>
                        <div class="stat-value">${projects.length}</div>
                        <div class="stat-label">Проектов</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-users stat-icon purple"></i>
                    <div>
                        <div class="stat-value">${employees.length}</div>
                        <div class="stat-label">Сотрудников</div>
                    </div>
                </div>
            `;
            break;
            
        case 'director':
            const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
            const paidSum = acts.filter(a => a.status === 'paid').reduce((sum, a) => sum + a.sum, 0);
            statsGrid.innerHTML = `
                <div class="stat-card">
                    <i class="fas fa-chart-line stat-icon blue"></i>
                    <div>
                        <div class="stat-value">${projects.length}</div>
                        <div class="stat-label">Проектов</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-ruble-sign stat-icon green"></i>
                    <div>
                        <div class="stat-value">${(totalBudget / 1000000).toFixed(1)} млн ₽</div>
                        <div class="stat-label">Бюджет</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-users stat-icon orange"></i>
                    <div>
                        <div class="stat-value">${employees.length}</div>
                        <div class="stat-label">Сотрудников</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-check-circle stat-icon purple"></i>
                    <div>
                        <div class="stat-value">${projects.filter(p => p.status === 'active').length}</div>
                        <div class="stat-label">Активных</div>
                    </div>
                </div>
            `;
            break;
            
        case 'buh':
            const totalActs = acts.reduce((sum, a) => sum + a.sum, 0);
            const paidActs = acts.filter(a => a.status === 'paid').reduce((sum, a) => sum + a.sum, 0);
            statsGrid.innerHTML = `
                <div class="stat-card">
                    <i class="fas fa-file-invoice stat-icon blue"></i>
                    <div>
                        <div class="stat-value">${acts.length}</div>
                        <div class="stat-label">Всего актов</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-check-circle stat-icon green"></i>
                    <div>
                        <div class="stat-value">${(paidActs / 1000000).toFixed(1)} млн ₽</div>
                        <div class="stat-label">Оплачено</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-clock stat-icon orange"></i>
                    <div>
                        <div class="stat-value">${((totalActs - paidActs) / 1000000).toFixed(1)} млн ₽</div>
                        <div class="stat-label">Ожидает</div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-folder stat-icon purple"></i>
                    <div>
                        <div class="stat-value">${projects.length}</div>
                        <div class="stat-label">Проектов</div>
                    </div>
                </div>
            `;
            break;
    }
}

// Функции для drag-and-drop
window.allowDrop = function(ev) {
    ev.preventDefault();
};

window.drag = function(ev) {
    ev.dataTransfer.setData("text", ev.target.closest('.kanban-card').dataset.taskId);
};

window.drop = function(ev) {
    ev.preventDefault();
    const taskId = ev.dataTransfer.getData("text");
    const newStatus = ev.target.closest('.kanban-column').dataset.status;
    
    const task = tasks.find(t => t.id == taskId);
    if (task && task.status !== newStatus) {
        task.status = newStatus;
        
        // Обновляем отображение
        updateKanbanBoard();
        
        // Показываем уведомление
        const statusNames = {
            'todo': 'К выполнению',
            'inprogress': 'В работе',
            'review': 'На проверке',
            'done': 'Выполнено'
        };
        showNotification(`Задача "${task.title}" перемещена в "${statusNames[newStatus]}"`, 'success');
        
        // Обновляем UI
        refreshAllUI();
    }
};

function updateKanbanBoard() {
    // Обновляем каждую колонку
    ['todo', 'inprogress', 'review', 'done'].forEach(status => {
        const column = document.getElementById(`kanban-${status}`);
        if (column) {
            const statusTasks = tasks.filter(t => t.status === status);
            column.innerHTML = statusTasks.map(task => `
                <div class="kanban-card" draggable="true" ondragstart="drag(event)" data-task-id="${task.id}" data-status="${task.status}">
                    <div class="kanban-card-title">${task.title}</div>
                    <div class="kanban-card-meta">
                        <span><i class="fas fa-user"></i> ${task.assignee}</span>
                        <span><i class="fas fa-calendar"></i> ${task.deadline}</span>
                    </div>
                    <div class="kanban-card-project">${task.project}</div>
                    <span class="task-priority priority-${task.priority}">
                        ${task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                    </span>
                </div>
            `).join('');
        }
        
        // Обновляем счетчики
        const countSpan = document.getElementById(`${status}-count`);
        if (countSpan) {
            countSpan.textContent = tasks.filter(t => t.status === status).length;
        }
    });
}

// Функция для отметки выполнения задачи (для прораба)
window.completeTask = function(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.status = 'done';
        showNotification(`Задача "${task.title}" выполнена! 🎉`, 'success');
        
        // Обновляем UI для всех ролей
        refreshAllUI();
    }
};

// Функция для просмотра деталей проекта
window.viewProjectDetails = function(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    // Создаем модальное окно с деталями проекта
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.display = 'flex';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>${project.name}</h3>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <div style="margin-bottom: 20px;">
                    <p><strong>Адрес:</strong> ${project.address}</p>
                    <p><strong>Заказчик:</strong> ${project.client}</p>
                    <p><strong>Менеджер:</strong> ${project.manager}</p>
                    <p><strong>Статус:</strong> <span class="project-status status-${project.status}">${project.status === 'active' ? 'Активен' : project.status === 'pause' ? 'На паузе' : 'Планирование'}</span></p>
                    <p><strong>Бюджет:</strong> ${project.budget.toLocaleString()} ₽</p>
                    <p><strong>Потрачено:</strong> ${project.spent.toLocaleString()} ₽</p>
                    <p><strong>Остаток:</strong> ${(project.budget - project.spent).toLocaleString()} ₽</p>
                    <p><strong>Срок:</strong> до ${formatDate(project.deadline)}</p>
                    <p><strong>Дата начала:</strong> ${formatDate(project.startDate)}</p>
                    <p><strong>Описание:</strong> ${project.description}</p>
                </div>
                
                <h4>Задачи по проекту</h4>
                <div style="max-height: 200px; overflow-y: auto;">
                    ${tasks.filter(t => t.projectId === projectId).map(task => `
                        <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                            <span>${task.title}</span>
                            <span class="task-priority priority-${task.priority}">${task.assignee}</span>
                        </div>
                    `).join('')}
                </div>
                
                <button class="btn-primary" style="width: 100%; margin-top: 20px;" onclick="this.closest('.modal').remove()">
                    Закрыть
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Инициализация навигации
function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const pageId = this.dataset.page;
            
            // Проверяем существование страницы
            if (!document.getElementById(pageId + '-page')) {
                createDynamicPage(pageId);
            }
            
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId + '-page').classList.add('active');
            
            let title = this.querySelector('span').textContent;
            document.getElementById('page-title').textContent = title;
        });
    });
}

// Создание динамических страниц
function createDynamicPage(pageId) {
    const content = document.querySelector('.content');
    const newPage = document.createElement('div');
    newPage.id = pageId + '-page';
    newPage.className = 'page';
    
    switch(pageId) {
        case 'projects':
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>Все проекты</h2>
                    ${currentRole === 'manager' ? '<button class="btn-primary" onclick="createNewProject()"><i class="fas fa-plus"></i> Новый проект</button>' : ''}
                </div>
                <div class="search-box" style="margin-bottom: 20px;">
                    <i class="fas fa-search"></i>
                    <input type="text" id="projectSearch" placeholder="Поиск по проектам..." onkeyup="searchProjects()">
                </div>
                <div class="projects-grid" id="projects-container">
                    ${renderProjects()}
                </div>
            `;
            break;
            
        case 'tasks':
            const taskList = currentRole === 'prorab' 
                ? tasks.filter(t => t.assignee === 'Иван Петров') 
                : tasks;
                
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>${currentRole === 'prorab' ? 'Мои задачи' : 'Все задачи'}</h2>
                    ${currentRole === 'manager' ? '<button class="btn-primary" onclick="createNewTask()"><i class="fas fa-plus"></i> Новая задача</button>' : ''}
                </div>
                <div class="tasks-header">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" id="taskSearch" placeholder="Поиск по задачам..." onkeyup="searchTasks()">
                    </div>
                    <div class="task-filters">
                        <button class="filter-btn active" onclick="filterTasks('all', event)">Все (${taskList.length})</button>
                        <button class="filter-btn" onclick="filterTasks('todo', event)">К выполнению (${taskList.filter(t => t.status === 'todo').length})</button>
                        <button class="filter-btn" onclick="filterTasks('inprogress', event)">В работе (${taskList.filter(t => t.status === 'inprogress').length})</button>
                        <button class="filter-btn" onclick="filterTasks('review', event)">На проверке (${taskList.filter(t => t.status === 'review').length})</button>
                        <button class="filter-btn" onclick="filterTasks('done', event)">Выполнено (${taskList.filter(t => t.status === 'done').length})</button>
                    </div>
                </div>
                <div class="tasks-list" id="tasks-list">
                    ${renderTasks(taskList)}
                </div>
            `;
            break;
            
        case 'new-project':
            if (currentRole === 'manager') {
                newPage.innerHTML = `
                    <div class="page-header">
                        <h2>Создание нового проекта</h2>
                    </div>
                    <div style="max-width: 600px; margin: 0 auto;">
                        <form id="new-project-form" onsubmit="createProject(event)">
                            <div class="form-group">
                                <label for="project-name">Название проекта *</label>
                                <input type="text" id="project-name" placeholder="Например: ЖК 'Восход'" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="project-address">Адрес *</label>
                                <input type="text" id="project-address" placeholder="ул. Ленина, 15" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="project-client">Заказчик *</label>
                                <input type="text" id="project-client" placeholder="ООО СтройИнвест" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="project-budget">Бюджет (₽) *</label>
                                <input type="number" id="project-budget" placeholder="1500000" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="project-start">Дата начала *</label>
                                <input type="date" id="project-start" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="project-deadline">Срок сдачи *</label>
                                <input type="date" id="project-deadline" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="project-desc">Описание</label>
                                <textarea id="project-desc" rows="4" placeholder="Краткое описание проекта..."></textarea>
                            </div>
                            
                            <button type="submit" class="btn-primary" style="width: 100%; padding: 15px;">
                                <i class="fas fa-save"></i> Создать проект
                            </button>
                        </form>
                    </div>
                `;
            }
            break;
            
        case 'team':
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>Команда</h2>
                    ${currentRole === 'manager' ? '<button class="btn-primary" onclick="inviteEmployee()"><i class="fas fa-user-plus"></i> Пригласить</button>' : ''}
                </div>
                <div class="search-box" style="margin-bottom: 20px;">
                    <i class="fas fa-search"></i>
                    <input type="text" id="teamSearch" placeholder="Поиск по сотрудникам..." onkeyup="searchTeam()">
                </div>
                <div class="team-grid" id="team-container">
                    ${renderTeam()}
                </div>
            `;
            break;
            
        case 'reports':
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>Отчеты</h2>
                    <button class="btn-primary" onclick="createCustomReport()">
                        <i class="fas fa-plus"></i> Создать отчет
                    </button>
                </div>
                <div class="reports-grid">
                    <div class="report-card" onclick="generateReport('project')">
                        <i class="fas fa-file-alt report-icon"></i>
                        <h4>Отчет по проектам</h4>
                        <p>Детальный отчет по всем проектам с задачами и документами</p>
                        <div class="report-footer">
                            <span class="report-date">За текущий месяц</span>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    
                    <div class="report-card" onclick="generateReport('tasks')">
                        <i class="fas fa-tasks report-icon"></i>
                        <h4>Отчет по задачам</h4>
                        <p>Статистика выполнения задач и загрузки сотрудников</p>
                        <div class="report-footer">
                            <span class="report-date">За неделю</span>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    
                    <div class="report-card" onclick="generateReport('finance')">
                        <i class="fas fa-chart-line report-icon"></i>
                        <h4>Финансовый отчет</h4>
                        <p>Анализ бюджета, расходов и прибыли по проектам</p>
                        <div class="report-footer">
                            <span class="report-date">За месяц</span>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    
                    <div class="report-card" onclick="generateReport('time')">
                        <i class="fas fa-clock report-icon"></i>
                        <h4>Учет рабочего времени</h4>
                        <p>Сводка по затраченным часам сотрудников</p>
                        <div class="report-footer">
                            <span class="report-date">За неделю</span>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    
                    <div class="report-card" onclick="generateReport('acts')">
                        <i class="fas fa-file-signature report-icon"></i>
                        <h4>Акты выполненных работ</h4>
                        <p>Все акты за период с статусами оплаты</p>
                        <div class="report-footer">
                            <span class="report-date">За март 2025</span>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    
                    <div class="report-card" onclick="generateReport('efficiency')">
                        <i class="fas fa-chart-pie report-icon"></i>
                        <h4>Эффективность</h4>
                        <p>KPI сотрудников и выполнение планов</p>
                        <div class="report-footer">
                            <span class="report-date">За квартал</span>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'analytics':
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>Аналитика</h2>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                    <div class="card">
                        <h3>Статистика проектов</h3>
                        <div style="margin-top: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Всего проектов</span>
                                <span style="font-weight: 600;">${projects.length}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Активные проекты</span>
                                <span style="font-weight: 600;">${projects.filter(p => p.status === 'active').length}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>На паузе</span>
                                <span style="font-weight: 600;">${projects.filter(p => p.status === 'pause').length}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>В планировании</span>
                                <span style="font-weight: 600;">${projects.filter(p => p.status === 'planning').length}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Средний прогресс</span>
                                <span style="font-weight: 600;">${Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3>Финансовая статистика</h3>
                        <div style="margin-top: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Общий бюджет</span>
                                <span style="font-weight: 600;">${(projects.reduce((sum, p) => sum + p.budget, 0) / 1000000).toFixed(1)} млн ₽</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Потрачено</span>
                                <span style="font-weight: 600;">${(projects.reduce((sum, p) => sum + p.spent, 0) / 1000000).toFixed(1)} млн ₽</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Остаток</span>
                                <span style="font-weight: 600;">${((projects.reduce((sum, p) => sum + p.budget, 0) - projects.reduce((sum, p) => sum + p.spent, 0)) / 1000000).toFixed(1)} млн ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card" style="margin-top: 20px;">
                    <h3>Выполнение задач</h3>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 20px;">
                        <div style="text-align: center;">
                            <div style="font-size: 24px; font-weight: 600; color: #6b7280;">${tasks.filter(t => t.status === 'todo').length}</div>
                            <div style="font-size: 14px;">К выполнению</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 24px; font-weight: 600; color: #f97316;">${tasks.filter(t => t.status === 'inprogress').length}</div>
                            <div style="font-size: 14px;">В работе</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 24px; font-weight: 600; color: #8b5cf6;">${tasks.filter(t => t.status === 'review').length}</div>
                            <div style="font-size: 14px;">На проверке</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 24px; font-weight: 600; color: #10b981;">${tasks.filter(t => t.status === 'done').length}</div>
                            <div style="font-size: 14px;">Выполнено</div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'finance':
            const totalSum = acts.reduce((sum, a) => sum + a.sum, 0);
            const paidSum = acts.filter(a => a.status === 'paid').reduce((sum, a) => sum + a.sum, 0);
            
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>Финансы</h2>
                    <button class="btn-primary" onclick="exportFinance()">
                        <i class="fas fa-file-excel"></i> Экспорт
                    </button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px;">
                    <div class="stat-card">
                        <i class="fas fa-ruble-sign stat-icon green"></i>
                        <div>
                            <div class="stat-value">${(totalSum / 1000000).toFixed(1)} млн ₽</div>
                            <div class="stat-label">Общая сумма</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <i class="fas fa-check-circle stat-icon blue"></i>
                        <div>
                            <div class="stat-value">${(paidSum / 1000000).toFixed(1)} млн ₽</div>
                            <div class="stat-label">Оплачено</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <i class="fas fa-clock stat-icon orange"></i>
                        <div>
                            <div class="stat-value">${((totalSum - paidSum) / 1000000).toFixed(1)} млн ₽</div>
                            <div class="stat-label">Ожидает</div>
                        </div>
                    </div>
                </div>
                
                <div class="search-box" style="margin-bottom: 20px;">
                    <i class="fas fa-search"></i>
                    <input type="text" id="financeSearch" placeholder="Поиск по актам..." onkeyup="searchActs()">
                </div>
                
                <div class="finance-grid" id="acts-container">
                    ${renderActs()}
                </div>
            `;
            break;
            
        case 'acts':
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>Акты выполненных работ</h2>
                    <button class="btn-primary" onclick="createAct()">
                        <i class="fas fa-plus"></i> Создать акт
                    </button>
                </div>
                
                <div class="search-box" style="margin-bottom: 20px;">
                    <i class="fas fa-search"></i>
                    <input type="text" id="actsSearch" placeholder="Поиск по актам..." onkeyup="searchActs()">
                </div>
                
                <div class="finance-grid" id="acts-container">
                    ${renderActs()}
                </div>
            `;
            break;
            
        case 'kpi':
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>KPI компании</h2>
                </div>
                
                <div class="kpi-grid">
                    <div class="kpi-card">
                        <div class="kpi-value">${Math.round(tasks.filter(t => t.status === 'done').length / tasks.length * 100)}%</div>
                        <div class="kpi-label">Выполнение задач</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-value">${projects.filter(p => p.status === 'active').length}</div>
                        <div class="kpi-label">Активных проектов</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-value">${employees.length}</div>
                        <div class="kpi-label">Сотрудников</div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;">
                    <div class="card">
                        <h3>Лучшие сотрудники</h3>
                        ${employees.filter(e => e.role === 'Прораб').sort((a, b) => b.efficiency - a.efficiency).slice(0, 3).map(emp => `
                            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                                <span>${emp.name}</span>
                                <span style="color: #10b981;">${emp.efficiency}%</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="card">
                        <h3>Ближайшие дедлайны</h3>
                        ${tasks.filter(t => t.status !== 'done').sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).slice(0, 3).map(task => `
                            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                                <span>${task.title}</span>
                                <span style="color: #f97316;">${formatDate(task.deadline)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
            
        case 'timesheet':
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>Учет рабочего времени</h2>
                    <button class="btn-primary" onclick="addTimeEntry()">
                        <i class="fas fa-plus"></i> Добавить запись
                    </button>
                </div>
                
                <div class="card">
                    <h3>Эта неделя</h3>
                    <div style="margin-top: 20px;">
                        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; text-align: center; font-weight: 500;">
                            <div>Пн</div>
                            <div>Вт</div>
                            <div>Ср</div>
                            <div>Чт</div>
                            <div>Пт</div>
                            <div>Сб</div>
                            <div>Вс</div>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; margin-top: 10px;">
                            <div class="stat-card" style="padding: 10px; text-align: center;">8ч</div>
                            <div class="stat-card" style="padding: 10px; text-align: center;">8ч</div>
                            <div class="stat-card" style="padding: 10px; text-align: center;">7ч</div>
                            <div class="stat-card" style="padding: 10px; text-align: center;">8ч</div>
                            <div class="stat-card" style="padding: 10px; text-align: center;">6ч</div>
                            <div class="stat-card" style="padding: 10px; text-align: center; background: #f3f4f6;">0ч</div>
                            <div class="stat-card" style="padding: 10px; text-align: center; background: #f3f4f6;">0ч</div>
                        </div>
                    </div>
                    
                    <h3 style="margin-top: 30px;">Последние записи</h3>
                    <div style="margin-top: 15px;">
                        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                            <span><i class="fas fa-tasks"></i> ЖК "Восход" - Замеры</span>
                            <span>8 часов</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                            <span><i class="fas fa-tasks"></i> Коттедж "Берег" - Материалы</span>
                            <span>6 часов</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                            <span><i class="fas fa-tasks"></i> Ремонт офиса - Стяжка</span>
                            <span>4 часа</span>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'documents':
            newPage.innerHTML = `
                <div class="page-header">
                    <h2>Документы</h2>
                    <button class="btn-primary" onclick="uploadDocument()">
                        <i class="fas fa-upload"></i> Загрузить
                    </button>
                </div>
                <div class="search-box" style="margin-bottom: 20px;">
                    <i class="fas fa-search"></i>
                    <input type="text" id="documentSearch" placeholder="Поиск по документам..." onkeyup="searchDocuments()">
                </div>
                <div class="documents-grid" id="documents-container">
                    ${renderDocuments()}
                </div>
            `;
            break;
    }
    
    content.appendChild(newPage);
}

// Функции для рендеринга списков
function renderProjects() {
    return projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h4>${project.name}</h4>
                <span class="project-status status-${project.status}">
                    ${project.status === 'active' ? 'Активен' : project.status === 'pause' ? 'На паузе' : 'Планирование'}
                </span>
            </div>
            <p class="project-address"><i class="fas fa-map-marker-alt"></i> ${project.address}</p>
            <p class="project-client"><i class="fas fa-user"></i> ${project.client}</p>
            <div class="project-progress">
                <div class="progress-info">
                    <span>Прогресс</span>
                    <span>${project.progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${project.progress}%"></div>
                </div>
            </div>
            <div class="project-meta">
                <span><i class="fas fa-tasks"></i> ${project.tasksCompleted}/${project.tasks} задач</span>
                <span><i class="fas fa-users"></i> ${project.workers} чел</span>
                <span><i class="fas fa-ruble-sign"></i> ${(project.budget / 1000000).toFixed(1)} млн</span>
            </div>
            <div class="project-footer">
                <span class="project-date">до ${formatDate(project.deadline)}</span>
                <div>
                    ${currentRole === 'manager' ? `<button class="btn-icon" onclick="editProject(${project.id})" title="Редактировать"><i class="fas fa-edit"></i></button>` : ''}
                    <button class="btn-icon" onclick="viewProjectDetails(${project.id})" title="Подробнее"><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTasks(taskList) {
    return taskList.map(task => `
        <div class="task-item">
            <div class="task-checkbox ${task.status === 'done' ? 'checked' : ''}" onclick="toggleTaskStatus(${task.id})">
                ${task.status === 'done' ? '<i class="fas fa-check"></i>' : ''}
            </div>
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-meta">
                    <span class="task-project">${task.project}</span>
                    <span class="task-deadline ${isOverdue(task.deadline) && task.status !== 'done' ? 'overdue' : ''}">
                        <i class="fas fa-calendar"></i> ${formatDate(task.deadline)}
                    </span>
                    <span class="task-priority priority-${task.priority}">
                        ${task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                    </span>
                    <span><i class="fas fa-user"></i> ${task.assignee}</span>
                </div>
            </div>
            <div>
                ${currentRole === 'manager' ? `<button class="btn-icon" onclick="editTask(${task.id})" title="Редактировать"><i class="fas fa-edit"></i></button>` : ''}
                <button class="btn-icon" onclick="viewTaskDetails(${task.id})" title="Подробнее"><i class="fas fa-eye"></i></button>
            </div>
        </div>
    `).join('');
}

function renderTeam() {
    return employees.map(emp => `
        <div class="team-card">
            <i class="fas ${emp.avatar === '👨‍🔧' ? 'fa-hard-hat' : emp.avatar === '👩‍💼' ? 'fa-user-tie' : emp.avatar === '👨‍💼' ? 'fa-crown' : 'fa-calculator'}" style="font-size: 40px;"></i>
            <h4>${emp.name}</h4>
            <p>${emp.role}</p>
            <div style="font-size: 12px; color: #6b7280; margin: 10px 0;">
                <div><i class="fas fa-phone"></i> ${emp.phone}</div>
                <div><i class="fas fa-envelope"></i> ${emp.email}</div>
            </div>
            <div class="team-stats">
                <span><i class="fas fa-tasks"></i> ${emp.tasks} задач</span>
                <span><i class="fas fa-chart-line"></i> ${emp.efficiency}%</span>
            </div>
            ${currentRole === 'manager' ? `
                <button class="btn-primary" style="margin-top: 15px; width: 100%;" onclick="assignTaskTo('${emp.id}')">
                    <i class="fas fa-plus"></i> Назначить задачу
                </button>
            ` : ''}
        </div>
    `).join('');
}

function renderDocuments() {
    return documents.map(doc => `
        <div class="document-card">
            <i class="fas fa-file-${doc.type} document-icon ${doc.type}"></i>
            <div class="document-info">
                <div class="document-name">${doc.name}</div>
                <div class="document-meta">
                    <span>Версия ${doc.version}</span>
                    <span>${doc.size}</span>
                    <span>${doc.date}</span>
                </div>
                <div style="font-size: 11px; color: #9ca3af;">${doc.author} • ${doc.project}</div>
            </div>
            <div class="document-actions">
                <button class="btn-icon" onclick="downloadDocument(${doc.id})" title="Скачать"><i class="fas fa-download"></i></button>
                <button class="btn-icon" onclick="showDocumentVersions(${doc.id})" title="История"><i class="fas fa-history"></i></button>
                <button class="btn-icon" onclick="shareDocument(${doc.id})" title="Поделиться"><i class="fas fa-share-alt"></i></button>
            </div>
        </div>
    `).join('');
}

function renderActs() {
    return acts.map(act => `
        <div class="act-card">
            <div class="act-header">
                <span class="act-number">${act.number}</span>
                <span class="act-date">${act.date}</span>
            </div>
            <div class="act-project">${act.project}</div>
            <div class="act-type">${act.type}</div>
            <div class="act-sum">${act.sum.toLocaleString()} ₽</div>
            <div class="act-footer">
                <span class="act-status ${act.status}">
                    ${act.status === 'paid' ? 'Оплачено' : 'Ожидание'}
                </span>
                <div>
                    <button class="btn-icon" onclick="markAsPaid(${act.id})" title="Отметить как оплачено"><i class="fas fa-check-circle"></i></button>
                    <button class="btn-icon" onclick="downloadAct(${act.id})" title="Скачать"><i class="fas fa-download"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

// Функции поиска
window.searchProjects = function() {
    const searchInput = document.getElementById('projectSearch');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProjects = projects.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.address.toLowerCase().includes(searchTerm) ||
        p.client.toLowerCase().includes(searchTerm) ||
        p.manager.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('projects-container');
    if (container) {
        container.innerHTML = filteredProjects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <h4>${project.name}</h4>
                    <span class="project-status status-${project.status}">
                        ${project.status === 'active' ? 'Активен' : project.status === 'pause' ? 'На паузе' : 'Планирование'}
                    </span>
                </div>
                <p class="project-address"><i class="fas fa-map-marker-alt"></i> ${project.address}</p>
                <p class="project-client"><i class="fas fa-user"></i> ${project.client}</p>
                <div class="project-progress">
                    <div class="progress-info">
                        <span>Прогресс</span>
                        <span>${project.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${project.progress}%"></div>
                    </div>
                </div>
                <div class="project-meta">
                    <span><i class="fas fa-tasks"></i> ${project.tasksCompleted}/${project.tasks} задач</span>
                    <span><i class="fas fa-users"></i> ${project.workers} чел</span>
                    <span><i class="fas fa-ruble-sign"></i> ${(project.budget / 1000000).toFixed(1)} млн</span>
                </div>
                <div class="project-footer">
                    <span class="project-date">до ${formatDate(project.deadline)}</span>
                    <div>
                        ${currentRole === 'manager' ? `<button class="btn-icon" onclick="editProject(${project.id})" title="Редактировать"><i class="fas fa-edit"></i></button>` : ''}
                        <button class="btn-icon" onclick="viewProjectDetails(${project.id})" title="Подробнее"><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
        
        if (filteredProjects.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 40px; color: #6b7280;">Ничего не найдено</div>';
        }
    }
};

window.searchTasks = function() {
    const searchInput = document.getElementById('taskSearch');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const baseList = currentRole === 'prorab' 
        ? tasks.filter(t => t.assignee === 'Иван Петров') 
        : tasks;
    
    const filteredTasks = baseList.filter(t => 
        t.title.toLowerCase().includes(searchTerm) ||
        t.project.toLowerCase().includes(searchTerm) ||
        t.assignee.toLowerCase().includes(searchTerm) ||
        t.description.toLowerCase().includes(searchTerm)
    );
    
    const tasksList = document.getElementById('tasks-list');
    if (tasksList) {
        tasksList.innerHTML = renderTasks(filteredTasks);
        
        if (filteredTasks.length === 0) {
            tasksList.innerHTML = '<div style="text-align: center; padding: 40px; color: #6b7280;">Ничего не найдено</div>';
        }
    }
};

window.searchTeam = function() {
    const searchInput = document.getElementById('teamSearch');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const filteredEmployees = employees.filter(e => 
        e.name.toLowerCase().includes(searchTerm) ||
        e.role.toLowerCase().includes(searchTerm) ||
        e.email.toLowerCase().includes(searchTerm) ||
        e.project.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('team-container');
    if (container) {
        container.innerHTML = filteredEmployees.map(emp => `
            <div class="team-card">
                <i class="fas ${emp.avatar === '👨‍🔧' ? 'fa-hard-hat' : emp.avatar === '👩‍💼' ? 'fa-user-tie' : emp.avatar === '👨‍💼' ? 'fa-crown' : 'fa-calculator'}" style="font-size: 40px;"></i>
                <h4>${emp.name}</h4>
                <p>${emp.role}</p>
                <div style="font-size: 12px; color: #6b7280; margin: 10px 0;">
                    <div><i class="fas fa-phone"></i> ${emp.phone}</div>
                    <div><i class="fas fa-envelope"></i> ${emp.email}</div>
                </div>
                <div class="team-stats">
                    <span><i class="fas fa-tasks"></i> ${emp.tasks} задач</span>
                    <span><i class="fas fa-chart-line"></i> ${emp.efficiency}%</span>
                </div>
                ${currentRole === 'manager' ? `
                    <button class="btn-primary" style="margin-top: 15px; width: 100%;" onclick="assignTaskTo('${emp.id}')">
                        <i class="fas fa-plus"></i> Назначить задачу
                    </button>
                ` : ''}
            </div>
        `).join('');
        
        if (filteredEmployees.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 40px; color: #6b7280;">Ничего не найдено</div>';
        }
    }
};

window.searchDocuments = function() {
    const searchInput = document.getElementById('documentSearch');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const filteredDocs = documents.filter(d => 
        d.name.toLowerCase().includes(searchTerm) ||
        d.project.toLowerCase().includes(searchTerm) ||
        d.author.toLowerCase().includes(searchTerm) ||
        d.type.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('documents-container');
    if (container) {
        container.innerHTML = filteredDocs.map(doc => `
            <div class="document-card">
                <i class="fas fa-file-${doc.type} document-icon ${doc.type}"></i>
                <div class="document-info">
                    <div class="document-name">${doc.name}</div>
                    <div class="document-meta">
                        <span>Версия ${doc.version}</span>
                        <span>${doc.size}</span>
                        <span>${doc.date}</span>
                    </div>
                    <div style="font-size: 11px; color: #9ca3af;">${doc.author} • ${doc.project}</div>
                </div>
                <div class="document-actions">
                    <button class="btn-icon" onclick="downloadDocument(${doc.id})" title="Скачать"><i class="fas fa-download"></i></button>
                    <button class="btn-icon" onclick="showDocumentVersions(${doc.id})" title="История"><i class="fas fa-history"></i></button>
                    <button class="btn-icon" onclick="shareDocument(${doc.id})" title="Поделиться"><i class="fas fa-share-alt"></i></button>
                </div>
            </div>
        `).join('');
        
        if (filteredDocs.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 40px; color: #6b7280;">Ничего не найдено</div>';
        }
    }
};

window.searchActs = function() {
    const searchInput = document.getElementById('actsSearch') || document.getElementById('financeSearch');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const filteredActs = acts.filter(a => 
        a.number.toLowerCase().includes(searchTerm) ||
        a.project.toLowerCase().includes(searchTerm) ||
        a.type.toLowerCase().includes(searchTerm) ||
        a.status.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('acts-container');
    if (container) {
        container.innerHTML = filteredActs.map(act => `
            <div class="act-card">
                <div class="act-header">
                    <span class="act-number">${act.number}</span>
                    <span class="act-date">${act.date}</span>
                </div>
                <div class="act-project">${act.project}</div>
                <div class="act-type">${act.type}</div>
                <div class="act-sum">${act.sum.toLocaleString()} ₽</div>
                <div class="act-footer">
                    <span class="act-status ${act.status}">
                        ${act.status === 'paid' ? 'Оплачено' : 'Ожидание'}
                    </span>
                    <div>
                        <button class="btn-icon" onclick="markAsPaid(${act.id})" title="Отметить как оплачено"><i class="fas fa-check-circle"></i></button>
                        <button class="btn-icon" onclick="downloadAct(${act.id})" title="Скачать"><i class="fas fa-download"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
        
        if (filteredActs.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 40px; color: #6b7280;">Ничего не найдено</div>';
        }
    }
};

// Функции для работы с проектами
window.createNewProject = function() {
    if (currentRole === 'manager') {
        // Переходим на страницу создания проекта
        const newProjectMenuItem = document.querySelector('[data-page="new-project"]');
        if (newProjectMenuItem) {
            newProjectMenuItem.click();
        }
    }
};

window.createProject = function(event) {
    event.preventDefault();
    
    const newProject = {
        id: projects.length + 1,
        name: document.getElementById('project-name').value,
        address: document.getElementById('project-address').value,
        client: document.getElementById('project-client').value,
        status: 'planning',
        progress: 0,
        tasks: 0,
        tasksCompleted: 0,
        workers: 0,
        deadline: document.getElementById('project-deadline').value,
        budget: parseInt(document.getElementById('project-budget').value),
        spent: 0,
        startDate: document.getElementById('project-start').value,
        description: document.getElementById('project-desc').value || 'Новый проект',
        manager: 'Анна Смирнова',
        createdBy: 'manager',
        createdAt: new Date().toISOString().split('T')[0]
    };
    
    projects.push(newProject);
    showNotification(`Проект "${newProject.name}" успешно создан!`, 'success');
    
    // Обновляем все UI для всех ролей
    refreshAllUI();
    
    // Переходим к списку проектов
    setTimeout(() => {
        document.querySelector('[data-page="projects"]').click();
    }, 1500);
};

window.editProject = function(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.display = 'flex';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>Редактирование проекта: ${project.name}</h3>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <form id="edit-project-form" onsubmit="updateProject(event, ${project.id})">
                    <div class="form-group">
                        <label for="edit-project-name">Название проекта</label>
                        <input type="text" id="edit-project-name" value="${project.name}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-project-address">Адрес</label>
                        <input type="text" id="edit-project-address" value="${project.address}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-project-client">Заказчик</label>
                        <input type="text" id="edit-project-client" value="${project.client}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-project-budget">Бюджет (₽)</label>
                        <input type="number" id="edit-project-budget" value="${project.budget}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-project-deadline">Срок сдачи</label>
                        <input type="date" id="edit-project-deadline" value="${project.deadline}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-project-status">Статус</label>
                        <select id="edit-project-status">
                            <option value="active" ${project.status === 'active' ? 'selected' : ''}>Активен</option>
                            <option value="pause" ${project.status === 'pause' ? 'selected' : ''}>На паузе</option>
                            <option value="planning" ${project.status === 'planning' ? 'selected' : ''}>Планирование</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-project-desc">Описание</label>
                        <textarea id="edit-project-desc" rows="4">${project.description}</textarea>
                    </div>
                    
                    <button type="submit" class="btn-primary" style="width: 100%;">
                        <i class="fas fa-save"></i> Сохранить изменения
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

window.updateProject = function(event, projectId) {
    event.preventDefault();
    
    const project = projects.find(p => p.id === projectId);
    if (project) {
        project.name = document.getElementById('edit-project-name').value;
        project.address = document.getElementById('edit-project-address').value;
        project.client = document.getElementById('edit-project-client').value;
        project.budget = parseInt(document.getElementById('edit-project-budget').value);
        project.deadline = document.getElementById('edit-project-deadline').value;
        project.status = document.getElementById('edit-project-status').value;
        project.description = document.getElementById('edit-project-desc').value;
        
        showNotification('Проект успешно обновлен!', 'success');
        
        // Закрываем модальное окно
        event.target.closest('.modal').remove();
        
        // Обновляем все UI для всех ролей
        refreshAllUI();
    }
};

// Функции для работы с задачами
window.createNewTask = function() {
    document.getElementById('task-modal').classList.add('show');
};

window.toggleTaskStatus = function(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        if (task.status === 'done') {
            task.status = 'todo';
            showNotification(`Задача "${task.title}" возвращена в работу`, 'info');
        } else {
            task.status = 'done';
            showNotification(`Задача "${task.title}" выполнена! 🎉`, 'success');
        }
        
        // Обновляем все UI для всех ролей
        refreshAllUI();
    }
};

window.startTask = function(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task && task.status !== 'inprogress') {
        task.status = 'inprogress';
        showNotification(`Задача "${task.title}" начата`, 'info');
        refreshAllUI();
    }
};

window.editTask = function(taskId) {
    const task = tasks.find(t => t.id === taskId);
    
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.display = 'flex';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header">
                <h3>Редактирование задачи</h3>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <form id="edit-task-form" onsubmit="updateTask(event, ${task.id})">
                    <div class="form-group">
                        <label for="edit-task-title">Название задачи</label>
                        <input type="text" id="edit-task-title" value="${task.title}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-task-project">Проект</label>
                        <select id="edit-task-project">
                            ${projects.map(p => `
                                <option value="${p.name}" ${p.name === task.project ? 'selected' : ''}>${p.name}</option>
                            `).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-task-assignee">Исполнитель</label>
                        <select id="edit-task-assignee">
                            ${employees.filter(e => e.role === 'Прораб').map(e => `
                                <option value="${e.name}" ${e.name === task.assignee ? 'selected' : ''}>${e.name}</option>
                            `).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-task-deadline">Срок выполнения</label>
                        <input type="date" id="edit-task-deadline" value="${task.deadline}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-task-priority">Приоритет</label>
                        <select id="edit-task-priority">
                            <option value="high" ${task.priority === 'high' ? 'selected' : ''}>Высокий</option>
                            <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Средний</option>
                            <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Низкий</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-task-status">Статус</label>
                        <select id="edit-task-status">
                            <option value="todo" ${task.status === 'todo' ? 'selected' : ''}>К выполнению</option>
                            <option value="inprogress" ${task.status === 'inprogress' ? 'selected' : ''}>В работе</option>
                            <option value="review" ${task.status === 'review' ? 'selected' : ''}>На проверке</option>
                            <option value="done" ${task.status === 'done' ? 'selected' : ''}>Выполнено</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-task-desc">Описание</label>
                        <textarea id="edit-task-desc" rows="3">${task.description}</textarea>
                    </div>
                    
                    <button type="submit" class="btn-primary" style="width: 100%;">
                        <i class="fas fa-save"></i> Сохранить
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

window.updateTask = function(event, taskId) {
    event.preventDefault();
    
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.title = document.getElementById('edit-task-title').value;
        task.project = document.getElementById('edit-task-project').value;
        task.assignee = document.getElementById('edit-task-assignee').value;
        task.deadline = document.getElementById('edit-task-deadline').value;
        task.priority = document.getElementById('edit-task-priority').value;
        task.status = document.getElementById('edit-task-status').value;
        task.description = document.getElementById('edit-task-desc').value;
        
        showNotification('Задача обновлена!', 'success');
        
        // Закрываем модальное окно
        event.target.closest('.modal').remove();
        
        // Обновляем все UI для всех ролей
        refreshAllUI();
    }
};

window.viewTaskDetails = function(taskId) {
    const task = tasks.find(t => t.id === taskId);
    
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.display = 'flex';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header">
                <h3>Детали задачи</h3>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <p><strong>Название:</strong> ${task.title}</p>
                <p><strong>Проект:</strong> ${task.project}</p>
                <p><strong>Исполнитель:</strong> ${task.assignee}</p>
                <p><strong>Срок:</strong> ${formatDate(task.deadline)}</p>
                <p><strong>Приоритет:</strong> <span class="task-priority priority-${task.priority}">${task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}</span></p>
                <p><strong>Статус:</strong> ${task.status === 'todo' ? 'К выполнению' : task.status === 'inprogress' ? 'В работе' : task.status === 'review' ? 'На проверке' : 'Выполнено'}</p>
                <p><strong>Описание:</strong> ${task.description}</p>
                <p><strong>Создана:</strong> ${task.createdAt}</p>
                
                <button class="btn-primary" style="width: 100%; margin-top: 20px;" onclick="this.closest('.modal').remove()">
                    Закрыть
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

window.filterTasks = function(status, event) {
    // Обновляем активный фильтр
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Фильтруем задачи
    let filteredTasks = currentRole === 'prorab' 
        ? tasks.filter(t => t.assignee === 'Иван Петров')
        : tasks;
    
    if (status !== 'all') {
        filteredTasks = filteredTasks.filter(t => t.status === status);
    }
    
    const tasksList = document.getElementById('tasks-list');
    if (tasksList) {
        tasksList.innerHTML = renderTasks(filteredTasks);
    }
};

// Функции для работы с документами
window.uploadDocument = function() {
    document.getElementById('upload-modal').classList.add('show');
};

window.downloadDocument = function(docId) {
    const doc = documents.find(d => d.id === docId);
    
    // Создаем реальный файл для скачивания
    const content = doc.content || `Это тестовый файл: ${doc.name}\nВерсия: ${doc.version}\nАвтор: ${doc.author}\nПроект: ${doc.project}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = doc.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification(`Скачивание: ${doc.name}`, 'success');
};

window.showDocumentVersions = function(docId) {
    const doc = documents.find(d => d.id === docId);
    const versions = doc.versions || [
        { version: doc.version, date: doc.date, size: doc.size, author: doc.author, comment: 'Текущая версия' }
    ];
    
    const modal = document.getElementById('versions-modal');
    const versionsList = document.getElementById('versions-list');
    
    versionsList.innerHTML = versions.map(v => `
        <div class="document-card" style="margin-bottom: 10px;">
            <i class="fas fa-file-${doc.type} document-icon ${doc.type}"></i>
            <div class="document-info">
                <div class="document-name">Версия ${v.version}</div>
                <div class="document-meta">
                    <span>${v.date}</span>
                    <span>${v.size}</span>
                    <span>${v.author}</span>
                </div>
                <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">
                    ${v.comment || ''}
                </div>
            </div>
            <button class="btn-icon" onclick="downloadVersion(${doc.id}, '${v.version}')">
                <i class="fas fa-download"></i>
            </button>
        </div>
    `).join('');
    
    modal.classList.add('show');
};

window.shareDocument = function(docId) {
    const doc = documents.find(d => d.id === docId);
    
    // Создаем ссылку для шаринга
    const shareUrl = window.location.href + '#share-' + doc.id;
    navigator.clipboard.writeText(shareUrl).then(() => {
        showNotification('Ссылка на документ скопирована в буфер обмена', 'success');
    }).catch(() => {
        showNotification('Ссылка на документ: ' + shareUrl, 'info');
    });
};

window.downloadVersion = function(docId, version) {
    const doc = documents.find(d => d.id === docId);
    if (doc) {
        const versionData = doc.versions.find(v => v.version === version) || { version: version };
        const content = `Версия ${version} документа ${doc.name}\nАвтор: ${versionData.author}\nДата: ${versionData.date}\nКомментарий: ${versionData.comment || ''}`;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `v${version}_${doc.name}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showNotification(`Скачивание версии ${version}`, 'success');
    }
};

// Функции для работы с отчетами
window.generateReport = function(type) {
    const reports = {
        project: 'Отчет по проектам',
        tasks: 'Отчет по задачам',
        finance: 'Финансовый отчет',
        time: 'Отчет по времени',
        acts: 'Акты выполненных работ',
        efficiency: 'Отчет по эффективности'
    };
    
    showNotification(`Формируется ${reports[type]}...`, 'info');
    
    // Создаем реальный файл отчета
    setTimeout(() => {
        const reportData = generateReportData(type);
        const blob = new Blob([reportData], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `report_${type}_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showNotification(`✅ ${reports[type]} готов к скачиванию`, 'success');
    }, 2000);
};

function generateReportData(type) {
    const date = new Date().toLocaleDateString('ru-RU');
    
    switch(type) {
        case 'project':
            return `ОТЧЕТ ПО ПРОЕКТАМ
Дата: ${date}
Всего проектов: ${projects.length}

ДЕТАЛЬНАЯ ИНФОРМАЦИЯ:
${projects.map(p => `
Проект: ${p.name}
├─ Адрес: ${p.address}
├─ Заказчик: ${p.client}
├─ Статус: ${p.status === 'active' ? 'Активен' : p.status === 'pause' ? 'На паузе' : 'Планирование'}
├─ Бюджет: ${p.budget.toLocaleString()} ₽
├─ Потрачено: ${p.spent.toLocaleString()} ₽
├─ Прогресс: ${p.progress}%
├─ Задачи: ${p.tasksCompleted}/${p.tasks}
└─ Срок: до ${p.deadline}
`).join('\n')}
`;
            
        case 'tasks':
            return `ОТЧЕТ ПО ЗАДАЧАМ
Дата: ${date}
Всего задач: ${tasks.length}

СТАТИСТИКА:
К выполнению: ${tasks.filter(t => t.status === 'todo').length}
В работе: ${tasks.filter(t => t.status === 'inprogress').length}
На проверке: ${tasks.filter(t => t.status === 'review').length}
Выполнено: ${tasks.filter(t => t.status === 'done').length}
Просрочено: ${tasks.filter(t => isOverdue(t.deadline) && t.status !== 'done').length}

ЗАДАЧИ ПО ИСПОЛНИТЕЛЯМ:
${employees.map(emp => `
${emp.name}: ${tasks.filter(t => t.assignee === emp.name && t.status !== 'done').length} активных задач
`).join('')}
`;
            
        case 'finance':
            const totalSum = acts.reduce((sum, a) => sum + a.sum, 0);
            const paidSum = acts.filter(a => a.status === 'paid').reduce((sum, a) => sum + a.sum, 0);
            return `ФИНАНСОВЫЙ ОТЧЕТ
Дата: ${date}

АКТЫ:
Общая сумма: ${totalSum.toLocaleString()} ₽
Оплачено: ${paidSum.toLocaleString()} ₽
Ожидает оплаты: ${(totalSum - paidSum).toLocaleString()} ₽

ПРОЕКТЫ:
Общий бюджет: ${projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()} ₽
Потрачено всего: ${projects.reduce((sum, p) => sum + p.spent, 0).toLocaleString()} ₽

ДЕТАЛЬНО ПО ПРОЕКТАМ:
${projects.map(p => `
${p.name}:
├─ Бюджет: ${p.budget.toLocaleString()} ₽
├─ Потрачено: ${p.spent.toLocaleString()} ₽
└─ Остаток: ${(p.budget - p.spent).toLocaleString()} ₽
`).join('\n')}
`;
            
        default:
            return `Отчет сгенерирован: ${date}`;
    }
}

window.createCustomReport = function() {
    showNotification('Конструктор отчетов', 'info');
};

// Функции для работы с командой
window.inviteEmployee = function() {
    showNotification('Форма приглашения сотрудника', 'info');
};

window.assignTaskTo = function(employeeId) {
    const emp = employees.find(e => e.id === employeeId);
    const assigneeSelect = document.getElementById('task-assignee');
    if (assigneeSelect) {
        assigneeSelect.value = emp.name;
    }
    document.getElementById('task-modal').classList.add('show');
};

// Функции для работы с финансами
window.markAsPaid = function(actId) {
    const act = acts.find(a => a.id === actId);
    act.status = 'paid';
    showNotification(`Акт ${act.number} отмечен как оплаченный`, 'success');
    
    // Обновляем все UI
    refreshAllUI();
};

window.downloadAct = function(actId) {
    const act = acts.find(a => a.id === actId);
    
    const content = `АКТ ВЫПОЛНЕННЫХ РАБОТ
Номер: ${act.number}
Дата: ${act.date}
Проект: ${act.project}
Тип: ${act.type}
Сумма: ${act.sum.toLocaleString()} ₽
Статус: ${act.status === 'paid' ? 'Оплачено' : 'Ожидание'}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `act_${act.number}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification(`Скачивание акта ${act.number}`, 'success');
};

window.printAct = function(actId) {
    const act = acts.find(a => a.id === actId);
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Акт ${act.number}</title>
                <style>
                    body { font-family: Arial; padding: 40px; }
                    .act { max-width: 800px; margin: 0 auto; }
                    h1 { text-align: center; }
                    .header { display: flex; justify-content: space-between; margin-bottom: 40px; }
                    .footer { margin-top: 60px; }
                </style>
            </head>
            <body>
                <div class="act">
                    <h1>АКТ ВЫПОЛНЕННЫХ РАБОТ №${act.number}</h1>
                    <div class="header">
                        <div>Дата: ${act.date}</div>
                        <div>Проект: ${act.project}</div>
                    </div>
                    <p>Тип: ${act.type}</p>
                    <p>Сумма: ${act.sum.toLocaleString()} ₽</p>
                    <div class="footer">
                        <p>___________________ Подпись</p>
                    </div>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
};

window.createAct = function() {
    showNotification('Создание нового акта', 'info');
};

window.exportFinance = function() {
    const content = `ФИНАНСОВЫЙ ЭКСПОРТ
Дата экспорта: ${new Date().toLocaleDateString('ru-RU')}

АКТЫ:
${acts.map(a => `${a.number},${a.date},${a.project},${a.sum},${a.status}`).join('\n')}

ПРОЕКТЫ:
${projects.map(p => `${p.name},${p.budget},${p.spent},${p.status}`).join('\n')}

ЗАДАЧИ:
${tasks.map(t => `${t.title},${t.project},${t.assignee},${t.status}`).join('\n')}
`;
    
    const blob = new Blob([content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `finance_export_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Экспорт финансовых данных завершен', 'success');
};

// Функции для учета времени
window.addTimeEntry = function() {
    showNotification('Добавление записи времени', 'info');
};

// Модальные окна
window.closeTaskModal = function() {
    document.getElementById('task-modal').classList.remove('show');
};

window.closeUploadModal = function() {
    document.getElementById('upload-modal').classList.remove('show');
    document.getElementById('version-info').style.display = 'none';
};

window.closeModal = function() {
    document.getElementById('versions-modal').classList.remove('show');
};

window.handleFileSelect = function(input) {
    if (input.files.length > 0) {
        const fileName = input.files[0].name;
        const existingDoc = documents.find(d => d.name === fileName);
        
        const versionInfo = document.getElementById('version-info');
        if (existingDoc) {
            versionInfo.style.display = 'flex';
            versionInfo.innerHTML = `
                <i class="fas fa-info-circle"></i>
                <span>Файл "${fileName}" уже существует. Будет создана новая версия (${(parseFloat(existingDoc.version) + 0.1).toFixed(1)})</span>
            `;
        } else {
            versionInfo.style.display = 'none';
        }
    }
};

// Обработчики форм
document.getElementById('task-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newTask = {
        id: tasks.length + 1,
        title: document.getElementById('task-title').value,
        project: document.getElementById('task-project').value,
        projectId: projects.find(p => p.name === document.getElementById('task-project').value)?.id || 1,
        deadline: document.getElementById('task-deadline').value,
        priority: 'medium',
        status: 'todo',
        description: document.getElementById('task-desc').value,
        assignee: document.getElementById('task-assignee').value,
        assigneeId: employees.find(e => e.name === document.getElementById('task-assignee').value)?.id || 'prorab',
        createdAt: new Date().toISOString().split('T')[0]
    };
    
    tasks.push(newTask);
    closeTaskModal();
    showNotification('Задача успешно создана!', 'success');
    this.reset();
    
    // Обновляем все UI
    refreshAllUI();
});

document.getElementById('upload-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('doc-file');
    const project = document.getElementById('doc-project').value;
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const existingDoc = documents.find(d => d.name === file.name);
        
        // Читаем файл как текст для демонстрации
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            
            if (existingDoc) {
                // Создаем новую версию
                const newVersion = (parseFloat(existingDoc.version) + 0.1).toFixed(1);
                const newVersionData = {
                    version: newVersion,
                    date: new Date().toLocaleDateString('ru-RU'),
                    size: (file.size / 1024 / 1024).toFixed(1) + ' МБ',
                    author: userProfiles[currentRole].name,
                    comment: 'Новая версия'
                };
                
                existingDoc.versions.unshift(newVersionData);
                existingDoc.version = newVersion;
                existingDoc.size = newVersionData.size;
                existingDoc.date = newVersionData.date;
                existingDoc.author = newVersionData.author;
                existingDoc.content = fileContent;
            } else {
                // Создаем новый документ
                const fileExt = file.name.split('.').pop();
                const docType = fileExt === 'pdf' ? 'pdf' : fileExt === 'jpg' || fileExt === 'png' ? 'image' : fileExt;
                
                const newDoc = {
                    id: documents.length + 1,
                    name: file.name,
                    project: project,
                    version: '1.0',
                    size: (file.size / 1024 / 1024).toFixed(1) + ' МБ',
                    date: new Date().toLocaleDateString('ru-RU'),
                    type: docType,
                    author: userProfiles[currentRole].name,
                    content: fileContent,
                    versions: [
                        {
                            version: '1.0',
                            date: new Date().toLocaleDateString('ru-RU'),
                            size: (file.size / 1024 / 1024).toFixed(1) + ' МБ',
                            author: userProfiles[currentRole].name,
                            comment: 'Первая версия'
                        }
                    ]
                };
                
                documents.push(newDoc);
            }
            
            showNotification(`Файл "${file.name}" успешно загружен!`, 'success');
            
            // Обновляем UI для всех ролей
            refreshAllUI();
        };
        
        reader.readAsText(file);
    }
    
    closeUploadModal();
    this.reset();
});

// Вспомогательные функции
function isOverdue(deadline) {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate < today;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 2000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Добавляем стили для поиска
const style = document.createElement('style');
style.textContent = `
    .search-box {
        position: relative;
        margin-bottom: 20px;
    }
    
    .search-box i {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #9ca3af;
    }
    
    .search-box input {
        width: 100%;
        padding: 12px 12px 12px 40px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        transition: all 0.2s;
    }
    
    .search-box input:focus {
        outline: none;
        border-color: #f97316;
        box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
    }
    
    .task-deadline.overdue {
        color: #ef4444;
        font-weight: 500;
    }
`;

document.head.appendChild(style);

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    updateUIForRole();
    
    // Закрытие модалок по клику вне
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
        }
    };
});
*/
