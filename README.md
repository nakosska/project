
-- 
    
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
