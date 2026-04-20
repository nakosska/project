-- Удаляем базу если есть (осторожно!)
DROP DATABASE IF EXISTS project_manager;

-- Создаем базу данных
CREATE DATABASE project_manager CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Выбираем базу
USE project_manager;

-- Таблица пользователей
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('Прораб', 'Менеджер', 'Директор', 'Бухгалтер') NOT NULL,
    phone VARCHAR(20),
    avatar VARCHAR(255) DEFAULT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица проектов
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    address VARCHAR(300),
    client VARCHAR(200),
    description TEXT,
    status ENUM('planning', 'active', 'pause', 'completed') DEFAULT 'planning',
    progress INT DEFAULT 0,
    budget DECIMAL(15, 2) DEFAULT 0,
    spent DECIMAL(15, 2) DEFAULT 0,
    deadline DATE,
    start_date DATE,
    tasks_total INT DEFAULT 0,
    tasks_completed INT DEFAULT 0,
    workers INT DEFAULT 0,
    manager_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (manager_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица задач
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    project_id INT NOT NULL,
    assignee_id INT,
    created_by INT,
    deadline DATE,
    status ENUM('todo', 'inprogress', 'review', 'done') DEFAULT 'todo',
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (assignee_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица комментариев к задачам
CREATE TABLE task_comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_id INT NOT NULL,
    user_id INT NOT NULL,
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица фотографий к задачам
CREATE TABLE task_photos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_id INT NOT NULL,
    user_id INT NOT NULL,
    photo_path VARCHAR(500) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица актов
CREATE TABLE acts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    project_id INT NOT NULL,
    sum DECIMAL(15, 2) NOT NULL,
    status ENUM('waiting', 'paid', 'cancelled') DEFAULT 'waiting',
    type VARCHAR(100),
    file_path VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица уведомлений
CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type VARCHAR(50),
    title VARCHAR(200) NOT NULL,
    message TEXT,
    link VARCHAR(500),
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица отчетов
CREATE TABLE reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type VARCHAR(50),
    title VARCHAR(200),
    file_path VARCHAR(500),
    filters TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица API токенов
CREATE TABLE api_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    last_used TIMESTAMP NULL,
    expires_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица логов активности
CREATE TABLE activity_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(50),
    entity_type VARCHAR(50),
    entity_id INT,
    details TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Вставка тестовых пользователей (пароль: 123)
INSERT INTO users (name, email, password, role, phone) VALUES
('Иван Петров', 'prorab@test.ru', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Прораб', '+79991234567'),
('Анна Смирнова', 'manager@test.ru', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Менеджер', '+79995678901'),
('Алексей Морозов', 'director@test.ru', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Директор', '+79996789012'),
('Елена Соколова', 'buh@test.ru', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Бухгалтер', '+79997890123');

-- Вставка тестовых проектов
INSERT INTO projects (name, address, client, status, progress, budget, spent, deadline, start_date, manager_id) VALUES
('ЖК Восход', 'ул. Ленина, 15', 'ООО СтройИнвест', 'active', 75, 1500000, 1125000, '2025-06-01', '2025-01-15', 2),
('Коттедж Берег', 'ул. Береговая, 7', 'Иванов А.А.', 'active', 30, 850000, 255000, '2025-07-01', '2025-02-01', 2),
('Ремонт офиса', 'БЦ Плаза, 3 этаж', 'ООО ТехноСервис', 'pause', 60, 2100000, 1260000, '2025-05-10', '2025-01-20', 2);

-- Вставка тестовых задач
INSERT INTO tasks (title, description, project_id, assignee_id, created_by, deadline, status, priority) VALUES
('Сделать замеры', 'Провести замеры помещений', 1, 1, 2, '2025-04-20', 'todo', 'high'),
('Завезти материалы', 'Доставка стройматериалов на объект', 2, 1, 2, '2025-04-18', 'inprogress', 'high'),
('Сдать акт', 'Подготовить и сдать акт выполненных работ', 3, 1, 2, '2025-04-25', 'todo', 'medium'),
('Проверить стяжку', 'Проверка качества стяжки пола', 1, 1, 2, '2025-04-19', 'review', 'medium'),
('Обновить чертежи', 'Внести изменения в чертежи', 2, 1, 2, '2025-04-22', 'todo', 'low');

-- Обновляем счетчики задач в проектах
UPDATE projects SET tasks_total = 2, tasks_completed = 0 WHERE id = 1;
UPDATE projects SET tasks_total = 2, tasks_completed = 0 WHERE id = 2;
UPDATE projects SET tasks_total = 1, tasks_completed = 0 WHERE id = 3;

-- Вставка тестовых актов
INSERT INTO acts (number, date, project_id, sum, status, type) VALUES
('АКТ-2025-001', '2025-03-01', 1, 450000, 'paid', 'Акт выполненных работ'),
('АКТ-2025-002', '2025-02-28', 2, 280000, 'waiting', 'Акт приема-передачи'),
('АКТ-2025-003', '2025-02-25', 3, 730000, 'paid', 'Акт выполненных работ');
