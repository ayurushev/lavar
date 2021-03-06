app.controller('ProjectsController', ['$scope', function($scope) {
	$scope.categories = ['Web', 'Windows', 'Mobile', 'Design'];
	$scope.categoryFilter;

	$scope.applyCategoryFilter = function(index) {
		$scope.categoryFilter = index;
	}

	$scope.projects = [
		{
			category: 0,
			name: 'Utility Payments',
			url: 'https://lavar.mercloud.com/p/up',
			repository: 'https://github.com/ayurushev/utilitypayments',
			ss: ['up01fs.png', 'up02fs.png', 'up03fs.png'],
			description: 'Веб-приложение (адаптировано для мобильных устройств) для ведения учета коммунальных платежей. Ведется статистика и расчет (последние - текущие). Все данные сохраняются в БД MongoDB (связка Express и Mongoose). Для авторизации пользователя используется JSON Web Token.',
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'AngularJS, AngularJS Material' },
				{ type: 'Build', value: 'Brunch' },
				{ type: 'Back-end', value: 'Node.JS, MongoDB' }
			]
		},
		{
			category: 0,
			name: 'Travel Checklist CS',
			url: 'https://lavar.mercloud.com/p/tchecklist-cs',
			repository: 'https://github.com/ayurushev/travelchecklist-cs',
			ss: ['tchecklist01fs.jpg', 'tchecklist02fs.jpg', 'tchecklist03fs.jpg'],
			description: 'Эта версия позволяет сохранять все данные в БД MongoDB (связка Express и Mongoose). Для авторизации пользователя используется JSON Web Token.',
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'AngularJS, AngularJS Material' },
				{ type: 'Build', value: 'Brunch' },
				{ type: 'Back-end', value: 'Node.JS, MongoDB' }
			]
		},
		{
			category: 0,
			name: 'Travel Checklist',
			url: 'https://lavar.mercloud.com/p/tchecklist',
			repository: 'https://github.com/ayurushev/travelchecklist',
			description: 'Веб-приложение (адаптировано для мобильных устройств) для планирования поездок (создавал для себя, когда планировал свой отпуск). Можно добавлять позиции и подпозиции с ценами. Отмечать выполненные позиции. Данные сохраняются в localStorage.',
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'AngularJS, AngularJS Material' },
				{ type: 'Build', value: 'Brunch' }
			]
		},
		{
			category: 0,
			name: 'Airfare Tracker 2',
			url: 'https://lavar.mercloud.com/p/aft2',
			repository: 'https://github.com/ayurushev/airfaretracker2',
			ss: ['aft201fs.png', 'aft202fs.png', 'aft203fs.png'],
			description: 'Обновленная версия веб-приложения для отслеживания стоимости перелетов у авиакомпании Ryanair. Добавлена автоматическая загрузка списка доступных дат при выборе аэропорта вылета и назначения.',
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'AngularJS, AngularJS Material, Angular Chart (Chart.js)' },
				{ type: 'Build', value: 'Brunch' }
			]
		},
		{
			category: 3,
			name: 'Логотип 1',
			ss: ['kirbai01.png', 'kirbai02.png', 'kirbai03.png', 'kirbai04.png'],
			//description: 'Несколько версий логотипа для стилиста-парикмахера Елены Кирбай - ведущего тренера-технолога студии "Вирсавия" г. Калининград.',
			technologies: [
				{ type: 'Made with', value: 'Inkscape 0.92' }
			]
		},
		{
			category: 0,
			name: 'Этот сайт',
			url: 'https://lavar.mercloud.com',
			repository: 'https://github.com/ayurushev/lavar',
			description: 'Немного обо мне, описание работ с примененными технологиями и контактная информация.',
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'AngularJS, anime.js' },
				{ type: 'Build', value: 'Brunch' }
			]
		},
		{
			category: 0,
			name: 'Airfare Tracker',
			url: 'https://lavar.mercloud.com/p/aft',
			ss: ['aft01fs.png', 'aft02fs.png'],
			description: 'Веб-приложение, позволяющее отслеживать цены на перелеты у авиакомпании Ryanair. Ведется статистика стоимости билетов. Когда цена билетов меняется, проигрывается короткий звуковой сигнал. Все данные хранятся локально браузером в объекте localStorage.',
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'AngularJS, Angular Material, jQuery' },
				{ type: 'Build', value: 'Brunch' }
			]
		},
		{
			category: 0,
			name: 'TeSol',
			url: 'https://lavar.mercloud.com/p/tesol',
			ss: ['tesol01fs.png', 'tesol02fs.png'],
			description: 'Веб-приложение для автоматизации бизнес-процессов на основном месте работы. Помогает быстрее готовить типовые технические решения, а также отслеживать количество свободных портов на узлах доступа. Все данные хранятся локально браузером в объекте localStorage.',
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'AngularJS, Angular Material, jQuery' },
				{ type: 'Build', value: 'Brunch' }
			]
		},
		{
			category: 0,
			name: 'MERcloud App v2.0',
			url: 'https://app.mercloud.com',
			ss: ['mc201fs.png', 'mc202fs.png'],
			video: 'https://www.youtube.com/watch?v=sRsvqTAuFSI',
			description: 'Коммерческое веб-приложение для врачей-стоматологов и стоматологических клиник. Позволяет вести расписание приемов. Создавать наряды, выставлять счета. Вести дневник по форме 043/У. Также имеется прейскурант на выполняемые работы, время работы, журнал движения средств и многое другое.',
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'AngularJS, Angular Material, jQuery' },
				{ type: 'Build', value: 'Brunch' },
				{ type: 'Back-end', value: 'LAMP / Microsoft Azure VM' }
			]
		},
		{
			category: 0,
			name: 'MERcloud Website',
			url: 'https://www.mercloud.com',
			ss: ['mc01fs.png', 'mc02fs.png'],
			description: 'Домашная страница проекта MERcloud App v2.0. Описание основных функций продукта. Онлайн-регистрация с возможностью получения 1 месяца бесплатного пользования.',
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'AngularJS, Angular Material, jQuery' },
				{ type: 'Back-end', value: 'LAMP' }
			]
		},
		{
			category: 0,
			name: 'MERcloud App v1.0',
			url: 'http://www.mercloud.ru',
			ss: ['mc101fs.png', 'mc102fs.png'],
			description: 'Первая версия веб-приложения для врачей-стоматологов и стоматологических клиник. Создавалась индивидуально для нужд одной местной стоматологической клиники полностью на библиотеке jQuery.',
			discontinued: true,
			technologies: [
				{ type: 'Frameworks/Libraries', value: 'jQuery' },
				{ type: 'Back-end', value: 'LAMP / Virtual Hosting' }
			]
		},
		{
			category: 3,
			name: '3D визуализация 1',
			ss: ['lapart01.jpg', 'lapart02.jpg', 'lapart03.jpg', 'lapart04.jpg', 'lapart05.jpg'],
			technologies: [
				{ type: 'Made with', value: 'Sketchup 2015, V-Ray' }
			]
		},
		{
			category: 1,
			name: 'Tickets',
			year: '2002',
			ss: ['tickets.png', 'tdbcreator.png'],
			description: 'Программа тестирования персонала. Состоит из 2-х отдельных программ: самого тестировщика и программы для создания файлов с тестами.',
			discontinued: true,
			technologies: [{ type: 'Language', value: 'Delphi' }]
		},
		{
			category: 1,
			name: 'Автоматизация РП',
			year: '2009-2011',
			ss: ['dslamupc.png', 'dslamac.png', 'des3200ac.png'],
			description: 'Ряд утилит для автоматизации рабочих процессов. Возможность подсчета пользовательских профилей на DSLAM Alcatel серии 7302/7330. Подключение к устройствам из списка по протоколу Telnet и выполнение заданных команд. Быстрое создание конфигурационных файлов для коммутаторов D-Link серии DES-3200-XX. Система учета клиентского оборудования (склад-клиент) и тд.',
			discontinued: true,
			technologies: [{ type: 'Language', value: 'Delphi, Perl' }]
		},
		{
			category: 1,
			name: 'LITPoller',
			year: '2010',
			ss: ['litpoller.png'],
			description: 'Комплексная утилита для мониторинга состояния сетевых элементов. Позволяет проводить опрос устройств как по протоколу ICMP, так и по протоколу Telnet (проходя авторизацию на устройстве, выполняя заданную команду и интерпретируя её вывод на основе специальных шаблонов).',
			discontinued: true,
			technologies: [{ type: 'Language', value: 'Delphi' }]
		},
		{
			category: 1,
			name: 'Частный заказ',
			year: '2008-2012',
			ss: ['autoru.png', 'carhunter.png'],
			description: 'Серия программ, позволяющих отслеживать новые предложения (по автомобилям) на популярных интернет-сайтах (Auto.ru, AutoScout24.de, Mobile.de и тд.).',
			discontinued: true,
			technologies: [{ type: 'Language', value: 'Delphi' }]
		}
	];
}]);
