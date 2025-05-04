<!DOCTYPE html>
<html lang="es-HN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Asesoría empresarial para emprendedores en Honduras">
    <title>ASER S. de R.L. | Asesoría Empresarial</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="assets/images/logo.png" type="image/png">
</head>
<body>
    <header class="main-header">
        <div class="container">
            <div class="logo-container">
                <img src="assets/images/logo.png" alt="ASER S. de R.L." class="logo">
                <div class="logo-text">
                    <h1>ASER S. de R.L.</h1>
                    <p class="slogan">De la idea al negocio, sin perder un paso</p>
                </div>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="#" id="nav-dashboard">Inicio</a></li>
                    <li><a href="#" id="nav-knowledge">Guías</a></li>
                    <li><a href="#" id="nav-contact">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container">
        <!-- Onboarding Section -->
        <section id="onboarding" class="active-section">
            <div class="onboarding-card">
                <h2>Crea tu empresa en Honduras</h2>
                <p class="subtitle">Te guiaremos paso a paso en el proceso de formación de tu empresa</p>
                
                <form id="onboarding-form">
                    <div class="form-group">
                        <label for="business-type">Tipo de empresa</label>
                        <select id="business-type" required>
                            <option value="">Selecciona una opción</option>
                            <option value="SRL">Sociedad de Responsabilidad Limitada (S. de R.L.)</option>
                            <option value="SA">Sociedad Anónima (S.A.)</option>
                            <option value="PN">Persona Natural</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="business-sector">Sector de tu negocio</label>
                        <select id="business-sector" required>
                            <option value="">Selecciona una opción</option>
                            <option value="COMERCIO">Comercio</option>
                            <option value="SERVICIOS">Servicios</option>
                            <option value="MANUFACTURA">Manufactura</option>
                            <option value="TECNOLOGIA">Tecnología</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="business-budget">Presupuesto inicial (en Lempiras)</label>
                        <input type="number" id="business-budget" placeholder="Ej: 50,000" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="business-name">Nombre de tu empresa (opcional)</label>
                        <input type="text" id="business-name" placeholder="Ej: Mi Negocio Honduras">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-rocket"></i> Comenzar mi plan
                    </button>
                </form>
            </div>
        </section>

        <!-- Dashboard Section -->
        <section id="dashboard">
            <div class="dashboard-header">
                <h2 id="dashboard-title">Plan de formación empresarial</h2>
                <div class="user-info" id="user-info"></div>
            </div>
            
            <div class="progress-container">
                <div class="progress-card">
                    <h3><i class="fas fa-tasks"></i> Progreso general</h3>
                    <div class="progress-bar">
                        <div class="progress-fill" id="overall-progress"></div>
                    </div>
                    <p class="progress-text">Has completado <span id="progress-percent">0</span>% de los trámites</p>
                </div>
                
                <div class="stats-card">
                    <div class="stat-item">
                        <i class="fas fa-calendar-day"></i>
                        <div>
                            <span class="stat-value" id="days-estimated">0</span>
                            <span class="stat-label">Días estimados</span>
                        </div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-money-bill-wave"></i>
                        <div>
                            <span class="stat-value" id="total-cost">L. 0</span>
                            <span class="stat-label">Costo total</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="gantt-container">
                <h3><i class="fas fa-project-diagram"></i> Plan de trámites</h3>
                <p class="section-description">Tu línea de tiempo personalizada para formar tu empresa</p>
                
                <div class="gantt-controls">
                    <button class="btn btn-outline" id="zoom-in">
                        <i class="fas fa-search-plus"></i>
                    </button>
                    <button class="btn btn-outline" id="zoom-out">
                        <i class="fas fa-search-minus"></i>
                    </button>
                </div>
                
                <div class="gantt-wrapper">
                    <div id="gantt-chart"></div>
                </div>
            </div>
            
            <div class="knowledge-container">
                <h3><i class="fas fa-book"></i> Base de conocimiento</h3>
                <p class="section-description">Encuentra aquí toda la información que necesitas para cada trámite</p>
                
                <div class="knowledge-grid" id="knowledge-base">
                    <!-- Knowledge items will be loaded here -->
                </div>
            </div>
        </section>
    </main>

    <!-- Assistant Button -->
    <button class="assistant-btn" id="assistant-btn">
        <i class="fas fa-robot"></i>
    </button>

    <!-- Assistant Chat -->
    <div class="assistant-chat" id="assistant-chat">
        <div class="chat-header">
            <h4>Asistente Virtual</h4>
            <button id="close-chat"><i class="fas fa-times"></i></button>
        </div>
        <div class="chat-body" id="chat-body">
            <div class="chat-message bot-message">
                <div class="message-content">
                    <p>¡Hola! Soy tu asistente para la formación de empresas. ¿En qué puedo ayudarte hoy?</p>
                </div>
                <div class="message-time">Ahora</div>
            </div>
        </div>
        <div class="chat-input">
            <input type="text" id="chat-input" placeholder="Escribe tu pregunta...">
            <button id="send-message"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>

    <script src="js/app.js"></script>
</body>
</html>